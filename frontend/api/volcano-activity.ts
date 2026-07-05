const URL = "https://magma.esdm.go.id/v1/gunung-api/tingkat-aktivitas";

const LEVEL_MAP: Record<string, { id: number; code: string }> = {
  "Level IV (Awas)": { id: 4, code: "AWAS" },
  "Level III (Siaga)": { id: 3, code: "SIAGA" },
  "Level II (Waspada)": { id: 2, code: "WASPADA" },
  "Level I (Normal)": { id: 1, code: "NORMAL" },
};

const stripHtml = (s: string) => s.replace(/<[^>]*>/g, "");

function extractSummary(html: string): Record<string, number> {
  const summary: Record<string, number> = {};
  const cardRe = /<div[^>]*class="[^"]*\bcard-status\b[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  let m: RegExpExecArray | null;
  while ((m = cardRe.exec(html)) !== null) {
    const h1 = /<h1[^>]*>([^<]*)<\/h1>/i.exec(m[1]);
    const p = /<p[^>]*>([^<]*)<\/p>/i.exec(m[1]);
    if (!h1 || !p) continue;
    const count = parseInt(h1[1].trim(), 10);
    const label = p[1].trim();
    const mapped = LEVEL_MAP[label];
    if (mapped) summary[mapped.code] = count;
  }
  return summary;
}

function extractVolcanoes(html: string) {
  const volcanoes: Array<{
    name: string;
    province: string;
    level: string;
    level_id: number;
    level_label: string;
    report_url: string | null;
  }> = [];

  const tableRe = /<table[^>]*class="[^"]*\bcard-table\b[^"]*"[^>]*>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/i;
  const tableMatch = tableRe.exec(html);
  if (!tableMatch) return volcanoes;

  const tbody = tableMatch[1];
  const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let rowMatch: RegExpExecArray | null;
  let currentLevel: string | null = null;

  while ((rowMatch = rowRe.exec(tbody)) !== null) {
    const cells: string[] = [];
    const tdRe = /<td[^>]*>([\s\S]*?)<\/td>/gi;
    let tdMatch: RegExpExecArray | null;
    let firstTag = "";
    const firstTagRe = /<td[^>]*>/i.exec(rowMatch[1]);
    if (firstTagRe) firstTag = firstTagRe[0];

    while ((tdMatch = tdRe.exec(rowMatch[1])) !== null) {
      cells.push(tdMatch[1]);
    }
    if (cells.length === 0) continue;

    if (/\browspan\s*=/i.test(firstTag)) {
      currentLevel = stripHtml(cells[0]).trim().split("\n")[0].trim();
      continue;
    }

    const nameHtml = cells.length === 3 ? cells[cells.length - 1] : cells[0];
    const nameText = stripHtml(nameHtml).replace(/Lihat\s*laporan/gi, "").trim();

    const hrefRe = /<a[^>]*href="([^"]*)"[^>]*>/i.exec(nameHtml);
    const href = hrefRe?.[1] ?? null;
    const reportUrl = href && href.includes("laporan") ? href : null;

    const lastDash = nameText.lastIndexOf(" - ");
    const lastEnDash = nameText.lastIndexOf(" – ");
    const sepIdx = Math.max(lastDash, lastEnDash);
    if (sepIdx === -1) continue;

    const sep = sepIdx === lastDash ? " - " : " – ";
    const name = nameText.slice(0, sepIdx).trim();
    const province = nameText.slice(sepIdx + sep.length).trim();

    const levelInfo = LEVEL_MAP[currentLevel ?? ""] ?? {
      id: 0,
      code: "UNKNOWN",
    };

    volcanoes.push({
      name,
      province,
      level: levelInfo.code,
      level_id: levelInfo.id,
      level_label: currentLevel ?? "",
      report_url: reportUrl,
    });
  }

  return volcanoes;
}

export default async function handler(
  req: { method: string },
  res: {
    status: (code: number) => typeof res;
    json: (data: unknown) => void;
    setHeader: (name: string, value: string) => void;
  },
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const response = await fetch(URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; DiVolca/1.0)" },
    });

    if (!response.ok) {
      res
        .status(502)
        .json({ error: `MAGMA upstream error: ${response.status}` });
      return;
    }

    const html = await response.text();
    const summary = extractSummary(html);
    const volcanoes = extractVolcanoes(html);

    for (const [code, expected] of Object.entries(summary)) {
      const actual = volcanoes.filter((v) => v.level === code).length;
      if (expected !== actual) {
        console.warn(
          `Volcano count mismatch: ${code} expected ${expected}, parsed ${actual}`,
        );
      }
    }

    const data = {
      metadata: {
        updated_at: new Date().toISOString(),
        source: URL,
      },
      summary,
      volcanoes,
    };

    res.setHeader("Content-Type", "application/json");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=21600, stale-while-revalidate=300",
    );
    res.status(200).json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Failed to scrape volcano data:", message);
    res.status(500).json({ error: "Gagal mengambil data gunung berapi" });
  }
}

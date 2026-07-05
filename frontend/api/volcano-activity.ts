import { parse } from "node-html-parser";

const URL = "https://magma.esdm.go.id/v1/gunung-api/tingkat-aktivitas";

const LEVEL_MAP: Record<string, { id: number; code: string }> = {
  "Level IV (Awas)": { id: 4, code: "AWAS" },
  "Level III (Siaga)": { id: 3, code: "SIAGA" },
  "Level II (Waspada)": { id: 2, code: "WASPADA" },
  "Level I (Normal)": { id: 1, code: "NORMAL" },
};

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
    const root = parse(html);

    const summary: Record<string, number> = {};
    for (const card of root.querySelectorAll(".card-status")) {
      const h1 = card.querySelector("h1");
      const p = card.querySelector("p");
      if (!h1 || !p) continue;

      const count = parseInt(h1.text.trim(), 10);
      const label = p.text.trim();
      const mapped = LEVEL_MAP[label];
      if (mapped) summary[mapped.code] = count;
    }

    const volcanoes: Array<{
      name: string;
      province: string;
      level: string;
      level_id: number;
      level_label: string;
      report_url: string | null;
    }> = [];

    const tbody = root.querySelector(".card-table table tbody");
    if (tbody) {
      let currentLevel: string | null = null;

      for (const tr of tbody.querySelectorAll("tr")) {
        const tds = tr.querySelectorAll("td");
        if (tds.length === 0) continue;

        const first = tds[0];
        const rowspan = first.getAttribute("rowspan");

        if (rowspan) {
          currentLevel = first.text.trim().split("\n")[0].trim();
          continue;
        }

        const nameTd = tds.length === 3 ? tds[tds.length - 1] : tds[0];
        const nameText = nameTd.text.replace("Lihat laporan", "").trim();

        const linkEl = nameTd.querySelector("a");
        const href = linkEl?.getAttribute("href");
        const reportUrl =
          href && href.includes("laporan") ? href : null;

        const separators = [" - ", " – "];
        let lastSepIdx = -1;
        let sep = "";
        for (const s of separators) {
          const idx = nameText.lastIndexOf(s);
          if (idx > lastSepIdx) {
            lastSepIdx = idx;
            sep = s;
          }
        }

        if (lastSepIdx === -1) continue;

        const name = nameText.slice(0, lastSepIdx).trim();
        const province = nameText.slice(lastSepIdx + sep.length).trim();

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
    }

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

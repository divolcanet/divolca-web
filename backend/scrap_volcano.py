"""
Scraper for MAGMA Indonesia Volcano Activity Levels
https://magma.esdm.go.id/v1/gunung-api/tingkat-aktivitas

Outputs structured JSON with summary stats and detailed volcano list.
"""

import httpx
from bs4 import BeautifulSoup
from datetime import datetime, timezone
import json
import sys

URL = "https://magma.esdm.go.id/v1/gunung-api/tingkat-aktivitas"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

LEVEL_MAP = {
    "Level IV (Awas)":  {"id": 4, "code": "AWAS"},
    "Level III (Siaga)": {"id": 3, "code": "SIAGA"},
    "Level II (Waspada)": {"id": 2, "code": "WASPADA"},
    "Level I (Normal)":  {"id": 1, "code": "NORMAL"},
}


def scrape():
    resp = httpx.get(URL, headers={"User-Agent": USER_AGENT}, timeout=30)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    # --- Summary cards ---
    summary = {}
    for card in soup.select(".card-status"):
        count = int(card.select_one("h1").text.strip())
        label = card.select_one("p").text.strip()
        summary[LEVEL_MAP[label]["code"]] = count

    # --- Detail table ---
    volcanoes = []
    current_level = None
    current_desc = None
    tbody = soup.select_one(".card-table table tbody")

    for tr in tbody.find_all("tr"):
        tds = tr.find_all("td")

        if not tds:
            continue

        first = tds[0]
        if first.has_attr("rowspan"):
            raw = first.get_text("\n", strip=True).split("\n")[0]
            current_level = raw
            current_desc = first.get_text("\n", strip=True)
            continue

        name_td = tds[-1] if len(tds) == 3 else tds[0]

        report_link = name_td.find("a", href=True)
        report_url = (
            report_link["href"] if report_link and "laporan" in report_link["href"]
            else None
        )

        name_text = name_td.get_text(" ", strip=True)
        name_text = name_text.replace("Lihat laporan", "").strip()
        parts = name_text.rsplit(" - ", 1)
        if len(parts) != 2:
            parts = name_text.rsplit(" – ", 1)
        if len(parts) != 2:
            continue

        name = parts[0].strip()
        province = parts[1].strip()

        level_info = LEVEL_MAP.get(current_level, {"id": 0, "code": "UNKNOWN"})

        volcanoes.append({
            "name": name,
            "province": province,
            "level": level_info["code"],
            "level_id": level_info["id"],
            "level_label": current_level,
            "report_url": report_url,
        })

    # --- Validate counts ---
    for label, expected in summary.items():
        actual = sum(1 for v in volcanoes if v["level"] == label)
        if expected != actual:
            print(
                f"Warning: {label} expected {expected}, parsed {actual}",
                file=sys.stderr,
            )

    return {
        "metadata": {
            "updated_at": datetime.now(timezone.utc).isoformat(),
            "source": URL,
        },
        "summary": summary,
        "volcanoes": volcanoes,
    }


def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else "volcano_activity.json"
    data = scrape()
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(data['volcanoes'])} volcanoes to {out_path}")


if __name__ == "__main__":
    main()

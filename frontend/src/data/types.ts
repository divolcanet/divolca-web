export type MountainSpatial = { mountainUrl: string; categories: Category[] };

export type Category = { key: string; label: string; models: Model[] };

export type Model = { key: string; label: string; url?: string; show_base_model?: boolean; hotspots: HotspotData[] };

export type HotspotData = { id: number; position: [number, number, number]; title: string; description: string };

export type VolcanoActivityStat = {
  metadata: { updated_at: string; source: string };
  summary: Record<string, number>;
  volcanoes: { name: string; province: string; level: "AWAS" | "SIAGA" | "WASPADA" | "NORMAL"; level_id: 1 | 2 | 3 | 4; level_label: string; report_url: string }[];
};

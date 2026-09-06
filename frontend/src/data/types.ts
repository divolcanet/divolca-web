import { CENTER_X, CENTER_Y, SCALE, Z_EXAGGERATION } from "../lib/3d-const";
export class HotspotModel {
  id: number;
  position: [number, number, number];
  title: string;
  description: string;

  constructor({ id, position, title, description }: { id: number; position: [number, number, number]; title: string; description: string }) {
    this.id = id;
    this.position = position;
    this.title = title;
    this.description = description;
  }

  utmToScenePosition(): [number, number, number] {
    const x = (this.position[0] - CENTER_X) * SCALE;
    const y = this.position[2] * Z_EXAGGERATION * SCALE;
    const z = -(this.position[1] - CENTER_Y) * SCALE;
    return [x, y, z];
  }
}

export type MountainSpatial = { mountainUrl: string; categories: Category[] };

export type Category = { key: string; label: string; unit: string; models: Model[] };

export type Model = { key: string; label: string; url?: string; dynamic_transparency?: boolean; show_base_model?: boolean; hotspots: HotspotModel[] };

export type VolcanoActivityStat = {
  metadata: { updated_at: string; source: string };
  summary: Record<string, number>;
  volcanoes: { name: string; province: string; level: "AWAS" | "SIAGA" | "WASPADA" | "NORMAL"; level_id: 1 | 2 | 3 | 4; level_label: string; report_url: string }[];
};

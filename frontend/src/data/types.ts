export type MountainSpatial = {
  mountainUrl: string;
  categories: Category[];
};

export type Category = {
  key: string;
  label: string;
  models: Model[];
};

export type Model = {
  key: string;
  label: string;
  url: string;
  hotspots: HotspotData[];
};

export type HotspotData = {
  id: number;
  position: [number, number, number];
  title: string;
  description: string;
};

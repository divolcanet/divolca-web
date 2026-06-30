export interface GlossaryEntry {
  slug: string;
  title: string;
  content: string;
  externalLink?: string;
}

export interface MarkerInfo {
  title: string;
  description: string;
}

export interface MarkerData {
  id: number;
  position: [number, number, number];
  info: MarkerInfo;
}

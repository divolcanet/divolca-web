export interface SpatialLayer {
  id: string;
  name: string;
  description: string;
  color: string;
  visible: boolean;
}

export interface ResearchStats {
  lokasi: string;
  lamaPenelitianLangsung: string;
  lamaPenelitianTotal: string;
  jenisData: string;
}

export interface SpatialData {
  layers: SpatialLayer[];
  stats: ResearchStats;
  depthLevels: string[];
}

export interface DepthSlice {
  depth: string;
  label: string;
  gravityImage: string | null;
  magneticImage: string | null;
  description: string;
}

export interface GlossaryEntry {
  slug: string;
  title: string;
  content: string;
  externalLink?: string;
}

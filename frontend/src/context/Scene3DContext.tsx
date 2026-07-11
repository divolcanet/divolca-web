import { create } from "zustand";

interface ViewState {
  cameraPosition: [number, number, number] | null;
  activeModel: string | null;
  activeCategory: string | null;
  depth: number;
  comparisonMode: boolean;
  modelLoading: boolean;
  setCameraPosition: (pos: [number, number, number] | null) => void;
  setActiveModel: (model: string | null) => void;
  setActiveCategory: (cat: string | null) => void;
  setDepth: (depth: number) => void;
  setComparisonMode: (on: boolean) => void;
  setModelLoading: (v: boolean) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  cameraPosition: null,
  activeModel: null,
  activeCategory: null,
  depth: 0,
  comparisonMode: false,
  modelLoading: true,
  setCameraPosition: (pos) => set({ cameraPosition: pos }),
  setActiveModel: (model) => set({ activeModel: model }),
  setActiveCategory: (cat) => set({ activeCategory: cat }),
  setDepth: (depth) => set({ depth }),
  setComparisonMode: (on) => set({ comparisonMode: on }),
  setModelLoading: (v) => set({ modelLoading: v }),
}));

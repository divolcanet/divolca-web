import { create } from "zustand";

interface LoadingState {
  active: boolean;
  setActive: (active: boolean) => void;
}

export const useModelLoading = create<LoadingState>((set) => ({
  active: false,
  setActive: (active) => set({ active }),
}));

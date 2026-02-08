import { create } from "zustand";

type UIState = {
  isCategoryOpen: boolean;
  openCategory: () => void;
  closeCategory: () => void;
  toggleCategory: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  isCategoryOpen: false,
  openCategory: () => set({ isCategoryOpen: true }),
  closeCategory: () => set({ isCategoryOpen: false }),
  toggleCategory: () =>
    set((s) => ({ isCategoryOpen: !s.isCategoryOpen })),
}));
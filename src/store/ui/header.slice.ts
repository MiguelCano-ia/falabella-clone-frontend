import { StateCreator } from "zustand";

export interface HeaderSlice {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

export const createHeaderSlice: StateCreator<HeaderSlice> = (set) => ({
  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
});

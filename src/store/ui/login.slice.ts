import { StateCreator } from "zustand";

export interface LoginSlice {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

export const createLoginSlice: StateCreator<LoginSlice> = (set) => ({
  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
});

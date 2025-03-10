import { StateCreator } from "zustand";

export interface RegisterSlice {
  isIdentityFieldOpen: boolean;
  handleIdentityField: () => void;
  closeIdentityField: () => void;
}

export const createRegisterSlice: StateCreator<RegisterSlice> = (set) => ({
  isIdentityFieldOpen: false,
  handleIdentityField: () =>
    set((state) => ({ isIdentityFieldOpen: !state.isIdentityFieldOpen })),
  closeIdentityField: () => set({ isIdentityFieldOpen: false }),
});

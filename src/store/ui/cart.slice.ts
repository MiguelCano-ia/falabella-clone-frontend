import { StateCreator } from "zustand";

export interface CartSlice {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
});

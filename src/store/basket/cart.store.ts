import { Products } from "@/interfaces/categories/product";
import { create } from "zustand";

interface CartState {
  cartProduct: Products | null;
  setCartProduct: (product: Products) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cartProduct: null,

  setCartProduct: (product) => set({ cartProduct: product }),
}));

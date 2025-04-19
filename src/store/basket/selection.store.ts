import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type SelectionMap = Record<string, boolean>;

interface SelectionState {
  // mapa { vendedor: { productoId: seleccionado } }
  selections: Record<string, SelectionMap>;
  // togglear un checkbox de un producto
  toggleProduct: (seller: string, productId: string) => void;
  // marcar/desmarcar todos los productos de un seller
  toggleAll: (seller: string, productIds: string[], value: boolean) => void;
}

export const useSelectionStore = create<SelectionState>()(
  devtools(
    persist(
      (set) => ({
        selections: {},
        toggleProduct: (seller: string, productId: string) => {
          set((state) => {
            const sellerMap = state.selections[seller] || {};
            const now = !sellerMap[productId];
            return {
              selections: {
                ...state.selections,
                [seller]: { ...sellerMap, [productId]: now },
              },
            };
          });
        },
        toggleAll: (seller: string, productIds: string[], value: boolean) => {
          set((state) => ({
            selections: {
              ...state.selections,
              [seller]: productIds.reduce(
                (acc, id) => ({ ...acc, [id]: value }),
                {}
              ),
            },
          }));
        },
      }),
      { name: "selection-store" }
    )
  )
);

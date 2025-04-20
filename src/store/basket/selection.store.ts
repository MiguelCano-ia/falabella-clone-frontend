import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type SelectionMap = Record<string, boolean>;

interface SelectionState {
  selections: Record<string, SelectionMap>;
  toggleProduct: (seller: string, productId: string) => void;
  toggleAll: (seller: string, productIds: string[], value: boolean) => void;
  hasHydrated: boolean;
  setHasHydrated: (h: boolean) => void;
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
        hasHydrated: false,
        setHasHydrated: (h: boolean) => set({ hasHydrated: h }),
      }),
      {
        name: "selection-store",
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    )
  )
);

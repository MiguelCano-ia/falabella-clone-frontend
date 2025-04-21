import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type SelectionMap = Record<string, boolean>;

interface SelectionState {
  selections: Record<string, SelectionMap>;
  selectProduct: (seller: string, productId: string) => void;
  toggleProduct: (seller: string, productId: string) => void;
  toggleAll: (seller: string, productIds: string[], value: boolean) => void;
  removeProduct: (seller: string, productId: string) => void;
  hasHydrated: boolean;
  clearAll: () => void;
  setHasHydrated: (h: boolean) => void;
}

export const useSelectionStore = create<SelectionState>()(
  devtools(
    persist(
      (set) => ({
        selections: {},

        selectProduct: (seller: string, productId: string) => {
          set((state) => {
            const sellerMap = state.selections[seller] || {};
            return {
              selections: {
                ...state.selections,
                [seller]: {
                  ...sellerMap,
                  [productId]: true,
                },
              },
            };
          });
        },

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
        removeProduct: (seller, productId) => {
          set((state) => {
            const sellerMap = state.selections[seller] || {};
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [productId]: _, ...restMap } = sellerMap;
            const newSelections = { ...state.selections };
            if (Object.keys(restMap).length > 0) {
              newSelections[seller] = restMap;
            } else {
              delete newSelections[seller];
            }
            return { selections: newSelections };
          });
        },

        clearAll: () => {
          set(() => ({
            selections: {},
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

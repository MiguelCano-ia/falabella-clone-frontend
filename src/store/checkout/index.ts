import { create } from "zustand";
import { createDeliverySlice, DeliverySlice } from "./delivery.slice";
import { devtools } from "zustand/middleware";

type ShareState = DeliverySlice;

export const useCheckoutStore = create<ShareState>()(
  devtools((...a) => ({
    ...createDeliverySlice(...a),
  }))
);

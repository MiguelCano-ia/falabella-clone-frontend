import { create } from "zustand";
import { createDeliverySlice, DeliverySlice } from "./delivery.slice";
import { devtools } from "zustand/middleware";
import { createPaymentSlice, PaymentSlice } from "./payment.slice";

type ShareState = DeliverySlice & PaymentSlice;

export const useCheckoutStore = create<ShareState>()(
  devtools((...a) => ({
    ...createDeliverySlice(...a),
    ...createPaymentSlice(...a),
  }))
);

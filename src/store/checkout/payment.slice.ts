import { StateCreator } from "zustand";

export interface PaymentSlice {
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (isPaymetModalOpen: boolean) => void;
}

export const createPaymentSlice: StateCreator<PaymentSlice> = (set) => ({
  isPaymentModalOpen: false,
  setIsPaymentModalOpen: (isPaymentModalOpen: boolean) =>
    set({ isPaymentModalOpen }),
});

import { StateCreator } from "zustand";

export interface DeliverySlice {
  email: string;
  openLoginByDelivery: boolean;
  verifyCode: boolean;
  setVerifyCode: (verifyCode: boolean) => void;
  setOpenLoginByDelivery: (openLoginByDelivery: boolean) => void;
  setEmail: (email: string) => void;
}

export const createDeliverySlice: StateCreator<DeliverySlice> = (set) => ({
  email: "",
  openLoginByDelivery: false,
  verifyCode: false,
  setVerifyCode: (verifyCode: boolean) => set({ verifyCode }),
  setOpenLoginByDelivery: (openLoginByDelivery: boolean) =>
    set({ openLoginByDelivery }),
  setEmail: (email: string) => set({ email }),
});

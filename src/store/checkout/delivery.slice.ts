import { StateCreator } from "zustand";

export interface DeliverySlice {
  email: string;
  openLoginByDelivery: boolean;
  verifyCode: boolean;
  isAddressModalOpen: boolean;
  setIsAddressModalOpen: (isAddressModalOpen: boolean) => void;
  setVerifyCode: (verifyCode: boolean) => void;
  setOpenLoginByDelivery: (openLoginByDelivery: boolean) => void;
  setEmail: (email: string) => void;
}

export const createDeliverySlice: StateCreator<DeliverySlice> = (set) => ({
  email: "",
  openLoginByDelivery: false,
  verifyCode: false,
  isAddressModalOpen: false,
  setVerifyCode: (verifyCode: boolean) => set({ verifyCode }),
  setOpenLoginByDelivery: (openLoginByDelivery: boolean) =>
    set({ openLoginByDelivery }),
  setEmail: (email: string) => set({ email }),
  setIsAddressModalOpen: (isAddressModalOpen: boolean) =>
    set({ isAddressModalOpen }),
});

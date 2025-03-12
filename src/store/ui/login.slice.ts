import { StateCreator } from "zustand";

export interface LoginSlice {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  isLoginHeaderModalOpen: boolean;
  openLoginHeaderModal: () => void;
  closeLoginHeaderModal: () => void;
}

export const createLoginSlice: StateCreator<LoginSlice> = (set) => ({
  isLoginOpen: false,
  isLoginHeaderModalOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
  openLoginHeaderModal: () => set({ isLoginHeaderModalOpen: true }),
  closeLoginHeaderModal: () => set({ isLoginHeaderModalOpen: false }),
});

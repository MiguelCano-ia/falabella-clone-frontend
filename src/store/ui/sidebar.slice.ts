import { StateCreator } from "zustand";

export interface SidebarSlice {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openCategory: string;
  setOpenCategory: (category: string) => void;
  openSubCategory: string;
  setOpenSubCategory: (category: string) => void;
  categoryDesktop: string;
  setCategoryDesktop: (category: string) => void;
}

export const createSidebarSlice: StateCreator<SidebarSlice> = (set) => ({
  isSidebarOpen: false,
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () =>
    set({
      isSidebarOpen: false,
      openCategory: "",
      openSubCategory: "",
      categoryDesktop: "",
    }),
  openCategory: "",
  setOpenCategory: (category) => set({ openCategory: category }),
  openSubCategory: "",
  setOpenSubCategory: (category) => set({ openSubCategory: category }),
  categoryDesktop: "",
  setCategoryDesktop: (category) => set({ categoryDesktop: category }),
});

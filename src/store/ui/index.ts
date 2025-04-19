import { create } from "zustand";
import { createHeaderSlice, HeaderSlice } from "./header.slice";
import { createLoginSlice, LoginSlice } from "./login.slice";
import { createRegisterSlice, RegisterSlice } from "./register.slice";
import { createSidebarSlice, SidebarSlice } from "./sidebar.slice";
import { createCartSlice, CartSlice } from "./cart.slice";
import { devtools } from "zustand/middleware";

type ShareState = SidebarSlice &
  HeaderSlice &
  RegisterSlice &
  LoginSlice &
  CartSlice;

export const useUIStore = create<ShareState>()(
  devtools((...a) => ({
    ...createSidebarSlice(...a),
    ...createHeaderSlice(...a),
    ...createRegisterSlice(...a),
    ...createLoginSlice(...a),
    ...createCartSlice(...a),
  }))
);

"use client";

import { useUIStore } from "@/store/ui";
import { useEffect } from "react";

export const NotAuthenticated = () => {
  const openLoginForm = useUIStore((state) => state.openLogin);

  useEffect(() => {
    openLoginForm();
  }, []);
  return null;
};

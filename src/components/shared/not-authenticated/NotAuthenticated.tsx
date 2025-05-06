"use client";

import { Button } from "@/components";
import { useUIStore } from "@/store/ui";
import { useEffect } from "react";

export const NotAuthenticated = () => {
  const openLoginForm = useUIStore((state) => state.openLogin);

  useEffect(() => {
    openLoginForm();
  }, [openLoginForm]);

  return (
    <div className="flex items-center">
      <Button
        variant="login"
        className="rounded-[280px] font-semibold text-[16px] py-3 px-12 cursor-pointer h-[44px] hover:bg-[#3E4B58]"
        onClick={openLoginForm}
      >
        Inicia sesión
      </Button>
    </div>
  );
};

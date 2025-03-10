"use client";

import { useUIStore } from "@/store/ui/indext";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const Overlay = ({ children }: Props) => {
  const isLoginOpen = useUIStore((state) => state.isLoginOpen);
  const closeLogin = useUIStore((state) => state.closeLogin);

  useEffect(() => {
    document.body.style.overflow = isLoginOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoginOpen]);

  return (
    <div
      onClick={closeLogin}
      className={`
        fixed flex justify-center items-center w-screen h-screen bg-[#4A4A4A80] z-10
        transition-all duration-300 ease-in-out
        ${isLoginOpen ? "pointer-events-auto" : "pointer-events-none"}
        
        /* Mobile: animación de slide */
        ${isLoginOpen ? "translate-y-0" : "translate-y-full"}
        
        /* Desktop (sm): se sobreescribe la transformación y se controla la opacidad */
        sm:translate-y-0 sm:${isLoginOpen ? "opacity-100" : "opacity-0"}
      `}
    >
      {children}
    </div>
  );
};

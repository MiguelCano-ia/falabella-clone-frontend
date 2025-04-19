"use client";

import { useUIStore } from "@/store/ui";
import { FormState } from "@/validations/auth/login";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  onResetForm: () => void;
  state: FormState;
}

export const Overlay = ({ children, onResetForm, state }: Props) => {
  const isLoginOpen = useUIStore((state) => state.isLoginOpen);
  const closeLogin = useUIStore((state) => state.closeLogin);

  useEffect(() => {
    document.body.style.overflow = isLoginOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoginOpen]);

  return (
    <>
      {isLoginOpen ? (
        <div
          onClick={() => {
            setTimeout(() => closeLogin(), 0);
            onResetForm();
            if (state) state.errors = {};
          }}
          className={`
        fixed flex justify-center items-center w-screen h-screen bg-[#4A4A4A80] z-20
        transition-all duration-300 ease-in-out
        ${isLoginOpen ? "pointer-events-auto" : "pointer-events-none"}

        ${isLoginOpen ? "translate-y-0" : "translate-y-full"}

        sm:translate-y-0 sm:${isLoginOpen ? "opacity-100" : "opacity-0"}
      `}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

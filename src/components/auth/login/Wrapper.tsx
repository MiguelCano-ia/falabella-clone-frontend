"use client";

import { useCheckoutStore } from "@/store/checkout";
import { useUIStore } from "@/store/ui";
import { FormState } from "@/validations/auth/login";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PurchaseCode } from "./PurchaseCode";

interface Props {
  children: React.ReactNode;
  onResetForm: () => void;
  state: FormState;
}

export const Wrapper = ({ children, onResetForm, state }: Props) => {
  const closeLoginForm = useUIStore((state) => state.closeLogin);
  const openLoginByDelivery = useCheckoutStore(
    (state) => state.openLoginByDelivery
  );
  const setOpenLoginByDelivery = useCheckoutStore(
    (state) => state.setOpenLoginByDelivery
  );
  const verifyCode = useCheckoutStore((state) => state.verifyCode);
  const setVerifyCode = useCheckoutStore((state) => state.setVerifyCode);
  const email = useCheckoutStore((state) => state.email);

  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg w-screen pt-[33px] pb-[51px] px-6 max-sm:mt-10 sm:max-w-[500px] sm:rounded-md sm:w-full sm:pt-5 sm:px-[50px] sm:pb-[34px] z-30"
      onClick={handleFormClick}
    >
      <div className="flex flex-reverse justify-end">
        <X
          size={24}
          className="text-[#9CA3AF] cursor-pointer"
          onClick={() => {
            closeLoginForm();
            onResetForm();
            setOpenLoginByDelivery(false);
            setVerifyCode(false);
            if (state) state.errors = {};
          }}
        />
      </div>
      {verifyCode ? (
        <PurchaseCode email={email} />
      ) : (
        <>
          <div className="flex pb-5 mb-5 border-b">
            <Image
              src="/icons/desktop/falabella-icon.svg"
              width={93}
              height={14}
              alt="falabella"
            />
          </div>

          <h2 className="text-[24px] leading-[29px] font-normal text-[#333333] mb-4">
            Inicia sesión para comprar
          </h2>

          {children}

          {!openLoginByDelivery && (
            <div className="text-center text-sm">
              <span className="text-[14px] leading-[17px] text-[#767676]">
                ¿Aún no tienes cuenta?{" "}
              </span>
              <Link
                href="/falabella-co/myaccount/registration"
                className="text-[#495867] underline underline-offset-1"
                onClick={closeLoginForm}
              >
                Regístrate
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

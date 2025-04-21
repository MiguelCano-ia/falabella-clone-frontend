"use client";

import Image from "next/image";
import Link from "next/link";
import { UserData } from "@/interfaces/auth/user";
import { useUIStore } from "@/store/ui";
import { Button } from "@/components/ui/button";

interface Props {
  user: UserData | null;
}

export const EmptyCart = ({ user }: Props) => {
  const openLoginForm = useUIStore((state) => state.openLogin);

  return (
    <div className="flex flex-col items-center p-4 gap-5 shadow-md rounded-xl">
      <div className="flex items-center gap-5">
        <Image
          src="/icons/basket/empty-cart.png"
          width={100}
          height={100}
          alt="empty cart"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] text-[#333] font-bold">
            Tu Carro está vacío
          </h1>
          <p className="text-[16px] leading-[20px] text-[#333] max-w-[290px]">
            {user
              ? "¡Aprovecha! Tenemos miles de productos en oferta y oportunidades únicas."
              : "Inicia sesión para ver los productos que habías guardado en tu Carro."}
          </p>
        </div>
      </div>
      <Button
        variant="register"
        onClick={() =>
          !user ? openLoginForm() : <Link href="/falabella-co/products" />
        }
        className="w-[295px] rounded-[55px] text-base cursor-pointer bg-icon-background text-primary-foreground h-[46px] text-[20px] leading-[26px] font-semibold"
      >
        {user ? "Ver Ofertas" : "Iniciar Sesión"}
      </Button>
      {!user && (
        <div className="flex gap-1 text-[14px] leading-[16.8px] font-normal">
          <p className="text-[#717171]">¿No tienes cuenta?</p>
          <Link
            href="/falabella-co/myaccount/registration"
            className="text-[#495867] underline underline-offset-1"
          >
            Regístrate
          </Link>
        </div>
      )}
    </div>
  );
};

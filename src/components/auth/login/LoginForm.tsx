"use client";

import Image from "next/image";
import { Overlay } from "./Overlay";
import { Eye, EyeOff, X } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/ui/indext";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const closeLoginForm = useUIStore((state) => state.closeLogin);

  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Overlay>
      <div
        className="bg-white rounded-xl shadow-lg w-screen pt-[33px] pb-[51px] px-6 max-sm:mt-10 sm:max-w-[500px] sm:rounded-md sm:w-full sm:pt-5 sm:px-[50px] sm:pb-[34px] z-12 "
        onClick={handleFormClick}
      >
        <div className="flex flex-reverse justify-end">
          <X
            size={24}
            className="text-[#9CA3AF] cursor-pointer"
            onClick={closeLoginForm}
          />
        </div>
        <div className="flex pb-5 mb-5 border-b">
          <Image
            src="/icons/desktop/falabella-icon.svg"
            width={93}
            height={14}
            alt="falabella"
          />
        </div>

        <div className="">
          <h2 className="text-[24px] leading-[29px] font-normal text-[#333333] mb-6">
            Inicia sesión para comprar
          </h2>

          <form>
            <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
              <Label
                htmlFor="email"
                className="text-start text-[14px] mb-1 h-4"
              >
                Correo electrónico
              </Label>
              <Input
                type="email"
                id="emailLogin"
                placeholder="Ingresa tu correo electrónico"
                className="border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm font-normal focus:outline-none"
              />
            </div>

            <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
              <Label
                htmlFor="password"
                className="text-start text-[14px] mb-1 h-4"
              >
                Contraseña
              </Label>
              <div className="flex items-center justify-between border-b-[1px] border-b-[#A6A6A6]">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="passwordLogin"
                  placeholder="Ingresa una contraseña"
                  className="border-0 rounded-none p-0 text-sm  font-normal focus:outline-none"
                />
                {showPassword ? (
                  <Eye
                    size={20}
                    className="cursor-pointer text-[#9CA3AF]"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOff
                    size={20}
                    className="cursor-pointer text-[#9CA3AF]"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            <Button
              type="submit"
              variant="login"
              className="rounded-[280px] font-normal text-[19px] mb-4 py-3"
            >
              Ingresar
            </Button>
          </form>

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
        </div>
      </div>
    </Overlay>
  );
};

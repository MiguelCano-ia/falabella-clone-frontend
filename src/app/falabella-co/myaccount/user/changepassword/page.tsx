"use client";

import { Button, Input, Label } from "@/components";
import { PasswordReq } from "@/components/auth/register/PasswordReq";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-wrap p-5 gap-4 bg-[#FFF] mb-3 rounded-[5px]">
        <h1 className="text-[#333] font-normal text-[24px]">
          Cambiar contraseña
        </h1>
        <form action="">
          <div className="flex flex-col items-stretch min-h-[78px] w-[274px] mb-2">
            <Label
              htmlFor="password"
              className="text-start text-[12px] mb-1 h-4"
            >
              Contraseña actual
            </Label>
            <div
              className={`flex items-center justify-between border-b-[1px] border-b-[#A6A6A6]`}
            >
              <div className="relative flex items-center w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setHasTyped(true);
                    setPasswordValue(e.target.value);
                  }}
                  id="password"
                  placeholder="Ingresa una contraseña"
                  className="border-0 rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0"
                  style={{
                    WebkitBoxShadow: "0 0 0px 1000px white inset",
                  }}
                />
              </div>
              {showPassword ? (
                <Eye
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOff
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[274px] mb-2">
            <Label
              htmlFor="password"
              className="text-start text-[12px] mb-1 h-4"
            >
              Nueva contraseña
            </Label>
            <div
              className={`flex items-center justify-between border-b-[1px] border-b-[#A6A6A6]`}
            >
              <div className="relative flex items-center w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setHasTyped(true);
                    setPasswordValue(e.target.value);
                  }}
                  id="password"
                  placeholder="Ingresa una contraseña"
                  className="border-0 rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0"
                  style={{
                    WebkitBoxShadow: "0 0 0px 1000px white inset",
                  }}
                />
              </div>
              {showPassword ? (
                <Eye
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOff
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-14 items-center">
            <PasswordReq watchPassword={passwordValue} hasTyped={hasTyped} />
          </div>
          <div className="flex items-center justify-end">
            <Button
              variant="register"
              className="w-[250px] rounded-[280px] font-bold text-base cursor-pointer bg-icon-background text-primary-foreground text-[16px] mt-5 mb-10"
            >
              Cambiar contraseña
            </Button>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center py-4 px-8 w-full bg-[#FFF] rounded-[5px]">
        <div className="text-[20px] leading-[24px] font-normal text-[#bc001c]">
          Eliminar cuenta
        </div>
        <ChevronRight size={16} />
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { X } from "lucide-react";
import { useUIStore } from "@/store/ui";
import { useCheckoutStore } from "@/store/checkout";

const emailSchema = z.string().email().nonempty();

export const NotAuthenticated = () => {
  const openLoginForm = useUIStore((state) => state.openLogin);
  const email = useCheckoutStore((state) => state.email);
  const setEmail = useCheckoutStore((state) => state.setEmail);
  const setOpenLoginByDelivery = useCheckoutStore(
    (state) => state.setOpenLoginByDelivery
  );
  const [error, setError] = useState("");

  const handleOnBlur = () => {
    const result = emailSchema.safeParse(email);

    if (!result.success && email.length > 0) {
      setError("Ingresa un correo electrónico válido (nombre@ejemplo.com)");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    setEmail("");
  }, [setEmail]);

  return (
    <>
      <h1 className="text-2xl text-[#333] pb-8">
        Ingresa tu correo electrónico para continuar
      </h1>
      <div className="flex flex-col justify-between max-w-[25rem]">
        <Label htmlFor="email" className="text-start text-[14px] mb-1 h-4">
          Correo electrónico:
        </Label>
        <div className="relative flex items-center">
          <Input
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            onBlur={handleOnBlur}
            value={email}
            type="email"
            placeholder="Ingresa un correo electrónico"
            className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] placeholder:text-[16px] font-normal focus:outline-none focus-visible:ring-0 ${
              error && "border-b-[#BC001C]"
            }`}
            style={{
              WebkitBoxShadow: "0 0 0px 1000px white inset",
            }}
          />
          {error && (
            <X
              className="absolute right-0 text-[#BC001C] cursor-pointer"
              size={20}
              onClick={() => {
                setEmail("");
                setError("");
              }}
            />
          )}
        </div>
        {error && <span className="text-[12px] text-[#BC001C]">{error}</span>}
        <Button
          variant="clean"
          disabled={!!error || emailSchema.safeParse(email).success === false}
          className="mt-10 disabled:bg-[#D1D1D1] disabled:opacity-100 disabled:text-[#636363]  text-white font-semibold text-lg rounded-full bg-[#343E49] h-10"
          onClick={() => {
            openLoginForm();
            setOpenLoginByDelivery(true);
          }}
        >
          Continuar
        </Button>
      </div>
    </>
  );
};

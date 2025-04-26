"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleCheck, Eye, EyeOff, LockKeyhole, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { PasswordReq } from "../register/PasswordReq";
import { useForm } from "react-hook-form";
import {
  FormFields,
  passwordRecoverySchema,
} from "@/validations/auth/password.recovery";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useState } from "react";
import { passwordRecoveryAction } from "@/actions/auth/password.recovery";
import { useUIStore } from "@/store/ui";

export const PasswordRecoveryForm = () => {
  const {
    register,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    resolver: zodResolver(passwordRecoverySchema),
    mode: "onBlur",
  });
  const [localHasOtp, setLocalHasOtp] = useState(false);
  const [state, action] = useActionState(passwordRecoveryAction, undefined);
  const [rawPassword, setRawPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const openLoginForm = useUIStore((state) => state.openLogin);

  const router = useRouter();
  const searchParams = useSearchParams();
  const hasOtp = searchParams.get("have-otp") === "true" || localHasOtp;

  const handleClick = () => {
    setLocalHasOtp(true);
    router.push("/falabella-co/myaccount/passwordrecovery?have-otp=true");
  };

  const redirectHome = () => {
    router.replace("/falabella-co");
    setTimeout(() => {
      openLoginForm();
    }, 2000);
  };

  useEffect(() => {
    if (state?.successSentCode) {
      setLocalHasOtp(true);
    }
  }, [state?.successSentCode]);

  console.log(state?.successSentCode, state?.successVerifyCode, state?.errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        startTransition(() => action(data));
      })}
      className="flex flex-col gap-5 w-[520px] bg-white rounded-[6px] shadow-sm px-10 py-8"
    >
      <div className="flex items-center gap-2">
        <LockKeyhole size={24} className="text-[#888]" />
        <p className="font-normal text-[24px] text-[#000]">
          Restablecer contraseña
        </p>
      </div>
      {state?.successSentCode && (
        <div className="flex items-center p-[10px] bg-[#f3f9e5] w-full">
          <CircleCheck size={24} className="text-green-500 mr-4" />
        </div>
      )}
      <span className="text-[15px] text-[#888]">
        {hasOtp
          ? "Ingresa una nueva contraseña para tu cuenta y evita que se repita con las que utilizaste anteriormente."
          : "  Ingresa tu correo electrónico y te enviaremos las instrucciones para una nueva contraseña."}
      </span>
      <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
        <Label htmlFor="email" className="text-start text-[15px] mb-2 h-4">
          Correo electrónico
        </Label>
        <div className="relative flex items-center">
          <Input
            {...register("email")}
            id="email"
            onChange={(e) => {
              clearErrors("email");
              setValue("email", e.target.value, { shouldValidate: true });
            }}
            placeholder="Ingresa tu correo electrónico"
            className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 w-[432px] ${
              errors.email && "border-b-[#BC001C]"
            }`}
            style={{
              WebkitBoxShadow: "0 0 0px 1000px white inset",
            }}
          />
          {errors.email && (
            <X
              className="absolute right-0 text-[#BC001C] cursor-pointer"
              size={20}
              onClick={() => {
                setValue("email", "");
                clearErrors("email");
              }}
            />
          )}
        </div>
        {errors.email && (
          <span className="text-[12px] text-[#BC001C]">
            {errors.email.message}
          </span>
        )}
      </div>
      {state?.errors?.email && (
        <span className="text-[12px] text-[#BC001C]">
          Correo electrónico no registrado
        </span>
      )}
      {hasOtp && (
        <>
          <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label htmlFor="code" className="text-start text-[15px] mb-2 h-4">
              Código verificador
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("code")}
                id="code"
                placeholder="Ingresa un código verificador"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 w-[432px] ${
                  errors.code && "border-b-[#BC001C]"
                }`}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
                onChange={(e) => {
                  setValue("code", e.target.value, { shouldValidate: true });
                }}
              />
              {errors.code && (
                <X
                  className="absolute right-0 text-[#BC001C] cursor-pointer"
                  size={20}
                  onClick={() => {
                    setValue("code", "");
                    clearErrors("code");
                  }}
                />
              )}
            </div>
            {errors.code && (
              <span className="text-[12px] text-[#BC001C]">
                {errors.code.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label
              htmlFor="new_password"
              className="text-start text-[15px] mb-2 h-4"
            >
              Nueva contraseña
            </Label>
            <div
              className={`flex items-center justify-between border-b-[1px] border-b-[#A6A6A6] ${
                errors.new_password && "border-b-[#BC001C]"
              }`}
            >
              <div className="relative flex items-center w-full">
                <Input
                  {...register("new_password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => {
                    clearErrors("new_password");
                    setRawPassword(e.target.value);
                    setValue("new_password", e.target.value, {
                      shouldValidate: true,
                    });
                  }}
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
          <div className="grid grid-cols-2">
            <PasswordReq
              watchPassword={rawPassword}
              hasTyped={rawPassword.length > 0}
            />
          </div>
          {state?.errors && (
            <span className="text-[12px] text-[#BC001C]">
              Huvo un error al actualizar la contraseña, intente nuevamente.
            </span>
          )}
        </>
      )}
      <Button
        variant="login"
        className={`${
          isValid
            ? "bg-icon-background text-primary-foreground "
            : "bg-primary-foreground text-gray-400 cursor-not-allowed"
        } w-full text-[14px] h-[55px] rounded-[55px] font-bold`}
        disabled={!isValid}
        onClick={() => {
          if (!state?.errors && state?.successVerifyCode) {
            redirectHome();
          }
        }}
      >
        {hasOtp ? "Crear" : "Continuar"}
      </Button>

      <span
        className={`${
          !hasOtp && "underline underline-offset-1 cursor-pointer"
        } text-[14px] text-[#888] text-center`}
        onClick={handleClick}
      >
        {hasOtp ? (
          <span>
            ¿Aún no te llega? puedes pedir un nuevo código por{" "}
            <button className="underline underline-offset-1 cursor-pointer">
              correo
            </button>
          </span>
        ) : (
          "Ya tengo el código verificador"
        )}
      </span>
    </form>
  );
};

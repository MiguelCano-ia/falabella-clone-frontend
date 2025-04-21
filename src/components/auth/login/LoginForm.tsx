"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Label } from "@/components";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import { FormFields, loginFormSchema } from "@/validations/auth/login";
import { Overlay } from "./Overlay";
import { Wrapper } from "./Wrapper";
import { loginAction } from "@/actions/auth/login";
import { useUIStore } from "@/store/ui";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { deleteCookie } from "cookies-next";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(loginFormSchema),
    mode: "onBlur",
  });
  const [state, action, pending] = useActionState(loginAction, undefined);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const closeLoginForm = useUIStore((state) => state.closeLogin);

  useEffect(() => {
    if (state?.authenticated) {
      closeLoginForm();
      deleteCookie("cart", { path: "/" });
      router.refresh();
    }
  }, [state?.authenticated, closeLoginForm, router]);

  return (
    <Overlay onResetForm={reset} state={state}>
      <Wrapper onResetForm={reset} state={state}>
        <form
          ref={formRef}
          onSubmit={handleSubmit((data) => {
            startTransition(() => action(data));
          })}
        >
          {(state?.errors?.email || state?.errors?.password) && (
            <div className="pb-[15px]">
              <div className="flex items-start justify-start text-[14px] leading-[16.4px] p-[10px] bg-[#fff9e9] text-[#333] ">
                <CircleAlert size={28} className="text-[#f7b500] mb-2" />
                <div className="ml-4">
                  Correo electrónico o contraseña incorrecta. Por favor, vuelve
                  a intentarlo nuevamente.
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label htmlFor="email" className="text-start text-[14px] mb-1 h-4">
              Correo electrónico
            </Label>
            <Input
              {...register("email")}
              type="email"
              id="emailLogin"
              onChange={() => clearErrors("email")}
              placeholder="Ingresa tu correo electrónico"
              className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm font-normal focus:outline-none focus-visible:ring-0 ${
                errors.email && "border-b-[#BC001C]"
              }`}
              style={{
                WebkitBoxShadow: "0 0 0px 1000px white inset",
              }}
            />
          </div>

          <div className="flex flex-col items-stretch min-h-[78px] w-full">
            <Label
              htmlFor="password"
              className="text-start text-[14px] mb-1 h-4"
            >
              Contraseña
            </Label>
            <div
              className={`flex items-center justify-between border-b-[1px] border-b-[#A6A6A6] ${
                errors.password && "border-b-[#BC001C]"
              }`}
            >
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                id="passwordLogin"
                placeholder="Ingresa una contraseña"
                className="border-0 rounded-none p-0 text-sm  font-normal focus:outline-none focus-visible:ring-0"
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
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
          <p className="text-[#767676] leading-[17px] text-[14px] mb-4">
            ¿Olvidaste tu contraseña? No te preocupes, pide un código
            verificador por{" "}
            <Link
              href="/falabella-co/myaccount/passwordrecovery"
              className="text-[#495867] underline underline-offset-2"
              onClick={() => closeLoginForm()}
            >
              correo
            </Link>{" "}
            o{" "}
            <Link
              href="/falabella-co/myaccount/passwordrecovery"
              className="text-[#495867] underline underline-offset-2"
              onClick={() => closeLoginForm()}
            >
              SMS
            </Link>{" "}
            para cambiar tu contraseña.
          </p>

          <Button
            type="submit"
            variant="login"
            className="rounded-[280px] font-normal text-[19px] mb-4 py-3 cursor-pointer"
            disabled={pending}
          >
            Ingresar
          </Button>
        </form>
      </Wrapper>
    </Overlay>
  );
};

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
import { useCheckoutStore } from "@/store/checkout";
import { checkoutCode } from "@/actions/auth/checkoutCode";

export const LoginForm = () => {
  const email = useCheckoutStore((state) => state.email);
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(loginFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: email || "",
      password: "",
    },
  });
  const [state, action, pending] = useActionState(loginAction, undefined);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const isLoginOpen = useUIStore((state) => state.isLoginOpen);
  const [showPassword, setShowPassword] = useState(false);
  const closeLoginForm = useUIStore((state) => state.closeLogin);
  const openLoginByDelivery = useCheckoutStore(
    (state) => state.openLoginByDelivery
  );
  const setVerifyCode = useCheckoutStore((state) => state.setVerifyCode);

  const [sendingCode, setSendingCode] = useState(false);
  const [codeError, setCodeError] = useState<string>("");

  const handleSentCode = async () => {
    setSendingCode(true);
    setCodeError("");

    try {
      const result = await checkoutCode(email);

      if (result.errors) {
        setCodeError(result.errors.email || Object.values(result.errors)[0]);
      } else if (result.codeSent) {
        setVerifyCode(true);
      }
    } catch {
      setCodeError(
        "Hubo un problema al enviar el código. Revise su correo e intenta nuevamente."
      );
    } finally {
      setSendingCode(false);
    }
  };

  const clearCodeErrors = () => {
    setCodeError("");
    setSendingCode(false);
    setVerifyCode(false);
  };

  useEffect(() => {
    if (state?.authenticated) {
      closeLoginForm();
      deleteCookie("cart", { path: "/" });
      router.refresh();
    }
  }, [state?.authenticated, closeLoginForm, router]);

  useEffect(() => {
    if (!isLoginOpen) {
      clearCodeErrors();
    }
    if (email) {
      setValue("email", email);
    }
  }, [isLoginOpen, email, setValue]);

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
              onChange={() => {
                clearErrors("email");
                setCodeError("");
              }}
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
                onChange={() => {
                  clearErrors("password");
                  setCodeError("");
                }}
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
          {openLoginByDelivery ? (
            <>
              <p className="text-[#767676] leading-[17px] text-[14px] mb-4">
                ¿Olvidaste tu contraseña? No te preocupes, pide un código
                verificador por{" "}
                <span
                  className="text-[#495867] underline underline-offset-2 cursor-pointer"
                  onClick={handleSentCode}
                >
                  correo
                </span>{" "}
                para continuar tu compra.
              </p>
              {codeError && (
                <p className="text-red-500 bg-red-100 p-2 rounded-sm text-sm mt-1 mb-2">
                  {codeError}
                </p>
              )}
            </>
          ) : (
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
          )}

          <Button
            type="submit"
            variant="login"
            className="rounded-[280px] font-normal text-[19px] mb-4 py-3 cursor-pointer"
            disabled={pending || sendingCode}
          >
            Ingresar
          </Button>
        </form>
      </Wrapper>
    </Overlay>
  );
};

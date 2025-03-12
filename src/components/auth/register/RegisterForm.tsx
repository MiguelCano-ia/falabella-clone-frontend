"use client";

import { startTransition, useActionState, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useUIStore } from "@/store/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input, Label, useOutsideClick } from "@/components";
import { ChevronDown, Eye, EyeOff, X } from "lucide-react";
import { FormFields, registerFormSchema } from "@/validations/auth/register";
import { PasswordReq } from "./PasswordReq";
import { registerAction } from "@/actions/auth/register";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(registerFormSchema),
    mode: "onBlur",
  });
  const [state, action] = useActionState(registerAction, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const [documentType, setDocumentType] = useState("CC");
  const [terms, setTerms] = useState(false);

  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const isLoginFormOpen = useUIStore((state) => state.isLoginOpen);
  const isIdentityFieldOpen = useUIStore((state) => state.isIdentityFieldOpen);
  const handleIdentityField = useUIStore((state) => state.handleIdentityField);
  const closeIdentityField = useUIStore((state) => state.closeIdentityField);
  const openLoginForm = useUIStore((state) => state.openLogin);

  const formValues = watch();
  const isFormEmpty = Object.values(formValues).some((value) => !value);

  const identityRef = useOutsideClick(() => {
    closeIdentityField();
  });

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit((data) => {
        startTransition(() => action(data));
      })}
      inert={isSidebarOpen || isLoginFormOpen}
    >
      <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
        <Label htmlFor="email" className="text-start text-[14px] mb-1 h-4">
          Correo
        </Label>
        <div className="relative flex items-center">
          <Input
            {...register("email")}
            id="email"
            placeholder="Ingresa un correo"
            onChange={() => clearErrors("email")}
            className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 ${
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
        {state?.errors?.email && (
          <span className="text-[12px] text-[#BC001C]">
            {state?.errors?.email}
          </span>
        )}
      </div>
      <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
        <Label htmlFor="name" className="text-start text-[14px] mb-1 h-4">
          Nombre
        </Label>
        <div className="relative flex items-center">
          <Input
            {...register("name")}
            type="text"
            id="name"
            onChange={() => clearErrors("name")}
            placeholder="Ingresa un nombre"
            className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 ${
              errors.name && "border-b-[#BC001C]"
            }`}
            style={{
              WebkitBoxShadow: "0 0 0px 1000px white inset",
            }}
          />
          {errors.name && (
            <X
              className="absolute right-0 text-[#BC001C]"
              size={20}
              onClick={() => {
                setValue("name", "");
                clearErrors("name");
              }}
            />
          )}
        </div>
        {errors.name && (
          <span className="text-[12px] text-[#BC001C]">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
        <Label htmlFor="lastname" className="text-start text-[14px] mb-1 h-4">
          Apellidos
        </Label>
        <div className="relative flex items-center">
          <Input
            {...register("lastname")}
            type="text"
            id="lastname"
            onChange={() => clearErrors("lastname")}
            placeholder="Ingresa apellidos"
            className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 ${
              errors.lastname && "border-b-[#BC001C]"
            }`}
            style={{
              WebkitBoxShadow: "0 0 0px 1000px white inset",
            }}
          />
          {errors.lastname && (
            <X
              className="absolute right-0 text-[#BC001C]"
              size={20}
              onClick={() => {
                setValue("lastname", "");
                clearErrors("lastname");
              }}
            />
          )}
        </div>
        {errors.lastname && (
          <span className="text-[12px] text-[#BC001C]">
            {errors.lastname.message}
          </span>
        )}
      </div>
      <div className="relative flex flex-col items-stretch min-h-[78px] w-full mb-2">
        <Label htmlFor="id_number" className="text-start text-[14px] mb-1 h-4">
          Tipo de documento
        </Label>
        <div
          className={`flex items-center border-b-[1px] border-b-[#A6A6A6] ${
            errors.id_number && "border-b-[#BC001C]"
          }`}
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={handleIdentityField}
          >
            <span className="mr-3">{documentType}</span>
            <ChevronDown size={16} className="mr-1" />
          </div>

          <Input
            {...register("id_number")}
            type="text"
            id="id_number"
            onChange={() => clearErrors("id_number")}
            placeholder="Ingresa una cédula"
            className="border-0 rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0"
            style={{
              WebkitBoxShadow: "0 0 0px 1000px white inset",
            }}
          />
          {errors.id_number && (
            <X
              className="absolute right-0 text-[#BC001C]"
              size={20}
              onClick={() => {
                setValue("id_number", "");
                clearErrors("id_number");
              }}
            />
          )}
          <input
            {...register("id_type")}
            type="hidden"
            name="documentType"
            value={documentType}
          />
        </div>
        {errors.id_number && (
          <span className="text-[12px] text-[#BC001C]">
            {errors.id_number.message}
          </span>
        )}
        {isIdentityFieldOpen && (
          <div
            className="absolute top-0 left-0 right-auto bottom-auto translate-y-[68px] z-10"
            ref={identityRef}
          >
            <div className="flex flex-col gap-3 font-medium border-[1px] bg-primary-foreground py-2 text-[14px] min-w-[254px] sm:min-w-[343px] rounded-sm cursor-pointer">
              <div
                onClick={() => {
                  setDocumentType("CC");
                  closeIdentityField();
                }}
                className="hover:bg-[#f1f1f1] transition-colors mx-2"
              >
                <span className="px-2">CC (Cédula de ciudadanía)</span>
              </div>
              <div
                onClick={() => {
                  setDocumentType("CE");
                  closeIdentityField();
                }}
                className="hover:bg-[#f1f1f1] transition-colors mx-2"
              >
                <span className="px-2">CE (Cédula de Extranjería)</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
        <Label htmlFor="phone" className="text-start text-[14px] mb-1 h-4">
          Celular
        </Label>
        <div
          className={`flex items-center border-b-[1px] border-b-[#A6A6A6] ${
            errors.phone && "border-b-[#BC001C]"
          }`}
        >
          <div className="relative flex items-center w-full">
            <div className="px-2 text-[14px] font-bold">+57</div>
            <Input
              {...register("phone")}
              type="tel"
              id="phone"
              onChange={() => clearErrors("phone")}
              placeholder="Ingresa un celular"
              className="border-0 rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0"
              style={{
                WebkitBoxShadow: "0 0 0px 1000px white inset",
              }}
            />
            {errors.phone && (
              <X
                className="absolute right-0 text-[#BC001C]"
                size={20}
                onClick={() => {
                  setValue("phone", "");
                  clearErrors("phone");
                }}
              />
            )}
          </div>
        </div>
        {errors.phone && (
          <span className="text-[12px] text-[#BC001C]">
            {errors.phone.message}
          </span>
        )}
        {state?.errors.phone && (
          <span className="text-[12px] text-[#BC001C]">
            {state?.errors.phone}
          </span>
        )}
      </div>
      {/* password */}
      <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
        <Label htmlFor="password" className="text-start text-[14px] mb-1 h-4">
          Contraseña
        </Label>
        <div
          className={`flex items-center justify-between border-b-[1px] border-b-[#A6A6A6] ${
            errors.password && "border-b-[#BC001C]"
          }`}
        >
          <div className="relative flex items-center w-full">
            <Input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={(e) => {
                clearErrors("password");
                setHasTyped(true);
                setPasswordValue(e.target.value);
                setValue("password", e.target.value);
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
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <PasswordReq watchPassword={passwordValue} hasTyped={hasTyped} />
      </div>
      <fieldset className="grid gap-2 text-[14px] font-normal text-foreground leading-[20px] py-8">
        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            className="data-[state=checked]:bg-icon-background w-5 h-5"
            checked={terms}
            onClick={() => setTerms(!terms)}
          />
          <Label
            htmlFor="terms"
            className="text-start text-[14px] leading-5 text-foreground"
          >
            Acepto los{" "}
            <span className="underline underline-offset-1">
              términos y condiciones
            </span>{" "}
            de falabella.com y autorizo el{" "}
            <span className="underline underline-offset-1">
              tratamiento de mis datos personales
            </span>
          </Label>
        </div>
      </fieldset>
      <div className="flex items-center justify-center w-full">
        <Button
          type="submit"
          variant="register"
          size="lg"
          className={`rounded-[280px] font-semibold text-base cursor-pointer ${
            isFormEmpty ||
            Object.keys(errors).length > 0 ||
            !terms ||
            isSubmitting
              ? "bg-primary-foreground text-gry-400 cursor-not-allowed"
              : "bg-icon-background text-primary-foreground "
          }`}
          disabled={
            isFormEmpty ||
            Object.keys(errors).length > 0 ||
            !terms ||
            isSubmitting
          }
        >
          Registrate
        </Button>
      </div>
      <div className="flex justify-center items-center gap-1 mt-5">
        <p className="text-[14px] text-foreground">¿Ya tienes cuenta?</p>
        <span
          className="text-[14px] text-foreground underline underline-offset-1 cursor-pointer"
          onClick={openLoginForm}
        >
          Inicia sesión
        </span>
      </div>
    </form>
  );
};

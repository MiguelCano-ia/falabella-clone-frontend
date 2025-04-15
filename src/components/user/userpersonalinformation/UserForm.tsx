"use client";

import { Button, Input, Label } from "@/components";
import {
  editPersonalDataFormSchema,
  FormFields,
} from "@/validations/user/edit.persona.data";
import { CircleAlert, Pen, X } from "lucide-react";
import { startTransition, useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import { Overlay } from "./Overlay";
import { UserData } from "@/interfaces/auth/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileAction } from "@/actions/user/edit.profile";
import { SuccessMessage } from "../shared/SuccessMessage";

interface Props {
  user: UserData;
}

export const UserForm = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(editPersonalDataFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: user.name,
      lastname: user.lastname.split(" ")[0],
      lastname2: user.lastname.split(" ")[1] || "",
      phone: user.phone,
    },
  });
  const [state, action] = useActionState(editProfileAction, undefined);
  const [phoneModal, setPhoneModal] = useState(false);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        startTransition(() => action(data));
      })}
    >
      <SuccessMessage visible={state?.success || false} />

      <div className="flex flex-col flex-wrap p-5 gap-8 bg-[#FFF] mb-3 rounded-[5px]">
        <h1 className="text-[#333] font-normal text-[24px]">
          Datos personales
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label
              htmlFor="name"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Nombre
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("name")}
                id="name"
                placeholder="Nombre"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 `}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
              {errors.name && (
                <X
                  className="absolute right-0 text-[#BC001C] cursor-pointer"
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
            {state?.errors?.name && (
              <span className="text-[12px] text-[#BC001C]">
                {state?.errors?.name}
              </span>
            )}
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label
              htmlFor="lastname"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Primer apellido
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("lastname")}
                id="lastname"
                placeholder="Ingresa tu apellido"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 `}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
              {errors.lastname && (
                <X
                  className="absolute right-0 text-[#BC001C] cursor-pointer"
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
            {state?.errors?.lastname && (
              <span className="text-[12px] text-[#BC001C]">
                {state?.errors?.lastname}
              </span>
            )}
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label
              htmlFor="lastname2"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Segundo apellido
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("lastname2")}
                id="lastname2"
                placeholder="Ingresa tu apellido"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 `}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
              {errors.lastname2 && (
                <X
                  className="absolute right-0 text-[#BC001C] cursor-pointer"
                  size={20}
                  onClick={() => {
                    setValue("lastname2", "");
                    clearErrors("lastname2");
                  }}
                />
              )}
            </div>
            {errors.lastname2 && (
              <span className="text-[12px] text-[#BC001C]">
                {errors.lastname2.message}
              </span>
            )}
            {state?.errors?.lastname2 && (
              <span className="text-[12px] text-[#BC001C]">
                {state?.errors?.lastname2}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label className="text-start text-[12px] text-[#333] mb-1 h-4">
              Tipo de documento
            </Label>
            <div className="relative flex items-center mt-2">
              <span className="text-[14px] text-[#888]">
                Cédula de Ciudadanía 1088824405
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label className="text-start text-[12px] text-[#333] mb-1 h-4">
              Celular
            </Label>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#888]">+57 3137111718</span>
              <Pen
                size={24}
                onClick={() => setPhoneModal(true)}
                className="text-[#888] border-[1px] border-black rounded-md p-1 cursor-pointer"
              />
            </div>
            {phoneModal && (
              <Overlay>
                <div className="relative container m-auto bg-white rounded-[12px] w-auto max-w-fit h-fit py-2 px-10">
                  <X
                    size={24}
                    className="absolute right-0 mr-2 cursor-pointer"
                    onClick={() => setPhoneModal(false)}
                  />
                  <div className="flex flex-col gap-10 mt-10">
                    <div className="flex items-center gap-5">
                      <Pen size={32} />
                      <p className="text-[24px] text-[#000] font-normal leading-[32px]">
                        Editar celular
                      </p>
                    </div>
                    <p className="text-[16px] leading-[24px] text-[#000] font-normal w-[480px]">
                      Para editar tu número de celular necesitamos validar tu
                      identidad. Al continuar,{" "}
                      <b>enviaremos un código verificador al correo.</b>
                    </p>
                    <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
                      <Label
                        htmlFor="phone"
                        className="text-start text-[12px] text-[#333] mb-1 h-4"
                      >
                        Celular
                      </Label>
                      <div className="relative flex items-center mt-2">
                        <Input
                          {...register("phone")}
                          id="phone"
                          placeholder="Ingresa tu celular"
                          className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 `}
                          style={{
                            WebkitBoxShadow: "0 0 0px 1000px white inset",
                          }}
                        />
                        {errors.phone && (
                          <X
                            className="absolute right-0 text-[#BC001C] cursor-pointer"
                            size={20}
                            onClick={() => {
                              setValue("phone", "");
                              clearErrors("phone");
                            }}
                          />
                        )}
                      </div>
                      {errors.phone && (
                        <span className="text-[12px] text-[#BC001C]">
                          {errors.phone.message}
                        </span>
                      )}
                      {state?.errors?.phone && (
                        <span className="text-[12px] text-[#BC001C]">
                          {state?.errors?.phone}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-center mb-5">
                      <Button
                        variant="register"
                        className="rounded-[280px] font-semibold text-base cursor-pointer bg-white text-[#343E49] w-[224px]"
                        onClick={() => setPhoneModal(false)}
                      >
                        Cancelar
                      </Button>
                      <Button
                        type="submit"
                        variant="register"
                        className="rounded-[280px] font-semibold text-base cursor-pointer bg-icon-background text-primary-foreground w-[224px] ml-5"
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                </div>
              </Overlay>
            )}
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label className="text-start text-[12px] text-[#333] mb-1 h-4">
              Correo electrónico
            </Label>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#888]">
                macanogiraldo2004@gmail.com
              </span>
              <CircleAlert size={18} className="text-[#888]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-5 bg-[#FFF]">
        <Button
          type="submit"
          variant="register"
          className="rounded-[280px] font-semibold text-base cursor-pointer bg-icon-background text-primary-foreground w-[160px]"
        >
          Guardar
        </Button>
      </div>
    </form>
  );
};

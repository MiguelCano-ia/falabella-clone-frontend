"use client";

import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DepartmentAndCities } from "@/interfaces/location/location";
import { Button } from "@/components/ui/button";
import {
  addressSchema,
  useColombiaLocationForm,
} from "./hooks/useColombiaLocationForm";
import { CircleAlert, MapPin, X, Pencil } from "lucide-react";
import { FloatingLabelSelect } from "@/components/shared/header/header-navbar/right-section/location/FloatingLabelSelect";
import { Input } from "@/components/ui/input";
import { startTransition, useActionState, useEffect } from "react";
import { getLocationAction } from "@/actions/checkout/delivery/geocode";
import { Map } from "./Map";
import { saveAddressAction } from "@/actions/checkout/delivery/saveAddressAction";
import { useRouter } from "next/navigation";

export interface DeliveryAddress {
  department: string;
  city: string;
  neighborhood: string;
  address: string;
  apartment: string;
}

interface Props {
  departmentsAndCities: DepartmentAndCities[] | undefined;
  setIsOpen: (isOpen: boolean) => void;
}

export function DeliveryAddressModal({
  departmentsAndCities,
  setIsOpen,
}: Props) {
  const form = useColombiaLocationForm(departmentsAndCities);
  const [locationState, locationAction] = useActionState(
    getLocationAction,
    undefined
  );
  const [addressState, addressAction] = useActionState(
    saveAddressAction,
    undefined
  );
  const router = useRouter();

  const isFormComplete =
    form.department && form.city && form.neighborhood && form.address;

  const handleCoords = () => {
    const formData = new FormData();
    const fullAddress = `${form.department}, ${form.city}, ${form.address}, ${form.apartment}`;
    formData.set("address", fullAddress);

    startTransition(() => {
      locationAction(formData);
    });
  };

  const handleAdress = () => {
    const formData = new FormData();
    formData.set("address", form.address);
    formData.set("apartment", form.apartment);
    formData.set("department", form.department);
    formData.set("city", form.city);
    formData.set("neighborhood", form.neighborhood);

    startTransition(() => {
      addressAction(formData);
    });
  };
  useEffect(() => {
    if (addressState?.success) {
      setIsOpen(false);
      router.refresh();
    }
  }, [addressState?.success, router, setIsOpen]);

  return (
    <>
      <div className="flex items-center px-4 py-0">
        <DialogHeader>
          <div className="text-[18px] leading-[30px] font-normal text-[#4A4A4A]">
            <div className="flex items-center gap-2">
              <MapPin className="size-5" />
              <div className="flex flex-col">
                <DialogTitle className="text-[18px] leading-[30px] font-normal text-[#333]">
                  {locationState?.coords
                    ? "Confirmar la dirección"
                    : "Ingresa tu dirección de entrega"}
                </DialogTitle>
                {!locationState?.coords && (
                  <DialogDescription>
                    para ver las opciones de{" "}
                    <span className="text-[#4A4A4A]">entrega </span> y{" "}
                    <span className="text-[#4A4A4A]">retiro</span>
                  </DialogDescription>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>
      </div>
      <div className="p-6 pt-4 space-y-8">
        {!locationState?.coords ? (
          <>
            <FloatingLabelSelect
              label="Departamento"
              placeholder="Ingresa un departamento"
              options={form.departmentOptions}
              value={form.department}
              onValueChange={(value) => {
                form.setDepartment(value);
              }}
            />
            <FloatingLabelSelect
              label="Ciudad"
              placeholder="Ingresa una ciudad"
              options={form.cityOptions}
              value={form.city}
              onValueChange={(value) => form.setCity(value)}
              disabled={!form.department}
            />
            <FloatingLabelSelect
              label="Barrio"
              placeholder="Ingresa un barrio"
              options={form.neighborhoodOptions}
              value={form.neighborhood}
              onValueChange={(value) => form.setNeighborhood(value)}
              disabled={!form.city}
            />
          </>
        ) : (
          <div className="flex flex-col gap-4 ">
            <div
              className={`flex items-center gap-2 p-2 ${
                !locationState?.partialMatch && "bg-[#F5F5F5]"
              }`}
            >
              <CircleAlert size={23} className="text-[#dbbc30]" />

              {!locationState?.partialMatch ? (
                <p className="text-[14px] leading-[20px] font-normal text-[#4A4A4A]">
                  Fija tu ubicación exacta en el mapa
                </p>
              ) : (
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] text-[#333] font-bold">
                    No hemos podido reconocer tu dirección
                  </p>
                  <p className="text-[13px] text-[#333] font-normal">
                    Por favor, mueve el marcador que coincida con tu ubicación
                    en el mapa
                  </p>
                </div>
              )}
            </div>
            <Map coords={locationState?.coords} />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] leading-[20px] font-normal text-[#333]">
            Dirección
          </label>
          <div className="relative flex items-center">
            <Input
              placeholder="Ingresa la dirección"
              value={
                !!locationState?.coords
                  ? `${form.department}, ${form.city}, ${form.address}`
                  : form.address
              }
              className="border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 "
              onChange={(e) => {
                if (!locationState?.coords) {
                  form.setAddress(e.target.value);
                  form.setErrorAddress("");
                }
              }}
              onBlur={form.handleOnBlurAddress}
              readOnly={!!locationState?.coords}
            />
            {locationState?.coords && (
              <Button
                variant="clean"
                className="absolute right-0"
                onClick={() => {
                  startTransition(() => {
                    locationAction(new FormData());
                  });
                }}
              >
                <Pencil size={20} />
              </Button>
            )}
            {form.errorAddress && !locationState?.coords && (
              <X
                className="absolute right-0 text-[#BC001C] cursor-pointer"
                size={20}
                onClick={() => {
                  form.setAddress("");
                  form.setErrorAddress("");
                }}
              />
            )}
          </div>
          {form.errorAddress && (
            <span className="text-[12px] text-[#BC001C]">
              {form.errorAddress}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[14px] leading-[20px] font-normal text-[333]">
            Torre/Apartamento/Conjunto/Oficina/Condominio
          </label>
          <Input
            placeholder="Ejem. Casa 3, Dpto 101."
            value={form.apartment}
            onChange={(e) => {
              form.setApartment(e.target.value);
              form.setErrorAddress("");
            }}
            className="border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 "
          />
        </div>
      </div>
      <div className="p-4 flex justify-end w-full">
        {!locationState?.coords ? (
          <DialogClose asChild>
            <Button type="button" variant="clean">
              Descartar cambios
            </Button>
          </DialogClose>
        ) : (
          <Button
            type="button"
            variant="clean"
            onClick={() => {
              startTransition(() => {
                locationAction(new FormData());
              });
            }}
          >
            Volver
          </Button>
        )}

        <Button
          variant="clean"
          type="submit"
          onClick={() => {
            if (locationState?.coords) {
              handleAdress();
            } else {
              handleCoords();
            }
          }}
          className={`w-[240px] h-[40px] font-bold leading-[23px] text-[18px] py-2 rounded-[20px] ${
            isFormComplete &&
            !form.errorAddress &&
            addressSchema.safeParse(form.address).success
              ? "bg-white text-[#343E49] border-2 border-[#343E49]"
              : "bg-[#D1D1D1] text-[#636363] pointer-events-none "
          }`}
        >
          {locationState?.coords
            ? "Confirmar y Guardar"
            : "Confirmar dirección"}
        </Button>
      </div>
    </>
  );
}

"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LocationForm } from "./LocationForm";
import { MapPin } from "lucide-react";
import { DepartmentAndCities } from "@/interfaces/location/location";
import { useLocationStore } from "@/store/location/location.store";
import { useEffect } from "react";

interface Props {
  departmentsAndCities: DepartmentAndCities[] | undefined;
}

export default function LocationModal({ departmentsAndCities }: Props) {
  const selectedNeighborhood = useLocationStore(
    (state) => state.selectedNeighborhood
  );

  const confirmedNeighborhood = useLocationStore(
    (state) => state.confirmedNeighborhood
  );

  const saveLocation = useLocationStore((state) => state.saveLocation);
  const loadLocationFromStorage = useLocationStore(
    (state) => state.loadLocationFromStorage
  );

  useEffect(() => {
    loadLocationFromStorage();
  }, [loadLocationFromStorage]);

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-3 ml-10 cursor-pointer">
        <MapPin size={24} className="text-[#495867]" />
        {!confirmedNeighborhood ? (
          <p className="text-[16px] text-[#495867] font-bold leading-normal">
            Ingresa tu ubicación
          </p>
        ) : (
          <p className="text-[16px] text-[#495867] leading-normal">
            Entrega en <span className="font-bold">{selectedNeighborhood}</span>
          </p>
        )}
      </DialogTrigger>
      <DialogContent className="sm:w-[500px] px-4 gap-0 bg-white sm:rounded-[3px] overflow-visible">
        <div className="flex items-center px-4 py-0">
          <div className="flex items-center text-gray-700 gap-2">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <MapPin size={28} />
            </div>
            <DialogTitle className="text-[20px] leading-[30px] font-bold text-[#333]">
              Ingresa tu ubicación
            </DialogTitle>
          </div>
          <DialogClose className="mr-5"></DialogClose>
        </div>

        <div className="p-6 pt-4">
          <p className="text-[14px] text-[#4A4A4A] mb-6">
            Ingresa tu ubicación y te mostraremos los productos disponibles con
            tiempos y costos de entrega precisos.
          </p>

          <LocationForm departmentsAndCities={departmentsAndCities} />
        </div>

        <DialogClose
          className={`${
            selectedNeighborhood
              ? "cursor-pointer pointer-events-auto"
              : "cursor-default pointer-events-none"
          }`}
        >
          <div className="p-4 flex justify-center">
            <span
              onClick={saveLocation}
              className={`w-[240px]  h-[40px] font-bold leading-[23px] text-[19px] py-2 rounded-[20px] ${
                selectedNeighborhood
                  ? "bg-[#343E49] text-white"
                  : "bg-[#E1E1E1] text-[#636363]"
              }`}
            >
              Guardar
            </span>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

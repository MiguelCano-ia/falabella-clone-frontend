"use client";

import { useLocationStore } from "@/store/location/location.store";
import { Ban, Truck } from "lucide-react";

export const Shipment = () => {
  const selectedNeighborhood = useLocationStore(
    (state) => state.confirmedNeighborhood
  );

  return (
    <div className="border border-green-500 p-4 rounded-lg w-full md:w-1/2">
      {selectedNeighborhood && (
        <p className="text-gray-700 font-semibold mb-3">
          Entrega en {selectedNeighborhood}
        </p>
      )}

      <div className="flex justify-between gap-4">
        <div className="flex flex-col items-center w-1/2">
          <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
            <Truck size={10} className="text-green-600 text-lg" />
          </div>
          <p className="text-gray-500 font-semibold text-sm mt-2">
            Envío a domicilio
          </p>
        </div>

        <div className="flex flex-col items-center w-1/2">
          <div className="bg-gray-200 text-gray-500 w-10 h-10 flex items-center justify-center rounded-full">
            <Ban size={10} className="text-gray-500 text-lg" />
          </div>
          <p className="text-gray-500 text-sm mt-2 text-center">
            No disponible para retiro{" "}
            {selectedNeighborhood && <span>en {selectedNeighborhood}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

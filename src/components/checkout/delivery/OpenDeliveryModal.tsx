"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DeliveryAddressModal } from "./DeliveryAddressModal";
import { useCheckoutStore } from "@/store/checkout";
import { DepartmentAndCities } from "@/interfaces/location/location";

interface Props {
  departmentsAndCities: DepartmentAndCities[] | undefined;
}

export const OpenDeliveryModal = ({ departmentsAndCities }: Props) => {
  const isAddressModalOpen = useCheckoutStore(
    (state) => state.isAddressModalOpen
  );
  const setIsAddressModalOpen = useCheckoutStore(
    (state) => state.setIsAddressModalOpen
  );

  return (
    <Dialog open={isAddressModalOpen} onOpenChange={setIsAddressModalOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="px-2 py-6 sm:rounded-sm rounded-sm">
        <DeliveryAddressModal
          departmentsAndCities={departmentsAndCities}
          setIsOpen={setIsAddressModalOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

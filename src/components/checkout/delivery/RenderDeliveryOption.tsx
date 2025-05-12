"use client";

import { DialogContent } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { DeliveryOption } from "./DeliveryOption";
import { DeliveryAddressModal } from "./DeliveryAddressModal";
import { DepartmentAndCities } from "@/interfaces/location/location";
import { useState } from "react";

interface DeliveryOption {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  disabled: boolean;
}

interface Props {
  option: DeliveryOption;
  departmentsAndCities: DepartmentAndCities[] | undefined;
}

export const RenderDeliveryOption = ({
  option,
  departmentsAndCities,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  if (option.title === "Envio Express") {
    return (
      <Dialog key={option.id} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <DeliveryOption
            icon={option.icon}
            title={option.title}
            description={option.description}
            disabled={option.disabled}
          />
        </DialogTrigger>
        <DialogContent className="px-2 py-6 sm:rounded-sm rounded-sm">
          <DeliveryAddressModal
            departmentsAndCities={departmentsAndCities}
            setIsOpen={setIsOpen}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <DeliveryOption
      key={option.id}
      icon={option.icon}
      title={option.title}
      description={option.description}
      disabled={option.disabled}
    />
  );
};

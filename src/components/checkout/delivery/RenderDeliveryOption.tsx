"use client";

import { DeliveryOption } from "./DeliveryOption";

interface DeliveryOption {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  disabled: boolean;
}

interface Props {
  option: DeliveryOption;
}

export const RenderDeliveryOption = ({ option }: Props) => {
  if (option.title === "Envio Express") {
    return (
      <>
        <DeliveryOption
          icon={option.icon}
          title={option.title}
          description={option.description}
          disabled={option.disabled}
        />
      </>
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

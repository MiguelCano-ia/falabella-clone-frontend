"use client";

import { useState } from "react";
import { PaymentCard } from "./PaymentCard";
import Image from "next/image";
import { PaymenCardModal } from "./PaymenCardModal";

const CARDS = [
  {
    id: "cmr",
    icon: (
      <Image
        src="/images/payment/cmr-card.png"
        alt="Tarjeta CMR"
        width={36}
        height={24}
        className="opacity-50"
      />
    ),
    label: "Tarjeta CMR",
    available: false,
  },
  {
    id: "credit",
    icon: (
      <Image
        src="/images/payment/credit-card.png"
        alt="Tarjeta de crédito"
        width={36}
        height={24}
      />
    ),
    label: "Tarjeta de crédito",
    available: true,
  },
  {
    id: "falabella",
    icon: (
      <Image
        src="/images/payment/debit-falabella.png"
        alt="Tarjeta Falabella"
        width={36}
        height={24}
        className="opacity-50"
      />
    ),
    label: "Débito Banco Falabella",
    available: false,
  },
  {
    id: "debit",
    icon: (
      <Image
        src="/images/payment/debit-card.png"
        alt="Tarjeta de débito"
        width={36}
        height={24}
      />
    ),
    label: "Tarjeta de débito",
    available: true,
  },
  {
    id: "gift",
    icon: (
      <Image
        src="/images/payment/gift-card.png"
        alt="Gift Card"
        width={36}
        height={24}
        className="opacity-50"
      />
    ),
    label: "Gift Card",
    available: false,
  },
];

const OTHER_OPTIONS = [
  {
    id: "pse",
    icon: (
      <Image
        src="/images/payment/pse-card.png"
        alt="PSE"
        width={36}
        height={24}
        className="opacity-50"
      />
    ),
    label: "Débito desde cuenta corriente/ahorros",
    available: false,
  },
  {
    id: "cash",
    icon: (
      <Image
        src="/images/payment/efecty.png"
        alt="Pago en efectivo"
        width={36}
        height={24}
        className="opacity-50"
      />
    ),
    label: "Pago en efectivo",
    available: false,
  },
  {
    id: "coupon",
    icon: (
      <Image
        src="/images/payment/coupon.png"
        alt="Cupón de descuento"
        width={36}
        height={24}
        className="opacity-50"
      />
    ),
    label: "Cupón de descuento",
    available: false,
  },
];

export const PaymentOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handleSelectPayment = (paymentId: string) => {
    setSelectedPayment(paymentId);
  };

  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#333] mb-4">
        Escoge un medio de pago
      </h2>

      <div className="mb-6">
        {CARDS.map((card) => (
          <PaymentCard
            key={card.id}
            icon={card.icon}
            label={card.label}
            isAvailable={card.available}
            discount={null}
            onClick={() => {
              handleSelectPayment(card.id);
              setIsModalOpen(true);
            }}
            selected={selectedPayment === card.id}
          />
        ))}
      </div>

      <h2 className="text-[24px] font-bold text-[#333] mb-4">Otras opciones</h2>
      <div>
        {OTHER_OPTIONS.map((option) => (
          <PaymentCard
            key={option.id}
            icon={option.icon}
            label={option.label}
            isAvailable={option.available}
            discount={null}
            onClick={() => handleSelectPayment(option.id)}
            selected={selectedPayment === option.id}
          />
        ))}
      </div>
      <PaymenCardModal
        selectedCard={selectedPayment}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

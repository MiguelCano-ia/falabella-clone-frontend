"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const steps = [
  { number: 1, name: "Carro", path: "/falabella-co/basket" },
  { number: 2, name: "Entrega", path: "/falabella-co/checkout/delivery" },
  { number: 3, name: "Pago", path: "/falabella-co/checkout/payment" },
];

export const CheckoutStepper = () => {
  const pathName = usePathname();
  const getCurrentStep = () => {
    if (pathName.includes("/checkout/payment")) return 3;
    return 2;
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center w-full max-w-[52rem]">
        {steps.map((step, index) => {
          const isActive = getCurrentStep() >= step.number;
          const isPrevious = getCurrentStep() > step.number;
          const isClickable =
            step.number === 1 || step.number < getCurrentStep();

          return (
            <Fragment key={step.number}>
              <div className="flex flex-col items-center">
                {isClickable ? (
                  <Link href={step.path} className="focus:outline-none">
                    <div
                      className={`flex items-center justify-center w-[1.63rem] h-[1.63rem] rounded-full border-2 ${
                        isActive
                          ? "bg-[#343E49] border-[#343E49] text-white"
                          : "bg-[#ACACAC] border-[#ACACAC] text-white"
                      }`}
                    >
                      {step.number}
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`flex items-center justify-center w-[1.63rem] h-[1.63rem] rounded-full border-2 ${
                      isActive
                        ? "bg-white border-[#343E49] text-[#343E49] font-bold"
                        : "bg-[#ACACAC] border-[#ACACAC] text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                )}
                <span
                  className={`mt-2 mr-4 text-[#333] text-[16px] w-[1.63rem] h-[1.63rem] font-semibold  ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {step.name}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="flex-1 mb-8">
                  <div
                    className={`h-1 ${
                      isPrevious ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

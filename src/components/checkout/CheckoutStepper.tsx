import Link from "next/link";

export const CheckoutStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { number: 1, name: "Baket", path: "/falabella-co/basket" },
    { number: 2, name: "Delevery", path: "/checkout/delivery" },
    { number: 3, name: "Payment", path: "/checkout/payment" },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex items-center w-full max-w-2xl" key={currentStep}>
        {steps.map((step, index) => {
          const isActive = currentStep >= step.number;
          const isPrevious = currentStep > step.number;
          const isClickable = step.number === 1 || step.number < currentStep;

          return (
            <>
              <div className="flex flex-col items-center" key={step.number}>
                {isClickable ? (
                  <Link href={step.path} className="focus:outline-none">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        isActive
                          ? "bg-gray-700 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-gray-500"
                      }`}
                    >
                      {step.number}
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                      isActive
                        ? "bg-gray-700 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </div>
                )}
                <span
                  className={`mt-2 ${
                    isActive ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  {step.name}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div
                    className={`h-1 ${
                      isPrevious ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

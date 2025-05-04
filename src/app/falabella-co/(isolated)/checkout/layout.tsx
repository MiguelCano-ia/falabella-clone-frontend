"use client";

import { CheckoutStepper } from "@/components/checkout/CheckoutStepper";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const getCurrentStep = () => {
    if (pathName.includes("/checkout/payment")) return 3;
    return 2;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-lime-500 text-2xl font-bold">
              falabella.com
            </Link>
          </div>
          <div className="text-sm text-gray-600">
            ¿Necesitas ayuda para comprar? Llámanos al{" "}
            <span className="font-semibold">+57 601 587 8002</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <CheckoutStepper currentStep={getCurrentStep()} />
        <div className="mt-8 bg-white rounded-md shadow p-8">{children}</div>
      </main>
    </div>
  );
}

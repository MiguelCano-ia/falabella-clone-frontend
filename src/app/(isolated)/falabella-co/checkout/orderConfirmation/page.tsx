import { Button } from "@/components";
import { Check } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  const confirmation = cookieStore.get("order_confirmation")?.value;

  if (!confirmation) {
    redirect("/falabella-co/basket");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 mt-10">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 text-white rounded-full p-3 inline-block">
            <Check size={24} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          ¡Recibimos tu solicitud de compra!
        </h1>

        <p className="text-gray-600 mb-6">
          Te enviaremos los detalles y avances a:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left flex items-start">
          <div className="mr-3 mt-1">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-blue-800 text-sm">
              Te avisaremos cuando tu pedido esté listo para retirar. Estará
              disponible mañana en el lugar seleccionado.
            </p>
          </div>
        </div>

        <Button className="w-full bg-[#343E49] rounded-3xl text-lg font-bold  text-white">
          <Link href="/falabella-co/orders">Ir a Mis compras</Link>
        </Button>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-gray-700 font-semibold mb-2">¿Tienes dudas?</h2>
        <p className="text-gray-600 text-sm">
          Encuentra la solución en nuestro Centro de ayuda
        </p>
      </div>
    </div>
  );
}

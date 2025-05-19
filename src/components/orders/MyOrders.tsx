import { Order } from "@/interfaces/orders/orders";
import { formatCOP } from "@/lib/formatCop";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  orders: Order[];
}

export const MyOrders = ({ orders }: Props) => {
  return (
    <div className="min-h-screen p-10 mt-2">
      <div className="bg-white rounded-md shadow p-4 space-y-6">
        <div>
          {orders.map((order) => (
            <div className="text-sm font-medium text-gray-800" key={order.id}>
              <p className="text-sm font-medium">
                Compra Nº {order.payment_id}
              </p>
              <p className="text-xs text-gray-500">Retira desde mañana.</p>
              <p className="text-xs mt-2 text-blue-500">Solicitud recibida</p>

              <div className="flex flex-wrap justify-between items-start gap-4 pb-4 w-full">
                {order.products.map((product) => (
                  <Fragment key={product.id}>
                    <div>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/images/${product.product.images[0]}`}
                        alt="producto"
                        className="mt-2 object-cover rounded"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col items-center text-center mt-auto">
                      <p className="text-xs text-gray-400">Vendido por:</p>
                      <p className="text-xs font-medium text-gray-600">
                        {product.product.sold_by}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div className="text-right mt-5">
                <p className="mt-1 text-sm font-semibold">
                  Total: {formatCOP(order.total_price)}
                </p>
                <button
                  disabled
                  className="mt-4 bg-gray-800 text-white text-lg font-bold px-10 py-1 rounded-full disabled:bg-gray-400"
                >
                  Revisar detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

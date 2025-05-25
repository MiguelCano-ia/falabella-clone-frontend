import { Products } from "@/interfaces/categories/product";
import { BookX, Clock3, Link, MessageCircleHeart } from "lucide-react";

interface Props {
  product: Products;
}

export const SellBy = ({ product }: Props) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg flex flex-col gap-3 mt-3">
      <p className="text-gray-700">
        Vendido por{" "}
        <a href="#" className="text-black font-semibold hover:underline">
          {product?.sold_by}
        </a>
      </p>

      <div className="flex justify-center gap-1 text-yellow-500 text-lg">
        ⭐ ⭐ ⭐ ☆ ☆
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
            <Clock3 size={10} className="text-gray-600 text-lg" />
          </div>
          <p className="text-gray-700 text-xs text-center">
            Pocas entregas con demora
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
            <BookX size={10} className="text-gray-600 text-lg" />
          </div>
          <p className="text-gray-700 text-xs text-center">
            Pocos pedidos cancelados
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
            <MessageCircleHeart size={10} className="text-gray-600 text-lg" />
          </div>
          <p className="text-gray-700 text-xs text-center">
            Ofrece un buen servicio
          </p>
        </div>
      </div>

      <Link
        href="#"
        className="text-gray-600 font-semibold text-center hover:underline"
      >
        Ver todos los productos de este vendedor
      </Link>
    </div>
  );
};

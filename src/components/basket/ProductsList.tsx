import { Products } from "@/interfaces/categories/product";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { EllipsisVertical, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { formatCOP } from "@/lib/formatCop";
import { useEffect, useState } from "react";

interface Props {
  products: Products[];
  parentChecked: boolean;
}

export const ProductsList = ({ products, parentChecked }: Props) => {
  const [checked, setChecked] = useState(parentChecked);

  useEffect(() => {
    setChecked(parentChecked);
  }, [parentChecked]);

  return (
    <div className="divide-y">
      {products.map((product) => (
        <div key={product.id_product} className="flex items-center px-4 py-4">
          <Checkbox
            id={`item-${product.id_product}`}
            className="mr-4"
            checked={checked}
            onCheckedChange={(checked) => setChecked(!!checked)}
          />

          <div className="w-[100px] h-[100px] relative flex-shrink-0">
            <Image
              src={`http://localhost:4000/images/${product.images[0]}`}
              alt={product.title}
              width={100}
              height={100}
            />
          </div>

          <Link
            href={`/falabella-co/product/${product.id_product}`}
            className="ml-4 w-[300px]"
          >
            <p className="font-semibold text-[16px] text-[#333] line-clamp-3">
              {product.title}
            </p>
            <p className="text-[12px] text-[#333] mt-2">{product.brand}</p>
          </Link>

          <div className="flex flex-1 flex-col items-center justify-center text-center ">
            <div className="flex flex-col items-start">
              {product.special_price && (
                <>
                  <Image
                    src="/images/category/specialdiscount.png"
                    alt="cmr"
                    width={61}
                    height={20}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-[18px] text-[#E4022D]">
                      {formatCOP(product.special_price!)}
                    </span>
                    <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px] ">
                      -{product.special_discount_percentage}%
                    </span>
                  </div>
                </>
              )}
              <div className="flex items-center gap-2">
                {product.discount_price && (
                  <p className="text-[18px] text-[#717171]">
                    {formatCOP(product.discount_price)}
                  </p>
                )}
                {!product.special_price && product.discount_percentage && (
                  <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px] ">
                    -{product.discount_percentage}%
                  </span>
                )}
              </div>
              <p
                className={`text-[14px] text-[#717171] ${
                  product.special_price || product.discount_price
                    ? "line-through"
                    : "text-[18px] text-start mr-16"
                }`}
              >
                {formatCOP(product.price)}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              title="Más opciones"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="p-2 text-gray-500 hover:text-gray-700 text-right mr-3"
            >
              <EllipsisVertical size={20} />
            </button>
            <div className="flex items-center mx-4">
              <div
                className="flex items-center justify-center h-[26px] w-[26px] rounded-[10px] bg-[#343E49] font-bold"
                onClick={() => {
                  /* reducir cantidad */
                }}
              >
                <Minus size={10} className="text-white" />
              </div>
              <span className="mx-4 text-[14px]">1</span>
              <div
                className="flex items-center justify-center h-[26px] w-[26px] rounded-[10px] bg-[#343E49] font-bold"
                onClick={() => {
                  /* aumentar cantidad */
                }}
              >
                <Plus size={10} className="text-white text-ce" />
              </div>
            </div>
            <span className={`text-[12px] p-2 mr-2`}>
              Máx {product.stock} {product.stock === 1 ? "unidad" : "unidades"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

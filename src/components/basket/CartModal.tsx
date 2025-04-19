"use client";

import { formatCOP } from "@/lib/formatCop";
import { useCartStore } from "@/store/basket/cart.store";
import { useUIStore } from "@/store/ui";
import { X, Minus, Plus, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CartModal = () => {
  const isCartOpen = useUIStore((state) => state.isCartOpen);
  const product = useCartStore((state) => state.cartProduct);
  const closeCart = useUIStore((state) => state.closeCart);

  if (!isCartOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-[12px] shadow-md w-[720px] h-auto min-h-[300px] px-[27px] relative">
        <button
          title="modal"
          onClick={closeCart}
          className="absolute top-3 right-3 text-[#888]"
        >
          <X size={20} />
        </button>

        <div className="flex items-center mb-4 border-b-[1px]">
          <CircleCheck size={32} className="text-[#30871F] mr-4 my-2" />
          <div className="text-[#333] font-medium text-[18px] mb-2 my-2">
            Producto agregado a tu Carro
          </div>
        </div>

        <div className="flex items-start h-[185px]">
          <Image
            src={`http://localhost:4000/images/${product.images[0]}`}
            alt={product.brand}
            width={60}
            height={60}
            className="border-[1px] mr-4"
          />
          <div className="w-[96px] mr-[36px]">
            <p className="text-[10px] text-[#888]">{product.brand}</p>
            <p className="text-[12px] text-[#333] line-clamp-2">
              {product.title}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center ">
            <div className="flex flex-col items-start mr-8">
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
          <div className="flex items-center mx-4">
            <div
              className="flex items-center justify-center h-[30px] w-[30px] bg-[#EEE] font-bold"
              onClick={() => {
                /* reducir cantidad */
              }}
            >
              <Minus size={10} className="text-black" />
            </div>
            <span className="mx-4 text-[14px]">1</span>
            <div
              className="flex items-center justify-center h-[30px] w-[30px] bg-[#EEE] font-bold"
              onClick={() => {
                /* aumentar cantidad */
              }}
            >
              <Plus size={10} className="text-black text-ce" />
            </div>
          </div>
          <p className="h-[32px] font-normal text-[12px] leading-[14.4px] text-[#888] mt-2">
            Máximo {product.stock} unidades.
          </p>
        </div>

        <div className="py-[12px] flex justify-end items-center cursor-pointer gap-5">
          <span
            className="text-[14px] underline underline-offset-4 text-[#333]"
            onClick={closeCart}
          >
            Seguir comprando
          </span>
          <Link
            href="/falabella-co/basket"
            className="bg-[#495867] text-white py-2 px-6 font-normal rounded-[20px] h-[40px] leading-[23px] text-[19px]"
            onClick={closeCart}
          >
            Ir al Carro
          </Link>
        </div>
      </div>
    </div>
  );
};

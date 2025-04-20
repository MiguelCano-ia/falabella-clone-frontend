"use client";

import { addProductToCart } from "@/actions/basket/cookies";
import { Button } from "@/components/ui/button";
import { formatCOP } from "@/lib/formatCop";
import { Products } from "@/interfaces/categories/product";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUIStore } from "@/store/ui";
import { useCartStore } from "@/store/basket/cart.store";
import { useSelectionStore } from "@/store/basket/selection.store";

interface Props {
  product: Products;
}

export const ProductCard = ({ product }: Props) => {
  const openCart = useUIStore((state) => state.openCart);
  const setCartProduct = useCartStore((state) => state.setCartProduct);
  const toggleProduct = useSelectionStore((s) => s.toggleProduct);
  const [addToCart, setAddToCart] = useState(false);
  const router = useRouter();

  const onAddToCart = () => {
    addProductToCart(product.id_product.toString());
    router.refresh();
    toggleProduct(product.sold_by, product.id_product.toString());
    setCartProduct(product);
    openCart();
  };

  return (
    <>
      <div className="w-[239px] pl-[10px] mb-[10px] h-[556px] rounded-[12px]">
        <Link
          href={`/falabella-co/product/${product.id_product}`}
          className="flex flex-col border-[1px] border-[#F0F0F0] w-full h-full bg-[#FFF] rounded-[12px]"
          onMouseEnter={() => setAddToCart(true)}
          onMouseLeave={() => setAddToCart(false)}
        >
          <Image
            src={`http://localhost:4000/images/${product.images[0]}`}
            alt="dell"
            width={227}
            height={227}
            className="rounded-t-[12px]  w-[227px] h-[227px] object-contain"
          />
          <div className="flex flex-col pt-[22px] px-[15px] pb-[7px] border-t-[1px] border-[#F0F0F0]">
            <span className="leading-[16px] text-[13px] tracking-normal text-[#767676]">
              {product.brand}
            </span>
            <span className="font-bold text-[16px] w-[198px] mt-[7px] text-[#4A4A4A] line-clamp-3">
              {product.title}
            </span>
            <span className="text-[13px] leading-[16px] text-[#333] mt-[8px]">
              {product.sold_by}{" "}
            </span>
          </div>
          <div className="flex flex-col px-[15px] h-full">
            <div className="flex flex-col mb-[12px]">
              {product.special_discount_percentage && (
                <>
                  <Image
                    src="/images/category/specialdiscount.png"
                    width={65}
                    height={15}
                    alt="cmr-points"
                    className="mb-2"
                  />
                  <div className="flex items-center gap-2 font-normal leading-[22px]">
                    <span className=" text-[#e4022d] text-[18px] ">
                      {formatCOP(product.special_price!)}{" "}
                    </span>
                    <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px] ">
                      -{product.special_discount_percentage}%
                    </span>
                  </div>
                </>
              )}
              {product.discount_percentage &&
              !product.special_discount_percentage ? (
                <div className="flex items-center gap-2 font-normal leading-[22px]">
                  <span className=" text-[#717171] text-[18px] ">
                    {formatCOP(product.discount_price)}{" "}
                  </span>
                  <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px] ">
                    -{product.discount_percentage}%
                  </span>
                </div>
              ) : (
                <span className="text-[#717171] text-[18px]">
                  {Number(product.discount_price) !== 0
                    ? formatCOP(product.discount_price)
                    : ""}{" "}
                </span>
              )}
              <span
                className={`text-[#717171] ${
                  !product.special_discount_percentage &&
                  !product.discount_percentage
                    ? "text-[18px]"
                    : "text-[14px] line-through"
                } `}
              >
                {formatCOP(product.price)}{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div className="flex items-end justify-center min-h-[34px]">
              <div className="py-[12px]">
                <Button
                  variant="register"
                  className={`text-white bg-[#343E49] h-[40px] rounded-[30px] font-semibold text-[20px] w-[190px] ${
                    addToCart ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onAddToCart();
                  }}
                >
                  Agregar al Carro
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

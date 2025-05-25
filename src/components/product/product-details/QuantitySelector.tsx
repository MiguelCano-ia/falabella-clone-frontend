"use client";

import { addToCart } from "@/actions/basket/cart";
import { CartModal } from "@/components/basket/cart/CartModal";
import { Products } from "@/interfaces/categories/product";
import { useCartStore } from "@/store/basket/cart.store";
import { useSelectionStore } from "@/store/basket/selection.store";
import { useUIStore } from "@/store/ui";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: Products;
  cart: Record<string, number>;
}

export const QuantitySelector = ({ product, cart }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const openCart = useUIStore((state) => state.openCart);
  const setCartProduct = useCartStore((state) => state.setCartProduct);
  const selectProduct = useSelectionStore((state) => state.selectProduct);

  const productQuantity = cart[product.id_product] ?? 0;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const onAddToCart = async () => {
    if (productQuantity + quantity > product.stock) {
      setError(true);
      return;
    }
    setError(false);
    await addToCart(product.id_product.toString(), quantity.toString());
    selectProduct(product.sold_by, product.id_product.toString());
    setCartProduct(product);
    openCart();
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={decrementQuantity}
          className="flex items-center justify-center bg-gray-300 text-gray-700 px-3 py-2 rounded disabled:opacity-50 mr-3 w-7 h-7"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-[16pspx]">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="flex items-center justify-center bg-gray-300 text-gray-700 px-3 py-2 rounded ml-3 w-7 h-7"
          disabled={quantity >= product.stock}
        >
          +
        </button>
      </div>
      {quantity >= product.stock && (
        <div className="flex items-center bg-[#fff9e9] max-w-[286px] my-4 rounded-[4px] py-[4.75px] px-[9px]">
          <Image
            src="/icons/products/warning.svg"
            width={19}
            height={20}
            alt="warining"
          />
          <p className="text-[#333] text-[12px]">
            Solo puedes llevar {product.stock} unidades
          </p>
        </div>
      )}
      <div className="mt-6 flex flex-col gap-4">
        <button
          className="w-full bg-gray-700 text-white text-lg py-3 rounded-full hover:bg-gray-800 transition font-bold"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onAddToCart();
          }}
        >
          Agregar al Carro
        </button>
      </div>
      {error && (
        <div className="flex items-center bg-[#fff9e9] max-w-[286px] my-4 rounded-[4px] py-[4.75px] px-[9px]">
          <Image
            src="/icons/products/warning.svg"
            width={19}
            height={20}
            alt="warining"
          />
          <p className="text-[#333] text-[12px] ml-2">
            Hubo un error al agregar el producto al carro
          </p>
        </div>
      )}
      <CartModal cart={cart} />
    </>
  );
};

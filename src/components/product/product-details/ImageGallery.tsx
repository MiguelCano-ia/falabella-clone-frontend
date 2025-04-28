"use client";

import { Products } from "@/interfaces/categories/product";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  product: Products;
}

export const ImageGallery = ({ product }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center">
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/images/${product.images[index]}`}
        alt={product?.brand || ""}
        width={500}
        height={500}
        className="rounded-lg shadow-lg"
      />
      <div className="flex gap-2 mt-4">
        {product?.images.map((image, index) => (
          <Image
            key={image}
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${product.images[index]}`}
            width={80}
            height={80}
            alt="Miniatura"
            className="w-16 h-16 border rounded cursor-pointer hover:border-gray-700"
            onClick={() => setIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

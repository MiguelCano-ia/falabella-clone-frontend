"use client";

import { Products } from "@/interfaces/categories/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import ProductDiscount from "../category/products/shared/ProductDiscount";
import Link from "next/link";

interface Props {
  products: Products[];
}

export const SimilarOptions = ({ products }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-12 bg-white max-w-7xl mx-auto rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Más opciones similares</h3>
      <div className="relative">
        <button
          type="button"
          title="left"
          onClick={() => scrollCarousel("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={carouselRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
        >
          <div className="flex gap-4">
            {products.map((prod, idx) => (
              <Link
                href={`/falabella-co/product/${prod.id_product}`}
                key={idx}
                className="min-w-[160px] bg-white border rounded-lg shadow-sm p-3 relative w-full"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/images/${prod.images[0]}`}
                  alt={prod.title}
                  height={28}
                  width={160}
                  className="object-cover mb-2 rounded"
                />
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  {prod.brand}
                </p>
                <p className="text-sm font-medium leading-tight line-clamp-2 mb-1">
                  {prod.title}
                </p>
                <ProductDiscount product={prod} />
              </Link>
            ))}
          </div>
        </div>

        <button
          title="right"
          onClick={() => scrollCarousel("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

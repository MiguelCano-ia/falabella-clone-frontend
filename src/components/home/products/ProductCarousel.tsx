"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Products } from "@/interfaces/categories/product";
import ProductDiscount from "@/components/category/products/shared/ProductDIscount";

interface Props {
  products: Products[];
  title: string;
  scrollBy: number;
}

export const ProductCarousel = ({ products, title, scrollBy }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      updateButtons();
    };

    emblaApi.on("select", onSelect);
    updateButtons();
  }, [emblaApi, updateButtons]);

  return (
    <div className="mt-8 relative">
      <h2 className="text-[20px] font-normal leading-normal text-[#333] pb-5 ml-10 border-b-[1px] mb-5">
        {title}
      </h2>
      <div
        className="max-w-[1170px] mx-auto overflow-hidden relative"
        ref={emblaRef}
      >
        <div className="flex">
          {products.map((product) => (
            <div
              key={product.id_product}
              className="group min-w-[195px] max-w-[195px] flex-shrink-0 px-2 flex flex-col justify-between rounded-lg p-2 bg-white shadow-sm"
            >
              <div>
                <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={`http://localhost:4000/images/${product.images[0]}`}
                    alt={product.title}
                    width={276}
                    height={276}
                    className="object-cover w-full h-full"
                  />
                </div>

                <p className="text-[12px] text-[#767676] mt-2">
                  {product.brand}
                </p>
                <p className="text-[#4A4A4A] text-[14px] font-bold leading-normal line-clamp-2">
                  {product.title}
                </p>
                <ProductDiscount product={product} />
                {/* {product.rating && (
                  <p className="text-xs mt-1">{+product.rating}</p>
                )} */}
              </div>

              <Link
                href={`/falabella-co/product/${product.id_product}`}
                className="mt-3 w-full block text-center bg-gray-700 text-white font-semibold text-[16px] py-2 rounded-full hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Ver producto
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button
        title="left"
        onClick={() => {
          if (!emblaApi) return;
          const index = emblaApi.selectedScrollSnap();
          emblaApi.scrollTo(index - scrollBy);
        }}
        disabled={!canScrollPrev}
        className="absolute left-0 top-[calc(50%+8px)] transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-200 z-10"
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      <button
        title="right"
        onClick={() => {
          if (!emblaApi) return;
          const index = emblaApi.selectedScrollSnap();
          emblaApi.scrollTo(index + scrollBy);
        }}
        disabled={!canScrollNext}
        className="absolute right-0 top-[calc(50%+8px)] transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-200 z-10"
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>

      <div className="flex justify-center mt-4">
        <div className="flex gap-2 px-4 py-1 rounded-full shadow-sm">
          {Array.from({
            length: Math.ceil(products.length / scrollBy),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index * scrollBy)}
              className={`w-2.5 h-2.5 rounded-full transition-all font-semibold text-[20px] ${
                selectedIndex === index * scrollBy
                  ? "bg-gray-500 w-4"
                  : "bg-gray-300"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

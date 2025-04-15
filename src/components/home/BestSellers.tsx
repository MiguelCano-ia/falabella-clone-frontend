'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/120766199_02/w=276,h=276",
    brand: "IN GRILL",
    name: "Barril Asador y Ahumador mini basic 6L",
    price: "$229.900",
    oldPrice: "$479.900",
    discount: "-52%",
    rating: "⭐⭐⭐⭐ 4.7",
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73025565_1/w=276,h=276",
    brand: "XIAOMI",
    name: "Audífonos earbuds Xiaomi Bluetooth Redmi",
    price: "$59.900",
    oldPrice: "$199.900",
    discount: "-70%",
    rating: "⭐⭐⭐⭐ 4.7",
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/123834196_02/w=276,h=276",
    brand: "LATTAFA",
    name: "Perfume Yara 100ml Lattafa",
    price: "$199.000",
    oldPrice: "$339.900",
    discount: "-41%",
    rating: "⭐⭐⭐⭐ 4.5",
  },
  {
    id: 4,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73142852_1/w=276,h=276",
    brand: "SAMSUNG",
    name: "Celular Samsung Galaxy S24 FE Negro + 128GB",
    price: "$2.099.900",
    oldPrice: "$3.099.900",
    discount: "-32%",
    rating: "⭐⭐⭐⭐ 4.8",
  },
  {
    id: 5,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/1398700_1/w=276,h=276",
    brand: "MONTBLANC",
    name: "Montblanc Starwalker 75ml",
    price: "$189.990",
    oldPrice: "$439.900",
    discount: "-57%",
    rating: "⭐⭐⭐⭐ 4.5",
  },
  {
    id: 6,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73171801_1/w=276,h=276",
    brand: "UNIVERSAL",
    name: "Juego de ollas antiadherente Universal",
    price: "$189.990",
    oldPrice: "$299.900",
    discount: "-37%",
    rating: "⭐⭐⭐⭐ 4.0",
  },
  {
    id: 7,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73171801_1/w=276,h=276",
    brand: "UNIVERSAL",
    name: "Juego de ollas antiadherente Universal",
    price: "$189.990",
    oldPrice: "$299.900",
    discount: "-37%",
    rating: "⭐⭐⭐⭐ 4.0",
  },
];

const BestSellers = () => {
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

  const scrollBy = 7; // Cambiar desplazamiento a 7 slides

  return (
    <div className="mt-8 relative">
      <h2 className="text-lg font-semibold mb-4 px-40">Los más vendidos</h2>
       <div className="max-w-[1170px] mx-auto overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="group min-w-[195px] max-w-[195px] flex-shrink-0 px-2 flex flex-col justify-between rounded-lg p-2 bg-white shadow-sm"
            >
              <div>
                <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={276}
                    height={276}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{product.brand}</p>
                <p className="text-sm font-semibold line-clamp-2">
                  {product.name}
                </p>
                <p className="text-md font-bold text-gray-500">{product.price}</p>
                {product.oldPrice && (
                  <p className="text-xs text-gray-400 line-through">
                    {product.oldPrice}
                  </p>
                )}
                {product.discount && (
                  <span className="text-xs bg-red-500 text-white px-1 rounded">
                    {product.discount}
                  </span>
                )}
                {product.rating && (
                  <p className="text-xs mt-1">{product.rating}</p>
                )}
              </div>

              <Link
                href={`/falabella-co/product/${product.id}`}
                className="mt-3 w-full block text-center bg-gray-700 text-white text-xs py-2 rounded-full hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Ver producto
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas */}
      <button
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
              className={`w-2.5 h-2.5 rounded-full transition-all ${
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

export default BestSellers;

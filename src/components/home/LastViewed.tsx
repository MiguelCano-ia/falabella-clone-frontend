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
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/123688520_01/w=276,h=276",
    brand: "LAVEF",
    name: "Chaqueta Rompevientos 100 Reflectiva",
    price: "$59.900",
    oldPrice: "$64.800",
    rating: "⭐⭐⭐⭐ 4.1",
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/125368227_01/w=276,h=276",
    brand: "SPARTAN",
    name: "CASCO MOTO SPARTAN DRAKEN LEATHER",
    price: "$219.900",
    oldPrice: "$279.900",
    discount: "-21%",
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/133724849_01/w=276,h=276",
    brand: "MT HELMETS",
    name: "CASCO MT HELMETS STINGER Z ZIVZE",
    price: "$343.200",
    oldPrice: "$429.000",
    discount: "-20%",
  },
  {
    id: 4,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/130901569_01/w=276,h=276",
    brand: "O'NEAL",
    name: "Guantes Element Neon niño talla 3-4",
    price: "$140.000",
  },
  {
    id: 5,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132864987_01/w=276,h=276",
    brand: "GENERICO",
    name: "Guantes de protección Con táctil para motociclistas unisex",
    price: "$98.900",
  },
  {
    id: 6,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
  {
    id: 7,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
  {
    id: 8,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
  {
    id: 9,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
  {
    id: 10,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
  {
    id: 11,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
  {
    id: 12,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
];

const LastViewed = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateButtons);
    updateButtons();
  }, [emblaApi, updateButtons]);

  const scrollBy = 7; // Cambiar desplazamiento a 7 slides

  return (
    <div className="mt-8 relative">
      <h2 className="text-lg font-semibold mb-4 px-20">Tus últimos vistos</h2>

      <div className="max-w-[1370px] mx-auto overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="group min-w-[195px] max-w-[195px] flex-shrink-0 px-2 flex flex-col justify-between border rounded-lg p-2 bg-white shadow-sm"
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
                className="mt-3 w-full block text-center bg-gray-700 text-white text-xs py-2 rounded-full hover:bg-gray-800 transition opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
    </div>
  );
};

export default LastViewed;
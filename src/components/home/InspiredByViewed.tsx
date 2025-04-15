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
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132578571_01/w=276,h=276",
    brand: "SUOMY",
    name: "Guantes de Moto transpirables hombre",
    price: "$79.900",
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/141239335_01/w=276,h=276",
    brand: "GENÉRICO",
    name: "Chaqueta hombre piloto impermeable y acolchada",
    price: "$55.000",
    oldPrice: "$70.000",
    discount: "-21%",
    rating: "⭐⭐⭐⭐⭐ 5",
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/127913190_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi Poco X6 Pro 5G 512Gb 12Ram",
    price: "$1.249.900",
    oldPrice: "$1.899.900",
    discount: "-34%",
    rating: "⭐⭐⭐⭐ 4.6",
  },
  {
    id: 4,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132589123_01/w=276,h=276",
    brand: "SUOMY",
    name: "Guantes Impermeables Térmicos Para Hombres",
    price: "$94.900",
    rating: "⭐⭐⭐⭐⭐ 5",
  },
  {
    id: 5,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/136641530_01/w=276,h=276",
    brand: "ICON",
    name: "Guantes Protección Transpirable Motociclista",
    price: "$129.990",
  },
  {
    id: 6,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/139966924_01/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi Poco X7 Pro 5G 512Gb 12Ram",
    price: "$1.579.900",
    oldPrice: "$2.599.900",
    discount: "-39%",
    rating: "⭐⭐⭐⭐⭐ 5",
  },
  {
    id: 7,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/139966924_01/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi Poco X7 Pro 5G 512Gb 12Ram",
    price: "$1.579.900",
    oldPrice: "$2.599.900",
    discount: "-39%",
    rating: "⭐⭐⭐⭐⭐ 5",
  },
];

const InspiredByViewed = () => {
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
      <h2 className="text-lg font-semibold mb-4 px-40">Inspirado en lo que viste</h2>
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

export default InspiredByViewed;

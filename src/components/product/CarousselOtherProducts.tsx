"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const productosRecomendados = [
  {
    id: 1,
    nombre: "Celular Motorola Rzr 50",
    precio: 3599900,
    imagen:
      "https://media.falabella.com/falabellaCO/73004859/w=136,h=136,fit=pad",
  },
  {
    id: 2,
    nombre: "Motorola Edge 50",
    precio: 2099900,
    imagen:
      "https://media.falabella.com/falabellaCO/138279132/w=136,h=136,fit=pad",
  },
  {
    id: 3,
    nombre: "Moto G24 POWER",
    precio: 459900,
    imagen:
      "https://media.falabella.com/falabellaCO/72905948/w=136,h=136,fit=pad",
  },
  {
    id: 4,
    nombre: "Motorola G85 RAM 8GB",
    precio: 1049900,
    imagen:
      "https://media.falabella.com/falabellaCO/136437016/w=136,h=136,fit=pad",
  },
  {
    id: 5,
    nombre: "Estuche iPhone 7/8",
    precio: 29990,
    imagen:
      "https://media.falabella.com/falabellaCO/124463756/w=136,h=136,fit=pad",
  },
  {
    id: 6,
    nombre: "Estuche Gear4 Havana",
    precio: 39900,
    imagen:
      "https://media.falabella.com/falabellaCO/124225163/w=136,h=136,fit=pad",
  },
];

export const CarousselOtherProducts = () => {
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
    <div className="mt-12 bg-white max-w-6xl mx-auto rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">
        Varias personas después miran
      </h3>
      <div className="relative">
        <button
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
            {productosRecomendados.map((prod) => (
              <div
                key={prod.id}
                className="min-w-[160px] bg-white border rounded-lg shadow-sm p-3"
              >
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  className="w-full h-28 object-cover mb-2 rounded"
                />
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  MOTOROLA
                </p>
                <p className="text-sm font-medium leading-tight line-clamp-2 mb-1">
                  {prod.nombre}
                </p>
                <p className="text-red-600 font-bold text-sm">
                  ${prod.precio.toLocaleString("es-CO")}
                </p>
              </div>
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

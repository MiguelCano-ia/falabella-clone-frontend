"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "¡Nueva Alianza!",
    description:
      "Ahora acumulas CMR Puntos en CYGLO pagando con cualquier medio de pago",
    cta: "Conoce más aquí",
    image: "/images/cmr-page/HEADER-WEB-CYGLO.webp",
  },
  {
    id: 2,
    title: "Inscribete gratis y recibe 1.000 CMR Puntos",
    description:
      "!Que te regalan Falabella y Homecenter para redimir en lo que quieras¡",
    cta: "Inscribete aquí",
    image: "/images/cmr-page/VITRINA.webp",
  },
  {
    id: 3,
    title: "Acumula CMR Puntos en todas tus compras",
    description: "Pide YA tu Tarjeta CMR Banco Falabella",
    cta: "Adquiérela ahora",
    image: "/images/cmr-page/CARD.webp",
  },
];

export const CMRCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative bg-[#f7f9fb] py-6 px-4 rounded-xl max-w-7xl mx-auto h-[400px]">
      <div ref={emblaRef} className="overflow-hidden rounded-2xl shadow-sm">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full bg-white flex rounded-2xl overflow-hidden"
            >
              <div className="w-1/2 bg-gradient-to-r from-[#e3e3e3]/60 to-transparent p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600 mb-6">{slide.description}</p>
                <button className="bg-[#3d9400] hover:bg-[#2e7d00] text-white px-6 py-2 rounded-full text-sm font-semibold w-fit">
                  {slide.cta}
                </button>
              </div>

              <div className="w-1/2 relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        title="izquierda"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#bada00] text-white p-2 rounded-full z-10 hover:brightness-95"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        title="derecha"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#bada00] text-white p-2 rounded-full z-10 hover:brightness-95"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            title="puntos"
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-[#cddc39] w-4"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

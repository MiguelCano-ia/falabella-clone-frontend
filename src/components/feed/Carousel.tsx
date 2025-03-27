"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/danxa3xqy/image/upload/f_auto,q_auto,w_1920,h_1080,c_limit/v1740873509/Vitrina1_Ofertas_Desk_erzhzv.jpg",
    title: "Ofertas",
    subtitle: "Hasta 50% de descuento",
  },
  {
    id: 2,
    image: "/src/public/Slide 2.png",
    title: "Descuentos",
    subtitle: "Hasta 70% de descuento",
  },
  {
    id: 3,
    image: "/src/public/Slide 1.png",
    title: "Promociones",
    subtitle: "Hasta 80% de descuento",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
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

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full flex items-center justify-center"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center px-10 text-white">
                <h2 className="text-lg md:text-2xl font-bold">{slide.title}</h2>
                <p className="text-xl md:text-3xl font-extrabold">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        title="Previous"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!canScrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        title="Next"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!canScrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

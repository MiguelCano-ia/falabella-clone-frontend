"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta9e5de6f644dfb98/67edad9d493d2caf8eac845b/V04_electro_celulares_lanzamiento-iphone-16e_desk.webp?auto=webp&disable=upscale&quality=70&width=1920",
  },
  {
    id: 2,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta64f11c13a2e301e/67f3f8b75046ad1a3e5384f1/Vitrina_modahombre_lamartina_desk.webp?auto=webp&disable=upscale&quality=70&width=1920",
  },
  {
    id: 3,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltb6863e00aff9bd61/67eee0d58e97ad4261290a78/V03_Festivaldecelulares_Desk.webp?auto=webp&disable=upscale&quality=70&width=1920",
  },
  {
    id: 4,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt9e13e75ad8fb7ca5/67edad9cd7fca9386a5f804a/V06_Perfumeria-abril_desk.webp?auto=webp&disable=upscale&quality=70&width=1920",
  },
  {
    id: 5,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltc3bc9132d21ea64e/67edad9c6a6ba66cf8e75564/V05_Tenis-Desk.webp?auto=webp&disable=upscale&quality=70&width=1920",
  },
  {
    id: 6,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt1bcc626fc1faf2c9/67f535c0d3942b6fb444c186/VTR_DK_Electrolux.webp?auto=webp&disable=upscale&quality=70&width=1920",
  },
];

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateButtons);
    updateButtons();

    const interval = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [emblaApi, updateButtons]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full flex items-center justify-center h-[433px]"
            >
              <Link href="/" className="w-full h-full block">
                <Image
                  src={slide.image}
                  alt={`slide-${slide.id}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0  flex flex-col items-start justify-center px-10 text-white" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas */}
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

      {/* Dots */}
      <div className="w-full flex justify-center mt-4">
        <div className="flex gap-2 bg-gray-700 px-4 py-1 rounded-full shadow-sm">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                selectedIndex === index ? "bg-white w-4" : "bg-gray-400"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

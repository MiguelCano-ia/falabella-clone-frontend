'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    image: "https://images.ctfassets.net/n8a32dlewwba/3khYHMbnfGWXDmr2O7wnEB/e9338e909031b2727e24d0f2ebec79eb/antojos_bonos_FAL__1_.png?fm=webp",
    brand: "https://images.ctfassets.net/n8a32dlewwba/3mmv3z0GG34uU8HFhis2RM/423ccc8b2f5bc92c6c0bf169e11cd6b9/Dise_o_sin_t_tulo__2_.png.crdownload?fm=webp",
    title: "Bono Homecenter $13.000",
    link: "Redime ya",
    price: "1.000",
    prevPrice: null,
  },
  {
    id: 2,
    image: "https://images.ctfassets.net/n8a32dlewwba/6LwJn0EdZkBtOOkjp0XUoq/d5dd1fd3ebfbeab5c8c1bfd1c212a982/antojos_bonos_HC__1_.png?fm=webp",
    brand: "https://images.ctfassets.net/n8a32dlewwba/13jNtBSf7xpdGHxc1BhI2z/e48cf96afd76018a8cd41f4f44fbc98f/Dise_o_sin_t_tulo__3_.png.crdownload?fm=webp",
    title: "Bono BBC $20.000",
    link: "Redime ya",
    price: "1.000",
    prevPrice: null,
  },
  {
    id: 3,
    image: "https://images.ctfassets.net/n8a32dlewwba/N2cpJy9rvFrUUjhga2uPg/ee55d77aa6586f2cc3a99f0cc4f6b84e/antojos_bonos_BBC__1_.png?fm=webp",
    brand: "https://images.ctfassets.net/n8a32dlewwba/1oa4mtKtWJKQdVQYhMjstR/99e21ec3df42efdd0c4934bc31958763/LogoBBC.png?fm=webp",
    title: "Bono BBC $20.000",
    link: "Redime ya",
    price: "1.500",
    prevPrice: "2.000",
  },
  {
    id: 4,
    image: "https://images.ctfassets.net/n8a32dlewwba/3EWS0sIh6X7wnKtqQf5hWO/1b92cd5c68db7c308231d9dc365eb75c/antojos_bonos_POPSY__1_.png?fm=webp",
    brand: "https://images.ctfassets.net/n8a32dlewwba/6zKejD3gHbmRR2fFYr0937/a5d4534eee65e1740e400f757dbbb736/Logo_popsy.png?fm=webp",
    title: "1 Sundae de 1 sabor en Popsy",
    link: "para redimir",
    price: "500",
    prevPrice: "1.000",
  },
];

const CarruselBonos = () => {
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

  return (
    <section className="py-10 bg-[#f7f9fb]">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Antojos y bonos a un clic
      </h2>
      <div className="relative max-w-[970px] mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-sm overflow-hidden flex-shrink-0"
              >
                <div className="w-full h-[200px] relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <Image src={product.brand} alt="logo" width={50} height={50} />
                  <p className="font-semibold mt-2 text-sm">{product.title}</p>
                  <p className="text-xs text-gray-500">{product.link}</p>
                  <div className="mt-4">
                    {product.prevPrice && (
                      <p className="text-xs line-through text-gray-400">
                        {product.prevPrice} <span className="text-[10px]">CMR puntos</span>
                      </p>
                    )}
                    <p className="text-green-600 font-bold text-lg">
                      {product.price} <span className="text-xs font-normal">CMR puntos</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#cbe51d] hover:bg-[#b0cf10] p-2 rounded-full z-10"
        >
          <ChevronLeft className="text-white h-5 w-5" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#cbe51d] hover:bg-[#b0cf10] p-2 rounded-full z-10"
        >
          <ChevronRight className="text-white h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default CarruselBonos;

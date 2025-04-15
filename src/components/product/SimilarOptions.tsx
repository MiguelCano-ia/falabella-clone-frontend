'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const opcionesSimilares = [
  { id: 1, marca: 'MOTOROLA', nombre: 'Celular Motorola Edge 50 Neo 5G', precio: 1419900, antes: 1999900, descuento: 29, imagen: 'https://media.falabella.com/falabellaCO/72880391/w=136,h=136,fit=pad' },
  { id: 2, marca: 'HONOR', nombre: 'Celular HONOR X6B PLUS 4G 256GB', precio: 579900, antes: 759900, descuento: 24, imagen: 'https://media.falabella.com/falabellaCO/139703604/w=136,h=136,fit=pad', patrocinado: true },
  { id: 3, marca: 'TECNO MOBILE', nombre: 'Celular TECNO Spark 30c 256GB 8GB', precio: 529900, antes: 699900, descuento: 24, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73247750_1/w=136,h=136,fit=pad' },
  { id: 4, marca: 'OPPO', nombre: 'Celular OPPO RENO 13 5G [512GB]', precio: 3299900, antes: 4999900, descuento: 34, imagen: 'https://media.falabella.com/falabellaCO/138465771/w=136,h=136,fit=pad' },
  { id: 5, marca: 'INFINIX', nombre: 'Celular Infinix Hot 50 256GB/8GB RAM', precio: 719900, antes: 849900, descuento: 15, imagen: 'https://media.falabella.com/falabellaCO/73051053/w=136,h=136,fit=pad' },
  { id: 6, marca: 'HONOR', nombre: 'Celular HONOR Magic 6 Lite 5G', precio: 1569900, antes: 2299900, descuento: 32, imagen: 'https://media.falabella.com/falabellaCO/142563775/w=136,h=136,fit=pad', patrocinado: true },
];

const OpcionesSimilares = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-12 bg-white max-w-6xl mx-auto rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Más opciones similares</h3>
      <div className="relative">
        <button onClick={() => scrollCarousel('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow">
          <ChevronLeft size={20} />
        </button>

        <div ref={carouselRef} className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
          <div className="flex gap-4">
            {opcionesSimilares.map((prod) => (
              <div key={prod.id} className="min-w-[160px] bg-white border rounded-lg shadow-sm p-3 relative">
                <img src={prod.imagen} alt={prod.nombre} className="w-full h-28 object-cover mb-2 rounded" />
                <p className="text-xs text-gray-500 uppercase font-semibold">{prod.marca}</p>
                <p className="text-sm font-medium leading-tight line-clamp-2 mb-1">{prod.nombre}</p>
                <p className="text-red-600 font-bold text-sm">
                  ${prod.precio.toLocaleString('es-CO')}
                  <span className="text-xs bg-red-500 text-white font-bold ml-1 px-1 py-0.5 rounded">-{prod.descuento}%</span>
                </p>
                <p className="text-xs line-through text-gray-500">${prod.antes.toLocaleString('es-CO')}</p>
                {prod.patrocinado && (
                  <p className="text-[10px] text-gray-400 mt-1">Patrocinado</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => scrollCarousel('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OpcionesSimilares;

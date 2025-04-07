'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const sugerencias = [
  { id: 1, marca: 'HONOR', nombre: 'Celular HONOR Magic 6 Lite 5G', precio: 1569900, antes: 2299900, descuento: 32, estrellas: 4, imagen: 'https://media.falabella.com/falabellaCO/72880391/w=136,h=136,fit=pad' },
  { id: 2, marca: 'OPPO', nombre: 'Celular OPPO Reno12 F 256 GB', precio: 1799900, antes: 2799900, descuento: 36, estrellas: 4, imagen: 'https://media.falabella.com/falabellaCO/73040650/w=136,h=136,fit=pad' },
  { id: 3, marca: 'OPPO', nombre: 'Celular OPPO Reno12 512 GB', precio: 2659900, antes: 3599900, descuento: 26, estrellas: 5, imagen: 'https://media.falabella.com/falabellaCO/73040652/w=136,h=136,fit=pad' },
  { id: 4, marca: 'HONOR', nombre: 'Celular HONOR 200 LITE 5G 256GB', precio: 949900, antes: 1599900, descuento: 41, estrellas: 4, imagen: 'https://media.falabella.com/falabellaCO/73051050/w=136,h=136,fit=pad' },
  { id: 5, marca: 'OPPO', nombre: 'Celular OPPO A80 256GB 5G', precio: 929900, antes: 1099900, descuento: 15, estrellas: 5, imagen: 'https://media.falabella.com/falabellaCO/73059865/w=136,h=136,fit=pad' },
  { id: 6, marca: 'SAMSUNG', nombre: 'Celular Samsung Galaxy S25 Ultra', precio: 6999900, estrellas: 0, imagen: 'https://media.falabella.com/falabellaCO/73208378/w=136,h=136,fit=pad' },
];

const TambienPodriaInteresarte = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-12 bg-white max-w-6xl mx-auto rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">También podría interesarte</h3>
        <span className="text-xs text-gray-400">Patrocinado</span>
      </div>

      <div className="relative">
        <button onClick={() => scrollCarousel('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow">
          <ChevronLeft size={20} />
        </button>

        <div ref={carouselRef} className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
          <div className="flex gap-4">
            {sugerencias.map((prod) => (
              <div key={prod.id} className="min-w-[160px] bg-white border rounded-lg shadow-sm p-3 relative">
                <img src={prod.imagen} alt={prod.nombre} className="w-full h-28 object-cover mb-2 rounded" />
                <p className="text-xs text-gray-500 uppercase font-semibold">{prod.marca}</p>
                <p className="text-sm font-medium leading-tight line-clamp-2 mb-1">{prod.nombre}</p>
                <p className="text-red-600 font-bold text-sm">
                  ${prod.precio.toLocaleString('es-CO')}
                  {prod.descuento && (
                    <span className="text-xs bg-red-500 text-white font-bold ml-1 px-1 py-0.5 rounded">-{prod.descuento}%</span>
                  )}
                </p>
                {prod.antes && (
                  <p className="text-xs line-through text-gray-500">${prod.antes.toLocaleString('es-CO')}</p>
                )}
                {prod.estrellas > 0 && (
                  <p className="text-xs text-yellow-500 mt-1">{'⭐'.repeat(prod.estrellas)} <span className="text-gray-500">({Math.ceil(Math.random() * 4)})</span></p>
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

export default TambienPodriaInteresarte;

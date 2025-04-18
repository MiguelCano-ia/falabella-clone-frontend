'use client';

import Image from 'next/image';

const opciones = [
  {
    titulo: 'Gastronomía',
    descripcion: 'Descuentos en restaurantes, comida rápida y antojos.',
    imagen: 'https://images.ctfassets.net/n8a32dlewwba/64b0CmdMetxl1VkMqafACy/faab9652029d31d8b290a7969d019f91/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CO_112X196__GASTRONOMIA.png?fm=webp',
  },
  {
    titulo: 'Bonos',
    descripcion: 'Compra lo que quieras en vestuario, accesorios, hogar y mucho más',
    imagen: 'https://images.ctfassets.net/n8a32dlewwba/4OZHG7yxYMhP5Tte2hmnKS/a69e1e4851383770475327af94b4e5e1/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CO_112X196__BONOS.png?fm=webp',
  },
  {
    titulo: 'Entretenimiento',
    descripcion: 'Descuentos en cine, suscripciones, servicios y mucho más.',
    imagen: 'https://images.ctfassets.net/n8a32dlewwba/6kwB5br4Gi7aA0BlHjiGvP/5b5dc702a904cd1b078c4cb4ffa43015/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CO_112X196_EXPERIENCIA.png?fm=webp',
  },
  {
    titulo: 'Productos en tienda',
    descripcion: 'Redime en nuestras tiendas Falabella y Homecenter',
    imagen: 'https://images.ctfassets.net/n8a32dlewwba/4HPJcwL7appn4MkVGa0nxM/de3dc22e8d47841770479271cc6bc6a7/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CO_112X196__PRODUCTOS_TIENDA.png?fm=webp',
  },
  {
    titulo: 'Viajes',
    descripcion: 'Redime tus CMR Puntos + Pesos en Viajes Falabella por viajes, hoteles, paquetes y mucho más...',
    imagen: 'http://images.ctfassets.net/n8a32dlewwba/6wrwZyvkBBPbEGM0JoKfBP/690f46523273b5ad1348ffafcbbc3bb2/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CO_112X196__VIAJES.png?fm=webp',
  },
];

export default function RedimirOpciones() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        ¿Qué quieres redimir hoy?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {opciones.map((opcion, index) => (
          <div
            key={index}
            className="flex rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-all bg-white"
          >
            <div className="w-1/5 relative h-32">
              <Image
                src={opcion.imagen}
                alt={opcion.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-3/5 p-4 flex flex-col justify-center">
              <h3 className="text-sm font-bold text-green-800">
                {opcion.titulo}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{opcion.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

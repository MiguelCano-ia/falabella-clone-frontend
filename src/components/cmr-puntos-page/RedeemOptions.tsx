import Image from "next/image";

const opciones = [
  {
    title: "Gastronomía",
    description: "Descuentos en restaurantes, comida rápida y antojos.",
    image: "/images/cmr-page/gastronomia.webp",
  },
  {
    title: "Bonos",
    description:
      "Compra lo que quieras en vestuario, accesorios, hogar y mucho más",
    image: "/images/cmr-page/bonos.webp",
  },
  {
    title: "Entretenimiento",
    description: "Descuentos en cine, suscripciones, servicios y mucho más.",
    image: "/images/cmr-page/experiencia.webp",
  },
  {
    title: "Productos en tienda",
    description: "Redime en nuestras tiendas Falabella y Homecenter",
    image: "/images/cmr-page/tienda.webp",
  },
  {
    title: "Viajes",
    description:
      "Redime tus CMR Puntos + Pesos en Viajes Falabella por viajes, hoteles, paquetes y mucho más...",
    image: "/images/cmr-page/viajes.webp",
  },
];

export const RedeemOptions = () => {
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
            <div className="w-[113px] relative h-[180px]">
              <Image src={opcion.image} alt={opcion.title} fill />
            </div>
            <div className="w-3/5 p-4 flex flex-col justify-center">
              <h3 className="text-sm font-bold text-green-800">
                {opcion.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{opcion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

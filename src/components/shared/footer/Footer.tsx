import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 text-sm py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 flex flex-col items-center">
            <img
              src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt108b0223c9a59d11/65e8bc5875a8f5c9f806013b/Check-rebranding.png?auto=webp&quality=70&width=100p"
              alt="Check Falabella"
              className="w-6 h-6 md:w-8 md:h-8 mb-2"
            />
            <p className="text-lg font-semibold">
              Encuentra todo en <span className="font-bold">falabella.com</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold mb-2">Mejores Categorías</h3>
              <ul className="space-y-0.5 list-disc list-inside text-gray-500">
                {[
                  "Accesorios",
                  "Bicicletas",
                  "Camping",
                  "Celulares",
                  "Colchones",
                  "Computadores",
                  "Electrodomésticos",
                  "Infantil",
                  "Juguetes",
                  "Moda Hombre",
                  "Moda Mujer",
                  "Muebles",
                  "Tecnología",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className=" text-gray-500 underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-gray-600">
                Destacados del Mes
              </h3>{" "}
              <ul className="space-y-0.5 list-disc list-inside text-gray-500">
                {[
                  "Samsung S25",
                  "Computadores Gamer",
                  "Comedor 4 puestos",
                  "Faldas de moda",
                  "Freidoras De Aire Airfryer",
                  "Xiaomi Redmi Note 14",
                  "Muebles De Terraza",
                  "Ps5",
                  "Sofa Cama",
                  "Edredones y Plumones",
                  "Televisores 32 Pulgadas O Más",
                  "Zapatillas Para Hombre",
                  "Zapatillas Para Mujer",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 underline">
                      {item}
                    </Link>{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tendencias</h3>
              <ul className="space-y-0.5 list-disc list-inside text-gray-500">
                {[
                  "Accesorios para bicicletas",
                  "Colchones",
                  "Cuidado personal",
                  "Escritorios en L",
                  "Maquillaje",
                  "Mascotas",
                  "Menaje de cocina",
                  "Ropa deportiva",
                  "Bienestar Sexual",
                  "Vestidos de baño enterizos",
                  "Último en Moda Mujer 2024",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Marcas del Mes</h3>
              <ul className="space-y-0.5 list-disc list-inside text-gray-500">
                {[
                  "Adidas",
                  "Apple",
                  "Samsung",
                  "Basement",
                  "Motorola",
                  "Sybilla",
                  "La Martina",
                  "Nike",
                  "Puma",
                  "Skechers",
                  "Yam",
                  "Gap",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

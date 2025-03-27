import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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

      <div className="bg-slate-800 text-gray-300 text-sm py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Te ayudamos</h3>
              <ul className="space-y-1">
                {[
                  "Venta telefónica",
                  "Centro de ayuda",
                  "Devoluciones y cambios",
                  "Información legal",
                  "Facturas",
                  "Estado de mi pedido",
                  "Canal de integridad",
                  "Cómo cuidamos tus datos",
                  "Peticiones, quejas y reclamos",
                  "https://www.sic.gov.co/",
                  "Propiedad industrial",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Sé parte de Falabella
              </h3>
              <ul className="space-y-1">
                {[
                  "Vende en falabella.com",
                  "Nuestros inversionistas",
                  "Trabaja en grupo Falabella",
                  "Venta Empresa",
                  "Proveedores",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Únete a nuestros programas
              </h3>
              <ul className="space-y-1">
                {[
                  "CMR Puntos",
                  "Novios Falabella",
                  "Club Bebé",
                  "Club Hogar",
                  "Fashion Club",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Nuestras empresas
              </h3>
              <ul className="space-y-1">
                {[
                  "falabella.com",
                  "Falabella",
                  "Linio",
                  "Homecenter",
                  "Banco Falabella",
                  "Seguros Falabella",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-sky-950 text-gray-300 text-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-700">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-700"
              >
                <FaFacebook className="text-white text-xl" />
              </Link>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-700"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
            <div className="flex justify-center space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Términos y condiciones
              </Link>
              <Link href="#" className="hover:text-white">
                Política de cookies
              </Link>
              <Link href="#" className="hover:text-white">
                Política de privacidad
              </Link>
            </div>
          </div>

          <div className=" text-white text-xs mt-5">
            <p>
              © TODOS LOS DERECHOS RESERVADOS <br></br>Falabella.com S.A.S. NIT
              900.499.362-8. Calle 99 #14-49 Piso 9, Bogotá, Colombia.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

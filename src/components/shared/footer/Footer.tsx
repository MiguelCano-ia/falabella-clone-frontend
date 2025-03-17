import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
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
            <h3 className="text-white font-semibold mb-2">Nuestras empresas</h3>
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

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left py-6">
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>

          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Términos y condiciones
            </Link>
            <a href="#" className="hover:text-white">
              Política de cookies
            </a>
            <Link href="#" className="hover:text-white">
              Política de privacidad
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-4">
          © TODOS LOS DERECHOS RESERVADOS - Falabella.com S.A.S. NIT
          900.499.362-8. Calle 99 #14-49 Piso 9, Bogotá, Colombia.
        </div>
      </div>
    </footer>
  );
};

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const FooterProd = () => {
  return (
    <>
      {/* Segunda Sección: Menú de enlaces */}
      <div className="bg-slate-800 text-gray-300 text-sm py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Te ayudamos */}
            <div>
              <h3 className="text-white font-semibold mb-2">Te ayudamos</h3>
              <ul className="space-y-1">
                {[
                  "Venta telefónica", "Centro de ayuda", "Devoluciones y cambios",
                  "Información legal", "Facturas", "Estado de mi pedido",
                  "Canal de integridad", "Cómo cuidamos tus datos",
                  "Peticiones, quejas y reclamos", "https://www.sic.gov.co/",
                  "Propiedad industrial"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sé parte de Falabella */}
            <div>
              <h3 className="text-white font-semibold mb-2">Sé parte de Falabella</h3>
              <ul className="space-y-1">
                {[
                  "Vende en falabella.com", "Nuestros inversionistas",
                  "Trabaja en grupo Falabella", "Venta Empresa", "Proveedores"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Únete a nuestros programas */}
            <div>
              <h3 className="text-white font-semibold mb-2">Únete a nuestros programas</h3>
              <ul className="space-y-1">
                {[
                  "CMR Puntos", "Novios Falabella", "Club Bebé",
                  "Club Hogar", "Fashion Club"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nuestras empresas */}
            <div>
              <h3 className="text-white font-semibold mb-2">Nuestras empresas</h3>
              <ul className="space-y-1">
                {[
                  "falabella.com", "Falabella", "Linio",
                  "Homecenter", "Banco Falabella", "Seguros Falabella"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tercera Sección: Redes sociales y derechos reservados */}
      <footer className="bg-sky-950 text-gray-300 text-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* Redes sociales y políticas */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-700">
            {/* Íconos de Redes Sociales */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-700">
                <FaFacebook className="text-white text-xl" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-700">
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
          {/* Enlaces Legales (Centrados) */}
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Términos y condiciones</a>
            <a href="#" className="hover:text-white">Política de cookies</a>
            <a href="#" className="hover:text-white">Política de privacidad</a>
          </div>
        </div>

          {/* Información Legal */}
          <div className=" text-white text-xs mt-5">
            <p>© TODOS LOS DERECHOS RESERVADOS <br></br>Falabella.com S.A.S. NIT 900.499.362-8. Calle 99 #14-49 Piso 9, Bogotá, Colombia.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

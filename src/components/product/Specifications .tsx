"use client";

import { useState } from "react";

export const Specifications = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div
        className={`transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-full" : "max-h-[400px]"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4">Especificaciones</h3>
            <div className="space-y-2 text-sm text-gray-700">
              {[
                { label: "Velocidad de procesamiento (GHz)", value: "2.5 GHz" },
                { label: "Memoria RAM", value: "8GB" },
                { label: "Núcleos del procesador", value: "Octa core" },
                { label: "Ranura para SIM", value: "DoubleSIM" },
                { label: "Sistema operativo", value: "Android" },
                { label: "Profundidad", value: "0.8 cm" },
                { label: "Tipo de celular", value: "Smartphone" },
                {
                  label: "Procesador específico txt",
                  value: "Mediatek Dimensity 7300x",
                },
                {
                  label: "Resistente al agua",
                  value: "IP68 (Protegido contra inmersión)",
                },
                { label: "Alto", value: "15.41 cm" },
                { label: "Ancho", value: "7.1 cm" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between p-3 rounded ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Información adicional */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4">
              Información adicional
            </h3>
            <p className="text-sm font-bold mb-2">Ficha técnica:</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Capacidad de almacenamiento: 256GB</li>
              <li>Conectividad: 5G</li>
              <li>Marca y modelo del procesador: Mediatek Dimensity 7300x</li>
              <li>Sistema operativo: Android 14</li>
              <li>Memoria RAM: 8GB</li>
              <li>Cámara posterior: 50 MP</li>
              <li>Carga rápida: Sí</li>
              <li>Cámara frontal: 32 MP</li>
              <li>Flash frontal: No</li>
              <li>Núcleos del procesador: Octa core</li>
              <li>Velocidad del procesador: 2.5 GHz</li>
              <li>Memoria expandible: No aplica</li>
              <li>Memoria externa incluida: No</li>
              <li>Características de la pantalla: OLED</li>
              <li>Tamaño de la pantalla: 6.3 pulgadas</li>
              <li>Lector de huella: Sí</li>
              <li>GPS integrado: Sí</li>
              <li>Conexión Bluetooth: Sí</li>
              <li>Resistente al agua: IP68 (Protegido contra inmersión)</li>
            </ul>

            {/* Secciones adicionales actualizadas */}
            <div className="mt-6 text-sm text-gray-700 space-y-4">
              <div>
                <p className="font-semibold">Garantía del proveedor</p>
                <ul className="list-disc pl-5">
                  <li>2 años.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Información adicional</p>
                <ul className="list-disc pl-5">
                  <li>Carga Turbo 68W</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Dual SIM:</p>
                <ul className="list-disc pl-5">
                  <li>1 Física y 1 Virtual.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Información Adicional</p>
                <ul className="list-disc pl-5">
                  <li>
                    La memoria interna y la RAM disponibles para el usuario
                    dependen del sistema operativo y las aplicaciones
                    precargadas.
                  </li>
                </ul>
              </div>

              <div>
                <img
                  src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/inpage_media/celulares_5g/w=699,h=353"
                  alt="Redes móviles"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón */}
      <div className="text-center mt-6">
        <button
          className="text-sm text-white bg-gray-700 px-6 py-2 rounded-full hover:bg-gray-800"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";
import type { ReactNode } from "react";

interface Props {
  specifications: Record<string, unknown>;
}

/* 2️⃣  Renderizador recursivo */
const renderValue = (
  value: unknown,
  path: (string | number)[] = []
): ReactNode => {
  if (
    value === null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value === null ? <em>–</em> : value.toString();
  }

  if (Array.isArray(value)) {
    return (
      <ul className="list-disc pl-4">
        {value.map((v, i) => (
          <li key={[...path, i].join(".")}>{renderValue(v, [...path, i])}</li>
        ))}
      </ul>
    );
  }

  if (typeof value === "object") {
    return (
      <div className="pl-4 border-l border-gray-300 space-y-1">
        {Object.entries(value as Record<string, unknown>).map(([k, v]) => (
          <div key={[...path, k].join(".")} className="flex justify-between">
            <span className="font-medium">
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </span>
            <span className="text-right w-[250px]">
              {renderValue(v, [...path, k])}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return JSON.stringify(value);
};

export const Specifications = ({ specifications }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto">
      <div
        className={`transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-full" : "max-h-[400px]"
        }`}
      >
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4">Especificaciones</h3>
          <div className="space-y-2 text-sm text-gray-700">
            {Object.entries(specifications).map(([k, v], idx) => (
              <div
                key={k}
                className={`flex items-start justify-between p-3 rounded ${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <span className="font-medium">
                  {k.charAt(0).toUpperCase() + k.slice(1)}
                </span>
                <span className="text-right w-[250px]">
                  {renderValue(v, [k])}
                </span>
              </div>
            ))}
          </div>

          {/* Puedes mantener aquí tu “Información adicional” o lo que necesites */}
        </div>
      </div>

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

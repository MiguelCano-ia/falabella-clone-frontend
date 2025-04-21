"use client";

import { ThumbsUp, ThumbsDown, Star } from "lucide-react";

const comentarios = [
  {
    titulo: "Excelente calidad",
    autor: "María",
    fecha: "hace 2 meses",
    estrellas: 5,
    texto: "Muy buena cámara y buena capacidad",
  },
  {
    titulo: "Hermoso teléfono",
    autor: "Felipe",
    fecha: "hace 2 meses",
    estrellas: 5,
    texto: "Compacto, excelentes cámaras y un buen precio",
  },
  {
    titulo: "Anónimo",
    autor: "Anónimo",
    fecha: "hace 2 meses",
    estrellas: 5,
    texto: "Teléfono con muy buenas características.",
  },
  {
    titulo: "Muy buen dispositivo",
    autor: "Luis",
    fecha: "hace 2 meses",
    estrellas: 4,
    texto: "Rápido, liviano, buenas imágenes. Pero se calienta fácil.",
  },
];

export const StarRating = ({ value }: { value: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < value ? "text-yellow-500 fill-yellow-500" : "text-yellow-500"
          }
        />
      ))}
    </div>
  );
};

export const ProductFeedback = () => {
  return (
    <div className="mt-12 bg-white max-w-6xl mx-auto rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">
        Comentarios de este producto
      </h3>

      <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
        {/* Calificación promedio y barras */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <p className="text-4xl font-bold">
            4.9<span className="text-gray-600 text-lg"> / 5</span>
          </p>
          <StarRating value={5} />
          <p className="text-sm text-gray-500">7 comentarios</p>

          {[5, 4, 3, 2, 1].map((star) => (
            <div
              key={star}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span>{star}★</span>
              <div className="flex-1 bg-gray-200 h-1 rounded overflow-hidden">
                <div
                  className={`bg-gray-600 h-full ${
                    star === 5 ? "w-[90%]" : star === 4 ? "w-[15%]" : "w-[0%]"
                  }`}
                />
              </div>
              <span className="w-6 text-end">
                {star === 5 ? "6" : star === 4 ? "1" : "0"}
              </span>
            </div>
          ))}
        </div>

        {/* Califica este producto */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
          <div className="border border-yellow-400 rounded-lg px-4 py-2">
            <p className="text-sm mb-1">Califica este producto:</p>
            <StarRating value={0} />
          </div>
          <div className="mt-2 bg-green-100 text-green-800 px-4 py-1 rounded text-xs font-semibold">
            86% de los clientes recomiendan este producto.
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comentarios.map((comentario, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm bg-gray-50"
          >
            <div className="flex justify-between items-start mb-1">
              <div>
                <p className="font-semibold">{comentario.titulo}</p>
                <p className="text-xs text-gray-500">por {comentario.autor}</p>
              </div>
              <StarRating value={comentario.estrellas} />
            </div>
            <p className="text-sm text-gray-700 mb-2">{comentario.texto}</p>
            <div className="flex gap-4 text-gray-500 text-xs">
              <button
                type="button"
                aria-label="Me gusta"
                className="flex items-center gap-1 hover:text-gray-700"
              >
                <ThumbsUp size={16} />
              </button>
              <button
                type="button"
                aria-label="No me gusta"
                className="flex items-center gap-1 hover:text-gray-700"
              >
                <ThumbsDown size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

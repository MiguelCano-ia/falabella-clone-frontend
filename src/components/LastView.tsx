"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LastView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let lastViewed = JSON.parse(localStorage.getItem("lastViewed")) || [];

    setProducts(lastViewed);
  }, []);

  if (!products.length) return <p className="text-center">No hay productos vistos recientemente.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tus últimos vistos</h2>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/falabella-co/${product.id}`}>
            <div className="border p-2 rounded-lg shadow hover:shadow-xl transition cursor-pointer relative">
              <img src={product.image} className="w-full h-40 object-cover" />
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded absolute bottom-2 left-2">
                -{product.discount}%
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastView;

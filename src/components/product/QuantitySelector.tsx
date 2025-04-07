"use client";

import { useState } from "react";

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        onClick={decrementQuantity}
        className="bg-gray-300 text-gray-700 px-3 py-2 rounded disabled:opacity-50"
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        onClick={incrementQuantity}
        className="bg-gray-300 text-gray-700 px-3 py-2 rounded"
      >
        +
      </button>
    </div>
  );
};

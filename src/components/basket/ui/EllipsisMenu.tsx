"use client";

import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";

interface Props {
  onDelete(): void;
}

export function EllipsisMenu({ onDelete }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="relative" ref={ref}>
      <button
        title="Más opciones"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((o) => !o);
        }}
        className="p-1 text-gray-500 rounded-full"
      >
        <EllipsisVertical size={20} />
      </button>

      {isOpen && (
        <div className="absolute top-8 right-0 min-w-[224px] bg-white shadow-sm border rounded-[5px] mt-4">
          <button
            title="Eliminar"
            className="w-full text-start px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              onDelete();
              setIsOpen(false);
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";

export const SuccessMessage = ({ visible }: { visible: boolean }) => {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!show) return null;

  return (
    <div className="pl-4 pr-8 mb-3 bg-[#c7eebb] rounded-[5px] py-2">
      <div className="flex items-center justify-start pr-2 max-w-[1280px] w-full">
        <CircleCheck size={24} className="text-green-500 mr-4" />
        <h1 className="text-[18px] text-[#000] font-normal">
          Cambios guardados con éxito
        </h1>
      </div>
    </div>
  );
};

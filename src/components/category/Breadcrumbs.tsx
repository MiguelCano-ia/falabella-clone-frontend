import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const Breadcrumbs = () => {
  return (
    <div className="flex items-center min-h-[32px] max-w-[1280px] w-full pl-8 pr-[19px]">
      <ArrowLeft size={16} className="mr-2 cursor-pointer text-[#000]" />
      <ol className="flex flex-wrap font-bold text-[11px]">
        <li>
          <Link
            href="/falabella-co"
            className="px-[3px] text-[#717171] underline underline-offset-2"
          >
            Home
          </Link>
          <span className="px-[3px] text-[#717171]">{">"}</span>
        </li>
        <li>
          <Link
            href="#"
            className="px-[3px] text-[#717171] underline underline-offset-2"
          >
            Moda y accesorios - Mujer
          </Link>
          <span className="px-[3px] text-[#717171]">{">"}</span>
        </li>
        <li>
          <Link
            href="#"
            className="px-[3px] text-[#717171] underline underline-offset-2"
          >
            Ropa Mujer
          </Link>
          <span className="px-[3px] text-[#717171]">{">"}</span>
        </li>
        <li>
          <Link
            href="#"
            className="px-[3px] text-[#717171] underline underline-offset-2"
          >
            Abrigos y Chaquetas Mujer
          </Link>
        </li>
      </ol>
    </div>
  );
};

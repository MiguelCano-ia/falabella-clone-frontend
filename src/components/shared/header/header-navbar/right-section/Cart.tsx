import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export const Cart = () => {
  return (
    <Link
      href="/falabella-co/basket"
      className="flex items-center justify-center relative mr-4"
    >
      <div className="pl-4 xl:min-w-[106px] mr-4">
        <ShoppingCartIcon
          size={30}
          className="hover:text-[#6d7985] hover:transition-colors"
        />
      </div>
      <span className="absolute w-[22px] h-[22px] right-[8%] xl:right-[50%] bg-icon-background text-white flex items-center justify-center rounded-full text-xs font-bold top-[-9px]">
        0
      </span>
    </Link>
  );
};

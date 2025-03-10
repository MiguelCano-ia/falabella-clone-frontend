import { ShoppingCartIcon } from "lucide-react";

export const Cart = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="pl-4 xl:min-w-[106px] mr-4">
        <ShoppingCartIcon size={30} />
      </div>
      <span className="absolute w-[22px] h-[22px] right-[8%] xl:right-[50%] bg-icon-background text-white flex items-center justify-center rounded-full text-xs font-bold top-[-9px]">
        0
      </span>
    </div>
  );
};

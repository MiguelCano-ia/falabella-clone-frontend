import { ChevronDown } from "lucide-react";

export const HeaderLogin = () => {
  return (
    <div className="flex flex-col justify-center h-[47px] pr-2 border-r-[1px] border-primary max-lg:border-0 max-lg:pr-0 max-sm:w-12 max-sm:text-right max-sm:mb-2">
      <p className="font-bold text-[19px] text-icon-background h-[17px] max-lg:hidden">
        Hola,
      </p>
      <div className="flex">
        <p className="font-black text-[19px] text-icon-background mt-1 max-lg:text-[14px] max-lg:underline  max-lg:underline-offset-1">
          Inicia sesión
        </p>
        <ChevronDown width={18} className="mt-1 max-lg:hidden" />
      </div>
    </div>
  );
};

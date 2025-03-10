import Image from "next/image";
import Link from "next/link";

export const MobileUserMenu = () => {
  return (
    <div className="relative pt-4 pb-5">
      <div className="py-4">
        <Link
          href="#"
          className="relative flex items-center justify-between py-3 pl-4 pr-[12.45px] cursor-pointer text-primary"
        >
          <div className="flex items-center text-[16px] leading-[19.2px] text-inherit ">
            <div className="flex justify-center items-center w-8 h-8 mr-2">
              <Image
                src="icons/mobile/sidebar/mis-compras.svg"
                width={32}
                height={32}
                alt=""
              />
            </div>
            Mis compras
          </div>
        </Link>
      </div>
      <div className="absolute w-[224px] sm:w-[268px] bottom-0 left-1/2 h-[3px] -translate-x-[50%] bg-[#e9e9e9]"></div>
    </div>
  );
};

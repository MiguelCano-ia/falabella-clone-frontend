import { HeaderLinks } from "./HeaderLinks";
import { Navbar } from "./header-navbar/Navbar";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const headerLinks = [
  {
    href: "/falabella-co",
    srcDesktop: "/icons/desktop/falabella-icon.svg",
    widthDesktop: 95,
    heightDesktop: 14,
    srcMobile: "/icons/mobile/falabella-icon.svg",
    widthMobile: 25,
    heightMobile: 24,
  },
  {
    href: "https://homecenter.falabella.com.co/homecenter-co",
    srcDesktop: "/icons/desktop/homecenter-icon.svg",
    widthDesktop: 117,
    heightDesktop: 10,
    srcMobile: "/icons/mobile/homecenter-icon.svg",
    widthMobile: 25,
    heightMobile: 24,
  },
  {
    href: "https://linio.falabella.com.co/linio-co",
    srcDesktop: "/icons/desktop/linio-icon.svg",
    widthDesktop: 48,
    heightDesktop: 32,
    srcMobile: "/icons/mobile/linio-icon.svg",
    widthMobile: 25,
    heightMobile: 24,
  },
];

export const Header = () => {
  return (
    <header className="">
      <div className="flex cursor-pointer border-[1px]">
        {headerLinks.map((header) => (
          <HeaderLinks key={header.href} {...header} />
        ))}
      </div>

      <Navbar />

      <div className="flex flex-row-reverse items-center justify-start h-[50px]">
        <div className="flex text-[14px] leading-[17px] text-primary items-center cursor cursor-pointer mr-2  xl:mr-16">
          <Link href="#" className="ml-6 max-sm:w-[90px]">
            Vende en falabella.com
          </Link>
          <Link href="#" className="ml-8 ">
            Novios
          </Link>
          <div className="relative flex justify-center items-center cursor-pointer ml-6">
            <div>Ayuda</div>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

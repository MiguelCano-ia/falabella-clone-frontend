import { HeaderLinks } from "./HeaderLinks";
import { Navbar } from "./header-navbar/Navbar";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import LocationModal from "./header-navbar/right-section/location/LocationModal";
import { DepartmentAndCities } from "@/interfaces/location/location";

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

export const getDepartmentsAndCities = async (): Promise<
  DepartmentAndCities[] | undefined
> => {
  try {
    const res = fetch(
      "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json"
    );
    return (await res).json();
  } catch (error) {
    console.log(error);
  }
};

export const Header = async () => {
  const departmentsAndCities = await getDepartmentsAndCities();

  return (
    <header className="">
      <div className="flex cursor-pointer border-[1px]">
        {headerLinks.map((header) => (
          <HeaderLinks key={header.href} {...header} />
        ))}
      </div>

      <Navbar />

      <div className="flex items-center justify-between h-[50px] border-b-[0.5px]">
        <LocationModal departmentsAndCities={departmentsAndCities} />
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

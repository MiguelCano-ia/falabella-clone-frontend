"use client";

import { usePathname } from "next/navigation";
import {
  Banknote,
  ChevronRight,
  CircleUser,
  HandCoins,
  Heart,
  LockKeyhole,
  MapPinHouse,
  Power,
} from "lucide-react";
import { logout } from "@/actions/auth/logout";
import Link from "next/link";
import Image from "next/image";

const USER_MENU = [
  {
    href: "userpersonalinformation",
    icon: <CircleUser size={20} />,
    text: "Datos personales",
  },
  {
    href: "myaddresses",
    icon: <MapPinHouse size={20} />,
    text: "Direcciones",
  },
  {
    href: "mypayments",
    icon: <Banknote size={20} />,
    text: "Medio de pago",
  },
  {
    href: "reimbursements",
    icon: <HandCoins size={20} />,
    text: "Datos para reembolso",
  },
  {
    href: "mylists",
    icon: <Heart size={20} />,
    text: "Mis listas",
  },
  {
    href: "changepassword",
    icon: <LockKeyhole size={20} />,
    text: "Configurar mi cuenta",
  },
  {
    href: "payyourcmr",
    text: "Paga mi CMR",
  },
];

export const ProfileSettings = () => {
  const pathname = usePathname();
  const userOption = pathname.split("/").pop();

  return (
    <div className="flex flex-col bg-[#FEFEFF] min-w-[298px] h-fit shadow-sm rounded-[10px]">
      {USER_MENU.map(({ href, icon, text }) => {
        const isActive = userOption === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex text-[14px] w-full py-4 pl-5 pr-6 items-center gap-3 border-b-[0.3px] border-[#CCC] hover:text-[#6A7682] transition-colors
              ${
                isActive
                  ? "bg-[#f6f6f8] text-[#343E49] font-bold hover:text-[#343E49]"
                  : "text-[#343E49]"
              }`}
          >
            {href === "payyourcmr" ? (
              <Image
                src="/icons/user-information/cmr.svg"
                width={24}
                height={24}
                alt="cmr"
                className="hover:text-[#ccc]"
              />
            ) : (
              icon
            )}
            <span
              className={`mr-auto hover:text-[#6A7682] transition-colors ${
                isActive ? "font-bold hover:text-[#343E49]" : ""
              }`}
            >
              {text}
            </span>
            <ChevronRight size={20} />
          </Link>
        );
      })}
      <div
        className="flex text-[14px] w-full py-4 pl-5 pr-6 items-center gap-3 text-[#343E49] border-b-[0.3px] border-[#CCC] hover:text-[#6A7682] transition-colors cursor-pointer"
        onClick={logout}
      >
        <Power size={20} />
        <span className="mr-auto hover:text-[#6A7682] transition-colors">
          Cerrar sesión
        </span>
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

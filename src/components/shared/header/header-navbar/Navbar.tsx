import Link from "next/link";
import {
  Cart,
  Favorites,
  HeaderLogin,
  Menubar,
  Purchases,
  Searchbar,
} from "./";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="w-screen bg-header-background border-b-[1px] flex items-center max-lg:flex-wrap max-lg:border-0">
      <div className="flex pl-6 xl:pl-12 xl:pr-4 max-lg:order-2 max-lg:pl-0">
        <Link href="/falabella-co">
          <Image
            src="/icons/falabella-icon-header.svg"
            width={187}
            height={28}
            alt="falabella"
            className="max-sm:w-[134px] max-sm:h-[20px]"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center xl:p-4 max-lg:order-1">
        <Menubar />
      </div>
      <div className="flex items-center relative mr-2 xl:mr-6 max-lg:order-4 max-lg:w-screen lg:flex-1 max-lg:px-2 max-lg:pb-3">
        <Searchbar />
      </div>
      <div className="flex items-center justify-center max-lg:order-3 max-lg:justify-end max-lg:ml-auto">
        <HeaderLogin />
        <Purchases />
        <Favorites />
        <Cart />
      </div>
    </div>
  );
};

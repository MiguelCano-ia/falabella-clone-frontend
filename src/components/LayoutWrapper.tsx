"use client";

import { usePathname } from "next/navigation";

import { Footer } from "./shared/footer/Footer";
import { FooterProd } from "./shared/footer/FooterPageProduct";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isProductPage = pathname.endsWith("/falabella-co");

  return (
    <>
      {children}
      {isProductPage ? <Footer /> : <FooterProd />}
    </>
  );
};

export default LayoutWrapper;

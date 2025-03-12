"use client";

import { usePathname } from "next/navigation";
import { Carousel } from "@/components/Carousel";
import LastViewed from "@/components/LastView";
import { Footer } from "@/components/FooterMain";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/falabella-co/");

  return (
    <>
      {!isProductPage && <Carousel />}
      {!isProductPage && <LastViewed />}
      {children}
      {!isProductPage && <Footer />}
    </>
  );
};

export default LayoutWrapper;

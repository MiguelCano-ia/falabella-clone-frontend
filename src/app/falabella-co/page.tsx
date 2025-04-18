import { Carousel } from "@/components/home/Carousel";
import LastViewed from "@/components/home/LastViewed";
import LimitedTimeOffers from "@/components/home/LimitedTimeOffers";
import InspiredByViewed from "@/components/home/InspiredByViewed";
import LatestReleases from "@/components/home/LatestReleases";
import BestSellers from "@/components/home/BestSellers";
import PromotionalBanners from "@/components/home/PromotionalBanners";
import RecommendedForYou from "@/components/home/RecommendedForYou";
import InformationSection from "@/components/home/InformationSection";
import { Footer } from "@/components/shared/footer/Footer";

export default function Page() {
  return (
    <>
      <Carousel />

      <div className="container mx-auto px-4">
        {/* Otras secciones */}
        <LastViewed />

        {/* Sección de ofertas por tiempo limitado */}
        <LimitedTimeOffers />

        {/* Sección de "Inspirado en lo que viste" */}
        <InspiredByViewed />

        {/* Sección de "Lo Último Primero en Falabella" */}
        <LatestReleases />

        {/* Sección de "Los Más Vendidos" */}
        <BestSellers />

        {/* Sección de Banners Promocionales */}
        <PromotionalBanners />

        {/* Sección de "Elegidos para ti" */}
        <RecommendedForYou />

        {/* Sección de Información */}
        <InformationSection />

        
      </div>
      <Footer/>
    </>
  );
}

import CMRCarousel from "@/components/cmr puntos-page/CMRCarrusel";
import CMRHeader from "@/components/cmr puntos-page/CMRHeader";
import RedimirOpciones from "@/components/cmr puntos-page/RedimirOpciones";
import CarruselBonos from "@/components/cmr puntos-page/AntojosBonos";
import AprendeCMRPuntos from "@/components/cmr puntos-page/AprendeCMR";

export default function Page() {
  return (
    <div className="bg-[#f7f9fb]">
      
      <div className="max-w-[1200px] mx-auto px-4">
        <CMRHeader />
        <CMRCarousel />
        <RedimirOpciones />
        <CarruselBonos />
        <AprendeCMRPuntos />
      </div>
    </div>
  );
}

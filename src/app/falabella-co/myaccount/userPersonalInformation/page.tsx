import { ChevronRight, CircleUser, MapPinHouse } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-[#F1F1F1]">
      <section className="bg-[#FEFEFF] w-full">
        <header className="container m-auto flex flex-col items-center justify-start w-full max-w-[1272px] mx-auto">
          <div className="flex justify-between w-full mt-[64px]">
            <h1 className="text-[#343E49] text-[32px] leading-[36px] font-normal">
              Hola, Miguel Angel
            </h1>
            <Link
              href="#"
              className="text-[#333] p-2 h-[72px] rounded-[10px] bg-[#F9F9F9] max-w-[343px] shadow-sm"
            >
              Aun no tienes cmr puntos
            </Link>
          </div>
          <nav className="w-full max-w-[343px] h-[94px] px-2 border-[1px] border-[#F9F9F9] shadow-sm bg-[#FEFEFF]"></nav>
        </header>
      </section>
      <section className="container m-auto max-w-[1272px] mt-10 mb-[40px]">
        <div className="flex gap-8">
          <div className="flex flex-col bg-[#FEFEFF] min-w-[298px] h-fit shadow-sm rounded-[10px]">
            <Link
              href="#"
              className="flex text-[14px] w-full py-4 pl-5 pr-6 items-center gap-3 text-[#343E49] border-b-[0.3px] border-[#CCC]"
            >
              <CircleUser size={24} />
              <span className="mr-auto">Datos personales</span>
              <ChevronRight size={16} />
            </Link>
            <Link
              href="#"
              className="flex text-[14px] w-full py-4 pl-5 pr-6 items-center gap-3 text-[#343E49] border-b-[0.3px] border-[#CCC]"
            >
              <MapPinHouse size={24} />
              <span className="mr-auto">Direcciones</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}

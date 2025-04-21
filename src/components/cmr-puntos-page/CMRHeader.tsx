import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const CMRHeader = () => {
  return (
    <header className="bg-[#f7f9fb] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Izquierda: Logo y Menú */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="https://www.cmrpuntos.com.co/static/media/logo.9c098baf.svg"
              alt="CMR Puntos"
              width={60}
              height={60}
            />
          </Link>

          <nav className="flex items-center gap-4 text-sm text-gray-800 font-medium relative">
            {/* Contenedor con group para hover */}
            <div className="relative group">
              <button className="flex items-center gap-1">
                Redime tus CMR Puntos <ChevronDown size={14} />
              </button>

              {/* Menú desplegable */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-md py-2 z-10 hidden group-hover:block">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Experiencias
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Bonos
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Redime en Tienda
                </Link>
              </div>
            </div>

            <span className="text-gray-300">|</span>
            <Link href="#">Cómo acumular</Link>
            <span className="text-gray-300">|</span>
            <Link href="#">Centro de ayuda</Link>
          </nav>
        </div>

        {/* Derecha: Botones */}
        <div className="flex items-center gap-2">
          <button className="bg-[#f0f3f6] hover:bg-[#e3e7eb] text-sm text-lime-600 px-4 py-2 rounded-full">
            Inscríbete
          </button>
          <button className="bg-[#3d9400] hover:bg-[#348300] text-white text-sm px-4 py-2 rounded-full">
            Mi cuenta
          </button>
        </div>
      </div>
    </header>
  );
};

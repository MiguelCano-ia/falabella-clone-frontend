import "../globals.css"; // Importa los estilos globales correctamente
import { FooterProd } from "@/components/FooterPagProduct"; // Footer exclusivo para productos

export default function ProductTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto p-8">{children}</main>
      <FooterProd /> {/* Footer exclusivo de la página de productos */}
    </div>
  );
}

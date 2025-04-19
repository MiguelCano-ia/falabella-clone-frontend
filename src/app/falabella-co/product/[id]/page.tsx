import { QuantitySelector } from "@/components/product/QuantitySelector";
import { Products } from "@/interfaces/categories/product";
import { formatCOP } from "@/lib/formatCop";
import { Ban, BookX, Clock3, MessageCircleHeart, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EspecificacionesExpandibles from "@/components/product/EspecificacionesExpandibles";
import ProductFeedback from "@/components/product/ProductFeedback";
import CarouselRecomendados from "@/components/product/CarousselOtrosProductos";
import OpcionesSimilares from "@/components/product/SimilarOptions";
import TambienPodriaInteresarte from "@/components/product/TambienPodriaInteresarte";

export const getProduct = async (id: number): Promise<Products> => {
  const response = await fetch(`http://localhost:4000/product/${id}`).then(
    (res) => res.json()
  );
  return response;
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="w-full min-h-screen bg-gray-100 py-12">
      <div className="bg-white max-w-7xl mx-auto rounded-lg shadow-lg p-6">
        <nav className="text-sm text-gray-500 flex items-center gap-2 mb-4">
          <Link href="/falabella-co" className="hover:underline text-gray-500">
            Home
          </Link>
          <span>/</span>
          <Link href="#" className="hover:underline text-gray-500">
            {product.subcategory_slug}
          </Link>
        </nav>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Image
              src={`http://localhost:4000/images/${product.images[0]}`}
              alt={product?.brand || ""}
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="flex gap-2 mt-4">
              {product?.images.map((image, index) => (
                <Image
                  key={image}
                  src={`http://localhost:4000/images/${
                    product.images[index + 1]
                  }`}
                  width={80}
                  height={80}
                  alt="Miniatura"
                  className="w-16 h-16 border rounded cursor-pointer hover:border-gray-700"
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold text-gray-500">
              {product?.brand || "MT HELMETS"}
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-500">⭐ ⭐ ⭐ ⭐ ⭐</span>
              <Link href="#" className="text-gray-500 text-sm hover:underline">
                (5) Calificar
              </Link>
            </div>

            <p className="text-gray-500 mt-2">
              Vendido por{" "}
              <span className="text-gray-500 font-semibold">
                {product?.sold_by}
              </span>
            </p>

            <div className="flex flex-col md:flex-row gap-8 mt-6">
              <div className="border border-green-500 p-4 rounded-lg w-full md:w-1/2">
                <p className="text-gray-700 font-semibold mb-3">
                  Entrega en Dosquebradas
                </p>

                <div className="flex justify-between gap-4">
                  <div className="flex flex-col items-center w-1/2">
                    <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                      <Truck size={10} className="text-green-600 text-lg" />
                    </div>
                    <p className="text-gray-500 font-semibold text-sm mt-2">
                      Envío a domicilio
                    </p>
                  </div>

                  <div className="flex flex-col items-center w-1/2">
                    <div className="bg-gray-200 text-gray-500 w-10 h-10 flex items-center justify-center rounded-full">
                      <Ban size={10} className="text-gray-500 text-lg" />
                    </div>
                    <p className="text-gray-500 text-sm mt-2 text-center">
                      No disponible para retiro en Dosquebradas
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-1 mb-1">
                  <Image
                    src="/images/category/specialdiscount.png"
                    width={60}
                    height={60}
                    alt="cmr-points"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-red-600">
                    {formatCOP(product.special_price!)}
                  </p>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-sm text-xs font-bold">
                    -{product?.special_discount_percentage}%
                  </span>
                </div>

                <p className="text-xl font-semibold">
                  {formatCOP(product?.discount_price)}
                </p>

                <p className="text-gray-500 text-lg line-through">
                  {formatCOP(product?.price)}
                </p>

                <div className="mt-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-semibold">
                    Envío gratis
                  </span>
                </div>
                <QuantitySelector />
                <div className="mt-6 flex flex-col gap-4">
                  <button className="w-full bg-gray-700 text-white text-lg py-3 rounded-full hover:bg-gray-800 transition">
                    Agregar al Carro
                  </button>
                </div>
                <div className="border border-black p-2 rounded-lg flex items-center gap-2 mt-6">
                  <Image
                    src="/icons/products/cmr-falabella.svg"
                    width={34}
                    height={22}
                    alt="CMR Falabella"
                  />

                  <div className="text-sm">
                    <p className="text-gray-900 font-semibold">
                      <strong>
                        AHORRA <span className="text-red-600">$5.500</span>{" "}
                        USANDO TU CMR
                      </strong>
                    </p>
                    <p className="text-gray-700">
                      Ábrela y obtén $45.000 de descuento extra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-gray-700 text-sm flex flex-col gap-1 mt-2">
              <p>Producto de uso personal.</p>
              <a href="#" className="text-gray-600 hover:underline">
                Ver políticas de devoluciones
              </a>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg flex flex-col gap-3 mt-3">
              <p className="text-gray-700">
                Vendido por{" "}
                <a
                  href="#"
                  className="text-black font-semibold hover:underline"
                >
                  {product?.sold_by}
                </a>
              </p>

              <div className="flex justify-center gap-1 text-yellow-500 text-lg">
                ⭐ ⭐ ⭐ ☆ ☆
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex flex-col items-center">
                  <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                    <Clock3 size={10} className="text-gray-600 text-lg" />
                  </div>
                  <p className="text-gray-700 text-xs text-center">
                    Pocas entregas con demora
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                    <BookX size={10} className="text-gray-600 text-lg" />
                  </div>
                  <p className="text-gray-700 text-xs text-center">
                    Pocos pedidos cancelados
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                    <MessageCircleHeart
                      size={10}
                      className="text-gray-600 text-lg"
                    />
                  </div>
                  <p className="text-gray-700 text-xs text-center">
                    Ofrece un buen servicio
                  </p>
                </div>
              </div>

              <Link
                href="#"
                className="text-gray-600 font-semibold text-center hover:underline"
              >
                Ver todos los productos de este vendedor
              </Link>
            </div>
          </div>
        </div>
      </div>
      <EspecificacionesExpandibles />
      <CarouselRecomendados />
      <OpcionesSimilares />
      <TambienPodriaInteresarte />
      <ProductFeedback />
    </div>
  );
}

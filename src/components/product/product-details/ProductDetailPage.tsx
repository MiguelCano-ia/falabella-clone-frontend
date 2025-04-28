import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/category/Breadcrumbs";
import { formatCOP } from "@/lib/formatCop";
import { ImageGallery } from "./ImageGallery";
import { Products } from "@/interfaces/categories/product";
import { QuantitySelector } from "./QuantitySelector";
import { SellBy } from "./SellBy";
import { Shipment } from "./Shipment";

interface Props {
  product: Products;
  cart: Record<string, number>;
}

export const ProductDetailPage = ({ product, cart }: Props) => {
  return (
    <div className="bg-white max-w-7xl mx-auto rounded-lg shadow-lg pl-2 pr-12 pt-1 pb-6">
      <Breadcrumbs slugs={[product.section_slug, product.subcategory_slug]} />

      <div className="flex flex-col md:flex-row gap-12">
        <ImageGallery product={product} />

        <div className="w-full md:w-1/2">
          <p className="text-[13px] font-semibold text-[#333]">
            {product?.brand}
          </p>

          <p className="text-[20px] leading-normal text-[#333] font-light line-clamp-3">
            {product.title}
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
            <Shipment />

            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-start">
                {product.special_price && (
                  <>
                    <Image
                      src="/images/category/specialdiscount.png"
                      alt="cmr"
                      width={61}
                      height={20}
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-[18px] text-[#E4022D]">
                        {formatCOP(product.special_price!)}
                      </span>
                      <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px] ">
                        -{product.special_discount_percentage}%
                      </span>
                    </div>
                  </>
                )}
                <div className="flex items-center gap-2">
                  {product.discount_price && (
                    <p className="text-[18px] text-[#717171]">
                      {formatCOP(product.discount_price)}
                    </p>
                  )}
                  {!product.special_price && product.discount_percentage && (
                    <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px] ">
                      -{product.discount_percentage}%
                    </span>
                  )}
                </div>
                <p
                  className={`text-[14px] text-[#717171] ${
                    product.special_price || product.discount_price
                      ? "line-through"
                      : "text-[18px] text-start mr-16"
                  }`}
                >
                  {formatCOP(product.price)}
                </p>
              </div>

              {+product.discount_price > 150000 ||
                (+product.special_price! > 150000 && (
                  <div className="mt-2">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-semibold">
                      Envío gratis
                    </span>
                  </div>
                ))}

              <QuantitySelector product={product} cart={cart} />

              <div className="border border-black p-2 rounded-lg flex items-center gap-2 mt-6">
                <Image
                  src="/icons/products/cmr-falabella.svg"
                  width={34}
                  height={22}
                  alt="CMR Falabella"
                />

                <div className="flex flex-col justify-center items-center">
                  <span className="text-[12px] text-[#333] font-bold">
                    ¿AÚN NO TIENES TU CMR?
                  </span>
                  <p className="text-[#333] text-[11px]">
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

          {product.sold_by !== "Falabella" && [
              product.sold_by !== "Homecenter",
            ] && <SellBy product={product} />}
        </div>
      </div>
    </div>
  );
};

import { Products } from "@/interfaces/categories/product";
import { Checkbox } from "../../ui/checkbox";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { formatCOP } from "@/lib/formatCop";
import { useRouter } from "next/navigation";
import { useSelectionStore } from "@/store/basket/selection.store";
import {
  addToCart,
  deleteFromCart,
  updateCartQty,
} from "@/actions/basket/cart";
import { EllipsisMenu } from "../ui/EllipsisMenu";

interface Props {
  products: Products[];
  seller: string;
}

export const ProductsList = ({ products, seller }: Props) => {
  const router = useRouter();

  const rawSelMap = useSelectionStore((state) => state.selections[seller]);
  const selMap = rawSelMap ?? {};
  const toggleProduct = useSelectionStore((state) => state.toggleProduct);
  const removeProduct = useSelectionStore((state) => state.removeProduct);

  const onAddToCart = (id: string) => {
    addToCart(id);
    router.refresh();
  };

  const onRemoveFromCart = (id: number, quantity: number, seller?: string) => {
    updateCartQty(id, quantity);
    if (quantity === 0) {
      removeProduct(seller!, id.toString());
    }
    router.refresh();
  };

  return (
    <div className="divide-y">
      {products.map((product) => {
        const id = product.id_product.toString();
        const isChecked = selMap[id] || false;

        return (
          <div key={product.id_product} className="flex items-center pl-4 py-4">
            <Checkbox
              id={`item-${product.id_product}`}
              className="mr-4"
              checked={isChecked}
              onCheckedChange={() =>
                toggleProduct(seller, product.id_product.toString())
              }
            />

            <div className="w-[100px] h-[100px] relative flex-shrink-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/${product.images[0]}`}
                alt={product.title}
                width={100}
                height={100}
              />
            </div>

            <Link
              href={`/falabella-co/product/${product.id_product}`}
              className="ml-4 w-[300px]"
            >
              <p className="font-semibold text-[16px] text-[#333] line-clamp-3">
                {product.title}
              </p>
              <p className="text-[12px] text-[#333] mt-2">{product.brand}</p>
            </Link>

            <div className="flex flex-1 flex-col items-center justify-center text-center mr-10 mb-14">
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
            </div>

            <div className="relative flex flex-col items-end gap-2">
              <div
                title="Más opciones"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700 text-right mr-3 hover:rounded-full mb-4"
              >
                <EllipsisMenu
                  onDelete={() => {
                    deleteFromCart(product.id_product.toString());
                    removeProduct(seller!, id.toString());
                    router.refresh();
                  }}
                />
              </div>
              <div className="flex items-center mx-4">
                <button
                  aria-label="disminuir"
                  className={`flex items-center justify-center h-[26px] w-[26px] rounded-[10px] bg-[#343E49] font-bold ${
                    !isChecked ? "bg-[#D1D1D1]" : "bg-[#343E49]"
                  }`}
                  onClick={() => {
                    onRemoveFromCart(
                      product.id_product,
                      +product.cartQuantity! - 1,
                      product.sold_by
                    );
                  }}
                >
                  <Minus size={10} className="text-white" />
                </button>
                <span className="mx-4 text-[14px]">{product.cartQuantity}</span>
                <button
                  aria-label="aumentar"
                  disabled={
                    +product.cartQuantity! >= product.stock || !isChecked
                  }
                  className={`flex items-center justify-center h-[26px] w-[26px] rounded-[10px] font-bold ${
                    +product.cartQuantity! >= product.stock || !isChecked
                      ? "bg-[#D1D1D1]"
                      : "bg-[#343E49]"
                  }`}
                  onClick={() => {
                    onAddToCart(product.id_product.toString());
                  }}
                >
                  <Plus size={10} className="text-white text-ce" />
                </button>
              </div>
              <span
                className={`text-[12px] p-2 mr-2 ${
                  +product.cartQuantity! >= product.stock
                    ? "text-[#BD0202]"
                    : ""
                }`}
              >
                Máx {product.stock}{" "}
                {product.stock === 1 ? "unidad" : "unidades"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

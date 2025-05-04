import { Products } from "@/interfaces/categories/product";
import { formatCOP } from "@/lib/formatCop";
import Image from "next/image";

interface Props {
  product: Products;
}

const ProductDiscount = ({ product }: Props) => {
  return (
    <div className="flex flex-col mb-[12px]">
      {product.special_price && (
        <>
          <Image
            src="/images/category/specialdiscount.png"
            width={65}
            height={15}
            alt="cmr-points"
            className="mb-2"
          />
          <div className="flex items-center gap-2 font-normal leading-[22px]">
            <span className="text-[#e4022d] text-[18px]">
              {formatCOP(product.special_price!)}
            </span>
            <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px]">
              -{product.special_discount_percentage}%
            </span>
          </div>
        </>
      )}
      {product.discount_percentage && !product.special_discount_percentage ? (
        <div className="flex items-center gap-2 font-normal leading-[22px]">
          <span className="text-[#717171] text-[18px]">
            {formatCOP(product.discount_price)}
          </span>
          <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px]">
            -{product.discount_percentage}%
          </span>
        </div>
      ) : (
        <span className="text-[#717171] text-[18px]">
          {Number(product.discount_price) !== 0
            ? formatCOP(product.discount_price)
            : ""}
        </span>
      )}
      <span
        className={`text-[#717171] ${
          !product.special_price && !product.discount_percentage
            ? "text-[18px]"
            : "text-[14px] line-through"
        } `}
      >
        {formatCOP(product.price)}
      </span>
    </div>
  );
};

export default ProductDiscount;

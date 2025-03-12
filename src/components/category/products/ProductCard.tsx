import Image from "next/image";

interface Props {
  image: string;
  title: string;
  price: string;
  discount?: string;
  originalPrice?: string;
  description: string;
}

export default function ProductCard({
  image,
  title,
  price,
  discount,
  originalPrice,
  description,
}: Props) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-lg">
      <Image
        src={"/icons/desktop/falabella-icon.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-600">{description}</div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xl text-red-600">${price}</div>
        {discount && (
          <div className="text-sm text-gray-500 line-through">
            ${originalPrice}
          </div>
        )}
      </div>
    </div>
  );
}

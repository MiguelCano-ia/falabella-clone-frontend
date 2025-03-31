import Image from "next/image";

const recommendedProducts = [
  {
    id: 1,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73207558_1/w=276,h=276",
    brand: "PUMA",
    name: "Tenis Puma Moda Court Lally Mujer color Negro",
    price: "$319.990",
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73142948_1/w=276,h=276",
    brand: "REEBOK",
    name: "Tenis Reebok para Hombre Moda Royal BB",
    price: "$279.990",
    oldPrice: "$349.990",
    discount: "-20%",
    rating: 4,
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73040605_1/w=276,h=276",
    brand: "PUMA",
    name: "Tenis Puma para Hombre Moda Wired Run Pure",
    price: "$279.990",
    oldPrice: "$397.990",
    discount: "-30%",
  },
  {
    id: 4,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/139560195_01/w=276,h=276",
    brand: "PUMA",
    name: "Tenis Deportivos Marca Original Puma Game...",
    price: "$357.200",
    oldPrice: "$470.880",
    discount: "-24%",
  },
  {
    id: 5,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73038719_1/w=276,h=276",
    brand: "PUMA",
    name: "Tenis Puma para Hombre Moda Easy Rider Mix...",
    price: "$426.990",
    oldPrice: "$689.990",
    discount: "-30%",
  },
  {
    id: 6,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73207878_1/w=276,h=276",
    brand: "PUMA",
    name: "Tenis Puma Moda Club Era Suede Mujer",
    price: "$439.990",
  },
  {
    id: 7,
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73207878_1/w=276,h=276",
    brand: "PUMA",
    name: "Tenis Puma Moda Club Era Suede Mujer",
    price: "$439.990",
  },
];

const RecommendedForYou = () => {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Elegidos para ti</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="min-w-[195px] max-w-[195px]">
              <div className="relative w-[195px] h-[195px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={276}
                  height={276}
                  objectFit="cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{product.brand}</p>
              <p className="text-sm font-semibold line-clamp-2">
                {product.name}
              </p>
              <p className="text-md font-bold text-gray-500">{product.price}</p>
              {product.oldPrice && (
                <p className="text-xs text-gray-400 line-through">
                  {product.oldPrice}
                </p>
              )}
              {product.discount && (
                <span className="text-xs bg-red-500 text-white px-1 rounded">
                  {product.discount}
                </span>
              )}
              {product.rating && (
                <p className="text-xs mt-1 text-yellow-500">
                  {"⭐".repeat(Math.floor(product.rating))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedForYou;

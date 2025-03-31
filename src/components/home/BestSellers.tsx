import Image from "next/image";

const bestSellers = [
  {
    id: 1,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/120766199_02/w=276,h=276",
    brand: "IN GRILL",
    name: "Barril Asador y Ahumador mini basic 6L",
    price: "$229.900",
    oldPrice: "$479.900",
    discount: "-52%",
    rating: 4.7,
  },
  {
    id: 2,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73025565_1/w=276,h=276",
    brand: "XIAOMI",
    name: "Audífonos earbuds Xiaomi Bluetooth Redmi",
    price: "$59.900",
    oldPrice: "$199.900",
    discount: "-70%",
    rating: 4.7,
  },
  {
    id: 3,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/123834196_02/w=276,h=276",
    brand: "LATTAFA",
    name: "Perfume Yara 100ml Lattafa",
    price: "$199.000",
    oldPrice: "$339.900",
    discount: "-41%",
    rating: 4.5,
  },
  {
    id: 4,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73142852_1/w=276,h=276",
    brand: "SAMSUNG",
    name: "Celular Samsung Galaxy S24 FE Negro + 128GB",
    price: "$2.099.900",
    oldPrice: "$3.099.900",
    discount: "-32%",
    rating: 4.8,
  },
  {
    id: 5,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/1398700_1/w=276,h=276",
    brand: "MONTBLANC",
    name: "Montblanc Starwalker 75ml",
    price: "$189.990",
    oldPrice: "$439.900",
    discount: "-57%",
    rating: 4.5,
  },
  {
    id: 6,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73171801_1/w=276,h=276",
    brand: "UNIVERSAL",
    name: "Juego de ollas antiadherente Universal",
    price: "$189.990",
    oldPrice: "$299.900",
    discount: "-37%",
    rating: 4.0,
  },
];

const BestSellers = () => {
    return (
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Los más vendidos</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4">
            {bestSellers.map((product) => (
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
                <p className="text-sm font-semibold line-clamp-2">{product.name}</p>
                <p className="text-md font-bold text-gray-500">{product.price}</p>
                {product.oldPrice && (
                  <p className="text-xs text-gray-400 line-through">{product.oldPrice}</p>
                )}
                {product.discount && (
                  <span className="text-xs bg-red-500 text-white px-1 rounded">
                    {product.discount}
                  </span>
                )}
                {product.rating && (
                  <p className="text-xs mt-1 text-yellow-500">{"⭐".repeat(Math.floor(product.rating))}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default BestSellers;
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/123688520_01/w=276,h=276",
    brand: "LAVEF",
    name: "Chaqueta Rompevientos 100 Reflectiva",
    price: "$59.900",
    oldPrice: "$64.800",
    rating: "⭐⭐⭐⭐ 4.1",
  },
  {
    id: 2,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/125368227_01/w=276,h=276",
    brand: "SPARTAN",
    name: "CASCO MOTO SPARTAN DRAKEN LEATHER",
    price: "$219.900",
    oldPrice: "$279.900",
    discount: "-21%",
  },
  {
    id: 3,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/133724849_01/w=276,h=276",
    brand: "MT HELMETS",
    name: "CASCO MT HELMETS STINGER Z ZIVZE",
    price: "$343.200",
    oldPrice: "$429.000",
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/130901569_01/w=276,h=276",
    brand: "O'NEAL",
    name: "Guantes Element Neon niño talla 3-4",
    price: "$140.000",
  },
  {
    id: 5,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132864987_01/w=276,h=276",
    brand: "GENERICO",
    name: "Guantes de protección Con táctil para motociclistas unisex",
    price: "$98.900",
  },
  {
    id: 6,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140070570_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi POCO X7 PRO 5G 512GB 12GB RAM Negro",
    price: "$1.759.990",
  },
];

const LastViewed = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Tus últimos vistos</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {products.map((product) => (
            <div key={product.id} className="min-w-[195px] max-w-[195px]">
              <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
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
              {product.rating && <p className="text-xs mt-1">{product.rating}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastViewed;

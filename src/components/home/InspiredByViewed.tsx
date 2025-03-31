import Image from "next/image";

const recommendedProducts = [
  {
    id: 1,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132578571_01/w=276,h=276",
    brand: "SUOMY",
    name: "Guantes de Moto transpirables hombre",
    price: "$79.900",
  },
  {
    id: 2,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/141239335_01/w=276,h=276",
    brand: "GENÉRICO",
    name: "Chaqueta hombre piloto impermeable y acolchada",
    price: "$55.000",
    oldPrice: "$70.000",
    discount: "-21%",
    rating: 5,
  },
  {
    id: 3,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/127913190_02/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi Poco X6 Pro 5G 512Gb 12Ram",
    price: "$1.249.900",
    oldPrice: "$1.899.900",
    discount: "-34%",
    rating: 4.6,
  },
  {
    id: 4,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132589123_01/w=276,h=276",
    brand: "SUOMY",
    name: "Guantes Impermeables Térmicos Para Hombres",
    price: "$94.900",
    rating: 5,
  },
  {
    id: 5,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/136641530_01/w=276,h=276",
    brand: "ICON",
    name: "Guantes Protección Transpirable Motociclista",
    price: "$129.990",
  },
  {
    id: 6,
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/139966924_01/w=276,h=276",
    brand: "XIAOMI",
    name: "Celular Xiaomi Poco X7 Pro 5G 512Gb 12Ram",
    price: "$1.579.900",
    oldPrice: "$2.599.900",
    discount: "-39%",
    rating: 5,
  },
];

const InspiredByViewed = () => {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Inspirado en lo que viste</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {recommendedProducts.map((product) => (
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

export default InspiredByViewed;

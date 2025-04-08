import Image from "next/image";

const banners = [
  {
    id: 1,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltfa0de0181c247f8f/67e30dcdb323196880990bef/bannerD1_Oferton_Vestuario_Marz_2025_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 2,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blte23944cf382b0ac6/67e30dc87ca40a122b03a3f0/bannerD2_Oferton_Yacomenzo_Marz_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 3,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltf52cb6f034bb7c9a/67e741600ebeb9c3137b1c9d/XL-2304X459-DESK.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 4,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt19c916ab83b3041d/67e557d81b33b8151c38107e/Banner_XL_1270x459_(2).jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 5,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltad524b99d7e384fb/67e557a2b41d387acf77bad4/XL-1270X459-DESK--27MARZ.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 6,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltec188d596abc1c94/67e6b49690131229b6069f89/XL_dk_Seven_VAS_w13_LMS.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 7, // Imagen grande que ocupa el ancho de dos columnas
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt49954b38634d46bc/67bdfac35c04c83f35ffe8e0/Banner_FCOM_TC_Desk.jpg?auto=webp&quality=70&width=90p",
  },
];

const PromotionalBanners = () => {
    return (
      <div className="mt-10">
        {/* Grid de Banners */}
        <div className="grid grid-cols-2 gap-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`rounded-lg overflow-hidden ${
                banner.id === 7 ? "col-span-2 w-full" : "w-full"
              }`}
            >
              <Image
                src={banner.image}
                alt="Banner Promocional"
                width={banner.id === 7 ? 1600 : 750}
                height={250}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PromotionalBanners;
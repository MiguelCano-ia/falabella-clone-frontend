import Image from "next/image";

const latestProducts = [
  {
    id: 1,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltada441faa498c78c/67e435b3c951224c5195eb13/Moda_Cardigans_home_26marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 2,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt9e5ca8d001000969/67d89b832a7095b6578c9f89/Lanzamiento17-Minca_Desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 3,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt50713ba3794c3754/67e435b6d69f2a20039cd32d/Moda_Mango_home_26marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 4,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blte0b607908b355daf/67e57a526d13e7c9a236e4e1/celulares_samsung_home_26marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 5,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt880fce203510d89e/67d89b8e07d0f938235d1e2f/Tenis_Diadora_home_18marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 6,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltd313d4c4e4c9e6af/67dc46dd0c6f5502da1fc1f9/LoUltimo-Adidas-superstar-Desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 7,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltff83b6bca8925523/67e2be89848c633ff0cfdfd3/LoUltimo4-ScooterXiaomi-Desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 8,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta65165d11337d731/67e5ba31207d799d4a0eee98/relojes_garmin_home_27marzo_desk.png?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 9,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltcf585ccc86138feb/67d89c5f1aa775186db1d6c4/LoUltimo-Guayos-Desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 10,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltf2cd2f829e9a9146/67e3157f0b0fc563e1b4bf30/carteras_basement_home_19marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 11,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt06cf702b08c62961/67e54d693ed2b071911e3bc5/TodosDiferentes_home_26marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 12,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltf89346a4589dbf9b/67d89c5e64766094a7bf1ee8/lavadoras_Hisense_home_18marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 13,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt300714878a950ff9/67e7217a376844417a781c39/LoUltimo-PerfumesTurcos-Desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 14,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt5317527cb3895f3f/67d8a1a1a8fa6e7bfd5167b4/LoUltimo-RopaCama-Desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 15,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt98d8cdee442c7de9/67d99d6417c800bb74cdabfb/Gafas_izipizi_home_18marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 16,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt334d846593eaf842/67db2b80a8fa6eab4f518689/3perfumes_dior_home_18marzo_desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 17,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt146f189376a86b4d/67d99d650c5905e39dfd0b2b/LoUltimo14-Mickey-Desk.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 18,
    image: "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt66179427240885c5/67e6ba75b004642386561c18/LoUltimo18-Cuadros-Desk-28marzo.png?auto=webp&disable=upscale&quality=70&width=1280",
  },
];

const LatestReleases = () => {
    return (
      <div className="mt-10">
        {/* Imagen del título "Lo Último Primero en Falabella" */}
        <div className="flex justify-center">
          <Image
            src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltc4de8e15da13c8f9/679161205a5c63445dc10630/TEXTO-MODA-Desk.png?auto=webp&quality=70&width=90p"
            alt="Lo Último Primero en Falabella"
            width={2074}
            height={104}
            objectFit="contain"
          />
        </div>
  
        {/* Grid de productos */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className={`overflow-hidden rounded-lg ${
                product.id >= 13 && product.id <= 14 ? "col-span-2 w-full" : "w-full"
              }`}
            >
              <Image
                src={product.image}
                alt="Último Producto"
                width={product.id >= 13 && product.id <= 14 ? 590 : 276}
                height={product.id >= 13 && product.id <= 14 ? 220 : 276}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LatestReleases;
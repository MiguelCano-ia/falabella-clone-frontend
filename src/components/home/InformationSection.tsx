import Image from "next/image";

const cmrBenefits = [
  {
    id: 1,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltce17c346a081b8d1/65e8af8d6f950c61798c6f67/Ecosistema01-CMR-dk-LMS.jpg?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Abre tu CMR",
  },
  {
    id: 2,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt61330eae6a6c339f/67d304689ab9c4c6e8adf35b/WB-OUs-501x500.png?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Oportunidades Únicas",
  },
  {
    id: 3,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt617384889b4ff076/67d3057f0c59050053fcdc01/WB-CMRPuntos-501x500.png?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Acumula CMR Puntos",
  },
  {
    id: 4,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltc11e307cd3fe624b/67d305aaff3f037507e174f1/WB-Fcom-501x500.png?auto=webp&disable=upscale&quality=70&width=1280",
    text: "¡Compra ya!",
  },
];

const shoppingBenefits = [
  {
    id: 1,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt87eaf8a4da264f63/65e8b956ed4661005778842b/PVC-valor-1-despachoDK.jpg?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Envíos gratis en miles de productos a partir de $149.000",
  },
  {
    id: 2,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt3847d0552220f484/65e8b9831ab2dc5e8297a257/PVC-valor-2-compras-DK.jpg?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Comienza a vender en falabella.com",
  },
  {
    id: 3,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt3c8d4b82e481a8da/65e8b9b27d810a10b741a331/PVC-valor-3-PuntoRetiroDK.jpg?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Compra y recoge en tienda",
  },
  {
    id: 4,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltc01d1026c84131a9/65e8b9d708a892844dd52678/PVC-valor-4-CambioDevolucion-DK.jpg?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Gestiona tus cambios y devoluciones",
  },
  {
    id: 5,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltfc0c64309ee94057/65e8b9fa5fd476166474fbdf/PVC-valor-5-SiguePedidos-DK.jpg?auto=webp&disable=upscale&quality=70&width=1280",
    text: "Sigue tus compras y pedidos",
  },
];

const InformationSection = () => {
  return (
    <div className="mt-10 mb-10">
      {/* Beneficios CMR */}
      <div className="flex justify-center gap-8">
        {cmrBenefits.map((benefit) => (
          <div key={benefit.id} className="text-center w-[200px]">
            <Image
              src={benefit.image}
              alt={benefit.text}
              width={200}
              height={200}
              objectFit="contain"
            />
            <p className="text-sm font-semibold mt-2">{benefit.text}</p>
          </div>
        ))}
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Beneficios de compra (más grandes y alineados) */}
      <div className="flex justify-center gap-6 max-w-[900px] mx-auto">
        {shoppingBenefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center text-center w-[160px]"
          >
            <Image
              src={benefit.image}
              alt={benefit.text}
              width={100} // Aumentado de 80px a 100px
              height={100}
              objectFit="contain"
            />
            <p className="text-sm mt-2">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationSection;

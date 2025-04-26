import Image from "next/image";

const offers = [
  {
    id: 1,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt05ffbe9e0493eed7/67e919185ea2603181cd325e/dd4pods-01_Bose_Parlante-mar-2025_resp.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 2,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltb9519b71eed9f794/67e802991b997d58c1becc7b/dd4pods-02_Carteras_29-mar-2025_Resp.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 3,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt864a3d63e64b7284/67e919135ea2607db4cd325a/dd4pods-03_Ropaadidas_29-mar-2025_Resp.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 4,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltc43581cc70dcbbe7/67e8029958619133ffd4e9a4/dd4pods-04_Camisasycamisetas_29-mar-2025_Resp.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
  {
    id: 5,
    image:
      "https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltc43581cc70dcbbe7/67e8029958619133ffd4e9a4/dd4pods-04_Camisasycamisetas_29-mar-2025_Resp.jpg?auto=webp&disable=upscale&quality=70&width=1280",
  },
];

export const LimitedTimeOffers = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltc26949a7720a83f4/67d446dba782bac49d8d9440/TEXTO-Solox-Desk.jpg?auto=webp&quality=70&width=90p"
          alt="Solo por Pocas Horas"
          width={2304}
          height={90}
        />
      </div>

      <div className="mt-6 overflow-x-hidden">
        <div className="flex gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="min-w-[250px] max-w-[300px]">
              <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={offer.image}
                  alt="Oferta especial"
                  width={690}
                  height={640}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt6aab209589180efb/67cb7e37304ea95b2c834229/TEXTO-7mar-propuestavalor-Desk.jpg?auto=webp&quality=70&width=90p"
          alt="Compra por Categoría"
          width={2304}
          height={90}
        />
      </div>

      <div className="mt-6 grid grid-cols-5 gap-4">
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltea5035b6eb284a14/67e2af6430ac4a4530ea08fc/PropuestaValor1_ModaMujer_Desk.jpg"
          alt="Moda Mujer"
          width={240}
          height={125}
        />
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltce2f6f3c518439ab/67e2af990b0fc56a20b4b8b0/PropuestaValor2_ModaHombre_Desk.jpg"
          alt="Moda Hombre"
          width={250}
          height={150}
        />
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltcf777744cff444df/PropuestaValor3_Belleza_Desk.jpg"
          alt="Belleza"
          width={250}
          height={150}
        />
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt9fd33c624cab308b/67e2b01ed69f2a4ec59cbff6/PropuestaValor4_Calzado_Desk.jpg"
          alt="Calzado"
          width={250}
          height={150}
        />
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt9aadc46106e9af90/67e2b02f8618621c2cf1ab0a/PropuestaValor5_Tecnologia_Desk.jpg"
          alt="Tecnología"
          width={250}
          height={150}
        />
      </div>

      <div className="flex justify-center mt-10">
        <Image
          src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt3c173a5a0e8fe022/67e300d5aa2e03d22f86f0b2/Crossbanner_los_mas_vendidos_dk.png?auto=webp&quality=70&width=90p"
          alt="Los Más Vendidos"
          width={2304}
          height={90}
        />
      </div>
    </div>
  );
};

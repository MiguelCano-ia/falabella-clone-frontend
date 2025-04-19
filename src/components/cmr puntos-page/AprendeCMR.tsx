'use client';

import Image from "next/image";

const AprendeCMRPuntos = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12">
        Aprende todo sobre tus CMR Puntos
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="https://images.ctfassets.net/n8a32dlewwba/32W5Cs5R0ZQWHzPyjNG7lu/49e97edaba6b325bbb0f365512bcd8e7/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CL_570x420.png?fm=webp"
          alt="Mujer pagando con tarjeta"
          width={500}
          height={400}
          className="rounded-xl"
        />

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            ¿Cómo acumular CMR Puntos?
          </h3>
          <p className="mb-3">
            <strong className="text-gray-900">
              ¡Acumular CMR Puntos es muy fácil!
            </strong>{' '}
            Y mientras más CMR Puntos tengas más opciones tienes para canjear.
          </p>
          <p className="text-sm text-gray-700 mb-6">
            Acumula CMR Puntos con tu cédula de ciudadanía en Falabella, Homecenter, y Falabella.com.co. Y, si tienes las tarjetas de Banco Falabella, úsalas SIEMPRE y te llenarás de CMR Puntos.
          </p>
          <button className="bg-lime-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
            Ver más
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            ¿Qué redimir con tus CMR Puntos?
          </h3>
          <p className="mb-3">
            <strong className="text-gray-900">Redime tus CMR Puntos ¡y comienza a disfrutar!</strong>{' '}
            Tienes cientos de opciones: productos, experiencias, Gift Cards, cupones de descuentos, servicios de viaje ¡Y mucho más!
          </p>
          <p className="text-sm text-gray-700">
            Solo tienes que tener tus CMR Puntos y creada tu{' '}
            <a href="#" className="text-green-600 underline">
              clave de internet.
            </a>
          </p>
        </div>

        <Image
          src="https://images.ctfassets.net/n8a32dlewwba/3g2PmDMxkrFb7XAhPo1ywW/e0909c6790261b44bc12dc2b42ad448b/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CL_570x420_copia.png?fm=webp"
          alt="Mujer feliz abriendo caja"
          width={500}
          height={400}
          className="rounded-xl"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        <Image
          src="https://images.ctfassets.net/n8a32dlewwba/5193m92fbDWcZThPvqEDXH/15c467207035c26567cd324cb0f24791/Jesu-_Regional-_Imagenes_Web_-_CALUGAS_CL_570x420_copia_2.png?fm=webp"
          alt="Mujer pagando con tarjeta"
          width={500}
          height={400}
          className="rounded-xl"
        />

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Paga menos con CMR puntos
          </h3>
          <p className="mb-3    ">
                Ahorra en el total de tu compra usando con tus CMR Puntos.
            <strong className="text-gray-900">
                Tiendas Homecenter:
            </strong>{' '}
                complementa el pago con el medio de pago que tu quieras
          </p>
          <button className="bg-lime-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
};

export default AprendeCMRPuntos;

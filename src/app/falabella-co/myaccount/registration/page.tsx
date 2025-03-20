import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { Bell, CreditCard, Gift, ReceiptText, Star } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <section className="flex h-auto min-h-[375px] bg-[#f1f1f1] justify-center">
      <div className="flex items-start justify-start bg-[#fefeff] w-full max-w-[1280px] h-auto p-6 px-8 gap-[50px] sm:px-[80px] sm:pt-[48px] sm:pb-[56px] sm:mx-[52px] sm:mt-[48px] sm:mb-[56px] sm:rounded-[10px] max-md:flex-col">
        <div className="flex flex-col">
          <p className="text-[24px] font-normal leading-[28px] pb-5 text-foreground">
            Inicia sesión o regístrate para comprar
          </p>
          <div className="flex flex-col gap-3 w-full max-w-[612px]">
            <div className="text-[16px] leading-[20px] pb-8 font-normal text-foreground">
              Ingresa tus datos personales y disfruta de una experiencia de
              compra más rápida.
            </div>
            <RegisterForm />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[20px] leading-[24px] text-[#333]">
            Beneficios falabella.com
          </p>
          <div className="flex justify-start items-center w-full gap-3">
            <div className="rounded-full border-[1px] border-black p-2">
              <Bell size={24} />
            </div>
            <span className="text-[14px] leading-[20px] text-[#333]">
              <strong>Recibir notificaciones en tiempo real</strong> de tus
              pedidos.
            </span>
          </div>
          <div className="flex justify-start items-center w-full gap-3">
            <div className="rounded-full border-[1px] border-black p-2">
              <ReceiptText size={24} />
            </div>
            <span className="text-[14px] leading-[20px] text-[#333]">
              Revisar tus <strong>boletas online.</strong>
            </span>
          </div>
          <div className="flex justify-start items-center w-full gap-3">
            <div className="rounded-full border-[1px] border-black p-2">
              <Star size={24} />
            </div>
            <span className="text-[14px] leading-[20px] text-[#333]">
              Guardar <strong>medios de pago y direcciones favoritas.</strong>
            </span>
          </div>
          <div className="flex justify-start items-center w-full gap-3">
            <Image
              src="/images/register/cmr.png"
              width={42}
              height={42}
              alt="cmr"
            />
            <span className="text-[14px] leading-[20px] text-[#333]">
              <strong>Ser parte de CMR puntos, </strong> el mejor programa de
              beneficios.
            </span>
          </div>
          <div
            className="my-3 h-[2px] w-full"
            style={{
              background:
                "linear-gradient(90deg, #6CA63C 0.77%, #35783C 13.66%, #3A71B2 27.32%, #003891 40.98%, #C90045 56.96%, #892D43 70.1%, #EEB500 82.99%, #E66000 94.85%)",
            }}
          ></div>
          <p className="text-[20px] leading-[24px] text-[#333]">
            Beneficios CMR Puntos
          </p>
          <div className="flex justify-start items-center w-full gap-3">
            <div className="rounded-full border-[1px] border-black p-2">
              <CreditCard size={24} />
            </div>
            <span className="text-[14px] leading-[20px] text-[#333]">
              <strong>Canje </strong> de productos, experiencias, viajes y Gift
              Cards.
            </span>
          </div>
          <div className="flex justify-start items-center w-full gap-3">
            <div className="rounded-full border-[1px] border-black p-2">
              <Gift size={24} />
            </div>
            <span className="text-[14px] leading-[20px] text-[#333]">
              <strong>Promociones </strong>especiales, cupones de descuento y
              más.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

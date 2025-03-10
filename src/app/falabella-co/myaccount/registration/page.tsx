import { RegisterForm } from "@/components/auth/register/RegisterForm";

export default function page() {
  return (
    <section className="flex h-auto min-h-[375px] bg-[#f1f1f1] justify-center">
      <div className="flex items-start justify-start bg-[#fefeff] w-full max-w-[1280px] h-auto p-6 px-8 sm:px-[80px] sm:pt-[48px] sm:pb-[56px] sm:mx-[52px] sm:mt-[48px] sm:mb-[56px] sm:rounded-[10px]">
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
      </div>
    </section>
  );
}

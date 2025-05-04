import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col flex-wrap p-5 gap-16 bg-[#FFF] mb-3 rounded-[5px]">
      <h1 className="text-[#333] font-normal text-[24px]">Pagar mi CMR</h1>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/user-information/paycmr.svg"
            width={109}
            height={108}
            alt="paycmr"
          />
          <div className="flex flex-col items-center text-[#717171] text-[24px] font-normal mb-[116px]">
            <p>Abrimos una nueva pestaña en tu </p>
            <p>
              navegador para ingresar a{" "}
              <Link
                href="https://www.bancofalabella.com.co/"
                className="underline underline-offset-4"
              >
                Pagar CMR
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

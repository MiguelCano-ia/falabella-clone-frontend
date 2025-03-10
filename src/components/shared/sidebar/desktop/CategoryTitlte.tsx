import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  icon: string;
}

export const CategoryTitlte = ({ title, icon }: Props) => {
  return (
    <div className="flex justify-between items-center min-w-[468px] pr-8">
      <div className="relative flex flex-grow-[2] flex-shrink-0 basis-0 items-center font-black text-[24px] mr-5 leading-[28.8px] w-screen max-w-[619px] h-[55.8px] pt-[13px] pb-[14px] px-[72px] rounded-tl-[80px] rounded-bl-[80px] rounded-br-[140px] bg-gradient-to-r from-[#668F00] to-[#8FCA00]">
        <div className="absolute flex justify-center items-center w-14 h-full rounded-full left-0 top-0 bg-[#AAD500]">
          <Image src={icon} width={80} height={80} alt="icninos" />
        </div>
        <Link href="#" className="text-primary-foreground">
          {title}
        </Link>
      </div>
      <Link
        href="#"
        className="text-[14px] leading-[16.8px] text-[#68717d] underline underline-offset-2"
      >
        Ver todo
      </Link>
    </div>
  );
};

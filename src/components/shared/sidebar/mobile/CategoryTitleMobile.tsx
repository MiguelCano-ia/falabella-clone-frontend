import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  icon: string;
}

export const CategoryTitleMobile = ({ title, icon }: Props) => {
  return (
    <div className="relative flex items-center m-4 max-w-[619px] rounded-tl-[80px] rounded-br-[140px] rounded-bl-[80px] text-[19px] leading-[22.8px] font-extrabold h-16 py-[20px] pl-[71px] pr-[45px] text-primary-foreground bg-gradient-to-r from-[#668F00] to-[#8FCA00]">
      <Link href="#" className="text-inherit">
        <div className="absolute flex items-start justify-center w-16 h-full rounded-full left-0 top-0 bg-[#AAD500]">
          <Image src={icon} width={80} height={80} alt="icninos" />
        </div>
        {title}
      </Link>
    </div>
  );
};

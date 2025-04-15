import Image from "next/image";
import Link from "next/link";

interface Props {
  banner: string;
}

export const CategoryList = ({ banner }: Props) => {
  console.log(banner);
  return (
    <div className="mb-[5px] max-w-[1280px] w-full bg-[#fff]">
      {banner && (
        <Image
          src={`http://localhost:4000/images/${banner}`}
          width={1280}
          height={56}
          alt="banner"
        />
      )}
      <div className="relative flex-wrap justify-center w-full py-[10px] px-[5px] hidden">
        <div className="flex">
          <div className="relative px-3 ml-3">
            <Link
              href="#"
              className="flex flex-col items-center justify-center"
            >
              <Image
                src="/images/category/jackets/abrigos.avif"
                width={110}
                height={110}
                alt="jacket"
                className="rounded-full"
              />
              {/* <h3 className="text-[#333] text-[14px] py-[5px] font-bold leading-[17px] text-center max-w-[110px]">
                Abrigos
              </h3> */}
            </Link>
          </div>
          <div className="relative px-3 ml-3">
            <Link
              href="#"
              className="flex flex-col items-center justify-center"
            >
              <Image
                src="/images/category/jackets/blazers.avif"
                width={110}
                height={110}
                alt="jacket"
                className="rounded-full"
              />
              <h3 className="text-[#333] text-[14px] py-[5px] font-bold leading-[17px] text-center max-w-[110px]">
                Blazer
              </h3>
            </Link>
          </div>
          <div className="relative px-3 ml-3">
            <Link
              href="#"
              className="flex flex-col items-center justify-center"
            >
              <Image
                src="/images/category/jackets/chalecos.avif"
                width={110}
                height={110}
                alt="jacket"
                className="rounded-full"
              />
              <h3 className="text-[#333] text-[14px] py-[5px] font-bold leading-[17px] text-center max-w-[110px]">
                Blazer
              </h3>
            </Link>
          </div>
          <div className="relative px-3 ml-3">
            <Link
              href="#"
              className="flex flex-col items-center justify-center"
            >
              <Image
                src="/images/category/jackets/ver-todo.avif"
                width={110}
                height={110}
                alt="jacket"
                className="rounded-full"
              />
              <h3 className="text-[#333] text-[14px] py-[5px] font-bold leading-[17px] text-center max-w-[110px]">
                Blazer
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

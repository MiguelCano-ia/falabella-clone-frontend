import Link from "next/link";

interface Props {
  categoryDesktop: string;
}

export const SubCategories = ({ categoryDesktop }: Props) => {
  console.log(categoryDesktop);

  return (
    <>
      <div className="flex justify-between mt-[-8px]">
        <div className="flex flex-col flex-wrap items-start justify-start h-auto max-h-[715px]">
          <ul className="w-[186px] min-w-[186px] mt-8 mr-8">
            <li className="text-[19px] font-bold leading-[22.8px] text-[#68717D] mb-2">
              Ofertas
            </li>
            <li className="text-[14px] leading-[16px] text-primary font-normal mb-3">
              <Link href="#" className="text-inherit">
                Rebajas en Mejores Marcas hasta 50%
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

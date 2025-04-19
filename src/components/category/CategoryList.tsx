import Image from "next/image";
import Link from "next/link";

interface Featured {
  name: string;
  slug: string;
  image: string;
}

interface Props {
  banner: string;
  featured: Featured[] | null;
  slugs: string[];
}

export const CategoryList = ({ banner, featured, slugs }: Props) => {
  let accumulatedPath = "/falabella-co/products";
  slugs.map((slug) => {
    accumulatedPath += `/${slug}`;
  });

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
      {featured && (
        <div className="relative flex-wrap justify-center w-full py-[10px] px-[5px]">
          <div className="flex justify-center mt-2">
            {featured.map((feature) => (
              <div className="relative px-3 ml-3" key={feature.image}>
                <Link
                  href={`${accumulatedPath}/${feature.slug}`}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={`http://localhost:4000/images/${feature.image}`}
                    width={110}
                    height={110}
                    alt={feature.name}
                    className="bg-[#f0f0f0] rounded-full z-10 mix-blend-multiply scale-75 w-[110px] h-[110px] object-contain"
                  />
                  <div className="absolute bg-[#f0f0f0] w-[110px] h-[110px] rounded-full top-0 left-1/5"></div>
                  <h3 className="text-[#333] text-[14px] py-[5px] font-bold leading-[17px] text-center max-w-[110px]">
                    {feature.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

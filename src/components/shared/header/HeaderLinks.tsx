import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  srcDesktop: string;
  srcMobile: string;
  widthDesktop: number;
  heightDesktop: number;
  widthMobile: number;
  heightMobile: number;
}

export const HeaderLinks = ({
  href,
  srcDesktop,
  srcMobile,
  widthDesktop,
  heightDesktop,
  widthMobile,
  heightMobile,
}: Props) => {
  return (
    <Link
      href={href}
      className={clsx("cursor-pointer border-r-[1px]", {
        "border-primary-theme-color border-r-inherit border-b-2":
          href === "/falabella-co",
      })}
    >
      <div className="w-[134px] h-[32px] items-center justify-center flex max-sm:w-[105px]">
        <Image
          src={srcDesktop}
          width={widthDesktop}
          height={heightDesktop}
          alt=""
          className="max-sm:hidden"
        />
        <Image
          src={srcMobile}
          width={widthMobile}
          height={heightMobile}
          alt=""
          className="hidden max-sm:block"
        />
      </div>
    </Link>
  );
};

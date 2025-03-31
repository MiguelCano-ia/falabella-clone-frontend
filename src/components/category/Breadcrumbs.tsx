import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatSlugToTitle } from "@/lib/slugToTitle";

interface Props {
  slugs: string[];
}

export const Breadcrumbs = ({ slugs }: Props) => {
  let accumulatedPath = "/falabella-co";

  return (
    <div className="flex items-center min-h-[32px] max-w-[1280px] w-full pl-8 pr-[19px]">
      <ArrowLeft size={16} className="mr-2 cursor-pointer text-[#000]" />
      <ol className="flex flex-wrap font-bold text-[11px]">
        <li>
          <Link
            href="/falabella-co"
            className="px-[3px] text-[#717171] underline underline-offset-2"
          >
            Home
          </Link>
        </li>
        {slugs.map((slug) => {
          accumulatedPath += `/${slug}`;

          return (
            <li key={slug}>
              <span className="px-[3px] text-[#717171]">{">"}</span>
              <Link
                href={accumulatedPath}
                className="px-[3px] text-[#717171] underline underline-offset-2"
              >
                {formatSlugToTitle(slug)}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

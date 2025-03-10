import { ChevronRight } from "lucide-react";

interface Props {
  category: string;
  setCategory: (category: string) => void;
}

export const CategoriesMobile = ({ setCategory, category }: Props) => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between h-14 cursor-pointer text-sidebar-foreground pl-4 pr-[12.45px]">
        <div
          className="flex items-center text-[16px] leading-[19.2px] text-inherit"
          onClick={() => setCategory(category)}
        >
          {category}
        </div>
        <ChevronRight size={20} className="text-[#767676]" />
      </div>
    </div>
  );
};

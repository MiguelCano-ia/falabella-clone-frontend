import { ChevronRight } from "lucide-react";

interface Props {
  categoryTitle: string;
  categoryDesktop: string;
  setCategoryDesktop: (category: string) => void;
}

export const Categories = ({
  categoryTitle,
  categoryDesktop,
  setCategoryDesktop,
}: Props) => {
  const handleMouseEnter = () => {
    setCategoryDesktop(categoryTitle);
  };

  return (
    <>
      <div className="px-4">
        <div
          className={`${
            categoryTitle === categoryDesktop &&
            "bg-[#f7f7f7] border-l-4 border-primary-theme-color rounded-sm"
          } group flex items-center justify-between py-[18px] px-3 text-sidebar-foreground h-14 cursor-pointer `}
          onMouseEnter={handleMouseEnter}
        >
          <div
            className={`${
              categoryTitle === categoryDesktop && "font-bold text-foreground"
            } text-[16px] leading-[19.2px] text-inherit flex items-center`}
          >
            {categoryTitle}
          </div>
          <ChevronRight
            size={20}
            className={`${
              categoryTitle === categoryDesktop && "text-primary-theme-color"
            } `}
          />
        </div>
      </div>
    </>
  );
};

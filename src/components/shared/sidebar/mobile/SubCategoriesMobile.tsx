interface Props {
  items: string[];
}

export const SubCategoriesMobile = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <div key={item} className="px-4">
          <div className="flex justify-between items-center h-14 pl-4 pr-[12.45px] rounded-sm text-primary cursor-pointer">
            <div className="flex items-center text-inherit text-[16px] leading-[19.2px]">
              {item}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

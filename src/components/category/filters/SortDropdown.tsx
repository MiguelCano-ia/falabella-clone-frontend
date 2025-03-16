import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";

export const SortDropdown = () => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-[13px] text-[#bbb] font-normal">
        Ordenador por:
      </span>
      <Select defaultValue="recomendados">
        <SelectTrigger className="w-[250px] border-0 focus:ring-0 focus:ring-offset-0 px-0 border-b-[1px] rounded-none border-[#bbb] text-[14px] text-[#333] font-bold">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              className="text-[14px] text-[#333] focus:text-[#333] focus:bg-[#e8e8e8] data-[state=checked]:bg-[#f8f8f8] data-[state=checked]:border-l-[3px] data-[state=checked]:border-l-[#343E49] rounded-none"
              value="apple"
            >
              Apple
            </SelectItem>

            <SelectItem
              className="text-[14px] text-[#333]focus:text-[#333] focus:bg-[#e8e8e8] data-[state=checked]:bg-[#f8f8f8] data-[state=checked]:border-l-[3px] data-[state=checked]:border-l-[#343E49] rounded-none"
              value="recomendados"
            >
              Recomendados
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

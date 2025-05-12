import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
  options: string[] | undefined;
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

export const FloatingLabelSelect = ({
  label,
  placeholder,
  options,
  value,
  onValueChange,
  disabled = false,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 -top-0 transform -translate-y-1/2 pointer-events-none px-2 bg-[#fff] 
          ${
            isFocused || value
              ? "text-[#4a4a4a] text-[14px] scale-90"
              : "hidden"
          }
        `}
      >
        {label}
      </label>

      <Select
        value={value}
        onValueChange={onValueChange}
        onOpenChange={(open) => setIsFocused(open)}
        disabled={disabled}
      >
        <SelectTrigger
          className={`w-full h-[52px] focus:ring-0 focus:ring-offset-0 px-4 border-[1px] rounded-[4px] py-0 ${
            disabled ? "border-[#bbbbbb]" : "border-[#767676]"
          } text-[16px] [&>svg:last-of-type]:hidden`}
        >
          <SelectValue placeholder={placeholder} defaultValue={value} />
          <Search className="text-gray-400" size={20} />
        </SelectTrigger>

        <SelectContent className="rounded-none max-h-[150px]">
          <SelectGroup className="">
            {options?.map((value, index) => (
              <SelectItem
                className="text-[14px] py-2 text-[#333] focus:text-[#333] hover:bg-[#f8f8f8] hover:border-l-[3px] hover:border-l-[#343E49] hover:font-bold rounded-none"
                key={index}
                value={value}
              >
                {value || `option-${index}`}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

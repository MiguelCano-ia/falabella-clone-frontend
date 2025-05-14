import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/store/checkout";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  disabled: boolean;
}

export const DeliveryOption = ({
  icon,
  title,
  description,
  disabled,
  ...props
}: Props) => {
  const setIsAddressModalOpen = useCheckoutStore(
    (state) => state.setIsAddressModalOpen
  );
  return (
    <Button
      {...props}
      variant="clean"
      className={`flex items-center justify-start gap-5 border-[1px] border-[#ccc] rounded-[4.5px] h-20 w-full [&_svg]:size-7 px-6 cursor-pointer ${
        disabled && "bg-[#F8F8F8] pointer-events-none cursor-not-allowed"
      }`}
      onClick={() => {
        if (title === "Envio Express") {
          setIsAddressModalOpen(true);
        }
      }}
    >
      {icon}
      <div className="flex flex-col items-start font-semibold">
        <p className={`text-[#333] text-base ${disabled && "text-[#bbb]"}`}>
          {title}
        </p>
        <p
          className={`text-sm text-[#888] font-normal ${
            disabled && "text-[#bbb]"
          }`}
        >
          {description}
        </p>
      </div>
    </Button>
  );
};

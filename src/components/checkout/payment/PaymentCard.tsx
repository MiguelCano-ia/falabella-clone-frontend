import { Info } from "lucide-react";

export const PaymentCard = ({
  icon,
  label,
  isAvailable = true,
  discount = null,
  onClick,
  selected = false,
}: {
  icon: React.ReactNode;
  label: string;
  isAvailable: boolean;
  discount: string | null;
  onClick: () => void;
  selected: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-white rounded-lg border mb-3 cursor-pointer
        ${selected ? "border-blue-500" : "border-gray-200"} 
        ${
          isAvailable
            ? "hover:border-gray-300"
            : "opacity-80 pointer-events-none"
        }`}
      onClick={isAvailable ? onClick : undefined}
    >
      <div className="flex items-center">
        <div className="mr-3">{icon}</div>
        <span
          className={`font-medium ${
            isAvailable ? "text-[#333]" : "text-gray-500"
          }`}
        >
          {label}
        </span>
      </div>

      <div className="flex items-center">
        {discount && (
          <div className="flex items-center bg-red-50 text-red-600 font-medium text-xs px-2 py-1 rounded-md mr-2">
            <div className="bg-red-600 text-white rounded-sm p-1 mr-1">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 6H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 6V4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 6V4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M21 10H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="15"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {discount}
          </div>
        )}

        {!isAvailable && (
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">No disponible</span>
            <div className="text-gray-500">
              <Info size={16} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

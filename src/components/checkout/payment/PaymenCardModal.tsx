import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startTransition, useActionState, useEffect } from "react";
import Image from "next/image";
import { usePayment } from "./hooks/usePayment";
import { verifyCard } from "@/actions/checkout/payment/verifyCard";
import { useRouter } from "next/navigation";

export const PaymenCardModal = ({
  selectedCard,
  setIsModalOpen,
  isModalOpen,
}: {
  selectedCard: string | null;
  setIsModalOpen: (isOpen: boolean) => void;
  isModalOpen: boolean;
}) => {
  const {
    cardNumber,
    expiration,
    cvv,
    showCardNumber,
    handleCardNumberChange,
    handleExpirationChange,
    handleCvvChange,
    setShowCardNumber,
  } = usePayment();
  const [verifyCardState, verifyCardAction] = useActionState(verifyCard, null);
  const router = useRouter();

  useEffect(() => {
    if (selectedCard) {
      setIsModalOpen(true);
    }
    if (verifyCardState?.success) {
      router.refresh();
      setIsModalOpen(false);
    }
  }, [selectedCard, verifyCardState, router]);

  const handleVerifyCard = () => {
    const formData = new FormData();
    formData.set("cardNumber", cardNumber);
    formData.set("expiration", expiration);
    formData.set("cvv", cvv);
    startTransition(() => {
      verifyCardAction(formData);
    });
  };

  return (
    <Sheet open={isModalOpen} onOpenChange={setIsModalOpen} key="right">
      <SheetContent className="w-[512px] sm:max-w-lg">
        <SheetHeader className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {selectedCard === "credit" ? (
                <Image
                  src="/images/payment/credit-card.png"
                  alt="Tarjeta de crédito"
                  width={36}
                  height={24}
                />
              ) : (
                <Image
                  src="/images/payment/debit-card.png"
                  alt="Tarjeta de débito"
                  width={36}
                  height={24}
                />
              )}
              <SheetTitle>
                <span className="ml-2 font-semibold text-gray-700">
                  {selectedCard === "credit"
                    ? "Tarjeta de crédito"
                    : "Tarjeta de débito"}
                </span>
              </SheetTitle>
            </div>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          <div>
            <Label
              htmlFor="card-number"
              className="text-sm text-gray-600 block mb-1"
            >
              Número de tarjeta
            </Label>
            <div className="relative">
              <Input
                className="border-x-0 border-t-0 border-b-[1px] pr-10"
                id="card-number"
                type={showCardNumber ? "text" : "password"}
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => {
                  handleCardNumberChange(e);
                  startTransition(() => {
                    verifyCardAction(new FormData());
                  });
                }}
              />
              <button
                type="button"
                onClick={() => setShowCardNumber(!showCardNumber)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showCardNumber ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="expiration"
                className="text-sm text-gray-600 block mb-1"
              >
                Expiración
              </Label>
              <Input
                className="border-x-0 border-t-0 border-b-[1px]"
                id="expiration"
                type="text"
                placeholder="MM/AA"
                value={expiration}
                onChange={(e) => {
                  handleExpirationChange(e);
                  startTransition(() => {
                    verifyCardAction(new FormData());
                  });
                }}
                maxLength={5}
              />
            </div>
            <div>
              <Label htmlFor="cvv" className="text-sm text-gray-600 block mb-1">
                Código de seguridad
              </Label>
              <Input
                className="border-x-0 border-t-0 border-b-[1px]"
                id="cvv"
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => {
                  handleCvvChange(e);
                  startTransition(() => {
                    verifyCardAction(new FormData());
                  });
                }}
                maxLength={3}
              />
            </div>
          </div>

          {verifyCardState?.error && (
            <div className="text-sm text-red-600 text-center px-2">
              {verifyCardState.error}
            </div>
          )}
          <div className="text-sm text-gray-600 text-center px-2">
            Validaremos tu tarjeta, continua el pago con la tarjeta escogida, el
            tiempo es limitado para continuar.
          </div>

          <Button
            type="submit"
            variant="clean"
            onClick={handleVerifyCard}
            className={`w-full rounded-full text-lg py-3 font-medium font-bold ${
              !cardNumber || !expiration || !cvv
                ? "bg-gray-300  text-gray-700"
                : "bg-[#343E49] text-white"
            }`}
            disabled={
              !cardNumber || !expiration || !cvv || !!verifyCardState?.error
            }
          >
            Validar tarjeta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

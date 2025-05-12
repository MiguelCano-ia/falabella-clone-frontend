"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Products } from "@/interfaces/categories/product";
import { formatCOP } from "@/lib/formatCop";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useOrderSummary } from "../hooks/useOrderSummary";
import { startTransition, useActionState, useEffect, useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { getCookie, hasCookie, setCookie } from "cookies-next/client";
import { pay } from "@/actions/checkout/payment/pay";
interface Props {
  products: Products[];
}

export const OrderSummary = ({ products }: Props) => {
  const [statePay, payAction] = useActionState(pay, undefined);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [goToPayment, setGoToPayment] = useState(false);
  const router = useRouter();

  const pathName = usePathname();
  const {
    productsSummary,
    quantitySummary,
    total,
    discounts,
    totalDiscount,
    specialDiscounts,
    totalSpecialDiscount,
    totalDiscountOnly,
  } = useOrderSummary(products);

  const hasExceededStock = () => {
    return products.some((product) => +product.cartQuantity! > product.stock);
  };

  const handlePayment = () => {
    if (!hasCookie("session_payment")) return;

    const { token, payment_method_id } = JSON.parse(
      getCookie("session_payment") as string
    );
    const formData = new FormData();
    formData.set("token", token);
    formData.set("payment_id", payment_method_id);
    formData.set("precio_total", (total - totalDiscount).toString());

    startTransition(() => {
      payAction(formData);
    });
  };

  useEffect(() => {
    if (pathName === "/falabella-co/checkout/delivery") {
      setGoToPayment(true);
    } else {
      setGoToPayment(false);
    }
  }, [pathName]);

  useEffect(() => {
    if (statePay?.success) {
      setCookie("order_confirmation", "true", {
        maxAge: 60,
      });
      router.replace("/falabella-co/checkout/orderConfirmation");
    }
  }, [statePay]);

  return (
    <div className="w-auto h-auto bg-white rounded-[10px] shadow-sm px-[22.5px] py-[16px] flex flex-col gap-5">
      {total > 0 && (
        <div className="text-sm text-[#333] space-y-2">
          <div className="flex justify-between border-b-[1px] pb-4">
            <span className="text-[#333] font-bold text-[14px]">
              Productos ({quantitySummary})
            </span>
            <span className="font-bold">{formatCOP(total.toString())}</span>
          </div>

          {discounts.length > 0 && (
            <Accordion type="single" collapsible>
              <AccordionItem value="descuentos" className="border-0">
                <AccordionTrigger
                  className={`justify-between [&>svg]:hidden hover:no-underline py-0 pb-2 ${
                    accordionOpen ? "border-b-0" : "border-b-[1px]"
                  }`}
                  onClick={() => setAccordionOpen(!accordionOpen)}
                >
                  <span className="text-[#333] font-bold text-[14px]">
                    Descuentos ({discounts.length})
                  </span>
                  <div className="flex items-center">
                    <span className="text-[#30871F] font-semibold text-sm">
                      - {formatCOP(totalDiscount.toString())}
                    </span>
                    <ChevronDown className="w-7 h-7" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3 text-[14px] border-b-[1px]">
                  {productsSummary.map((product) => {
                    if (product.discount_price) {
                      const words = product.title.split(" ");
                      const label = words.slice(0, 3).join(" ");

                      return (
                        <div
                          className="flex justify-between gap-2"
                          key={product.id_product}
                        >
                          <span className="text-[#333]">{label}</span>
                          <span className="text-[#30871F] font-bold">
                            -{" "}
                            {formatCOP(
                              (
                                (Number(product.price) -
                                  Number(product.discount_price)) *
                                +product.cartQuantity!
                              ).toString()
                            )}
                          </span>
                        </div>
                      );
                    }
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          <div className="flex justify-between pt-2">
            <span className="text-[#333]">Total:</span>
            <span className="text-[14px]">
              {formatCOP((total - totalDiscount).toString())}
            </span>
          </div>

          {specialDiscounts.length > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-bold">
                Total con Falabella:
              </span>
              <div className="flex items-center gap-1">
                <Image
                  src="/images/category/specialdiscount.png"
                  alt="cmr"
                  width={61}
                  height={20}
                />
                <span className="text-[#D60303] font-bold text-[14px]">
                  {formatCOP(
                    (
                      total -
                      totalSpecialDiscount -
                      totalDiscountOnly
                    ).toString()
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {statePay?.error && (
        <div className="text-[#D60303]  text-[14px">{statePay.error}</div>
      )}

      <div className="pb-[18px]">
        {pathName === "/falabella-co/checkout/payment" ? (
          <Button
            className="bg-[#343E49] hover:bg-[#2F3842] text-white text-[18px] rounded-full w-full h-[42px] font-bold"
            onClick={handlePayment}
          >
            Continuar
          </Button>
        ) : (
          <Button
            disabled={total <= 0 || hasExceededStock()}
            className="bg-[#343E49] hover:bg-[#2F3842] text-white text-[18px] rounded-full w-full h-[42px] font-bold"
            onClick={() => {
              if (pathName === "/falabella-co/checkout/delivery") {
                redirect("/falabella-co/checkout/payment");
              } else {
                redirect("/falabella-co/checkout/delivery");
              }
            }}
          >
            {goToPayment ? "Ir a pagar" : "Continuar compra"}
          </Button>
        )}
      </div>
    </div>
  );
};

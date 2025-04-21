import { Products } from "@/interfaces/categories/product";
import { useSelectionStore } from "@/store/basket/selection.store";

export const useOrderSummary = (products: Products[]) => {
  const selections = useSelectionStore((state) => state.selections);

  const allowedIds = Object.values(selections).flatMap((mapping) =>
    Object.entries(mapping)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, ok]) => ok)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(([id, _]) => +id)
  );

  const productsSummary = products.filter((p) =>
    allowedIds.includes(p.id_product)
  );

  const quantitySummary = productsSummary.reduce(
    (acc, p) => acc + Number(p.cartQuantity!),
    0
  );

  const total = productsSummary.reduce(
    (acc, p) => acc + Number(p.price) * +p.cartQuantity!,
    0
  );

  const discounts = productsSummary.filter((p) => p.discount_price);

  const totalDiscount = discounts.reduce(
    (acc, p) =>
      acc + (Number(p.price) - Number(p.discount_price)) * +p.cartQuantity!,
    0
  );

  const specialDiscounts = productsSummary.filter((p) => p.special_price);

  const totalSpecialDiscount = specialDiscounts.reduce(
    (acc, p) =>
      acc + (Number(p.price) - Number(p.special_price)) * +p.cartQuantity!,
    0
  );

  return {
    productsSummary,
    quantitySummary,
    total,
    discounts,
    totalDiscount,
    specialDiscounts,
    totalSpecialDiscount,
  };
};

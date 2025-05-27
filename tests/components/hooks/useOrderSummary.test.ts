// tests/hooks/useOrderSummary.test.ts
import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useOrderSummary } from "@/components/basket/hooks/useOrderSummary";
import type { Products } from "@/interfaces/categories/product";
import { productsMock } from "../../mocks/products.mocks";

const fakeSelections = { "1": true, "2": false, "3": true };
vi.mock("@/store/basket/selection.store", () => ({
  useSelectionStore: (selector: (state: unknown) => unknown) =>
    selector({ selections: { default: fakeSelections } }),
}));

describe("useOrderSummary", () => {
  const products: Products[] = productsMock;

  it("should return the correct productsSummary, quantitySummary, total, discounts, totalDiscount, totalDiscountOnly, specialDiscounts, totalSpecialDiscount", () => {
    const { result } = renderHook(() => useOrderSummary(products));

    expect(result.current.productsSummary.map((p) => p.id_product)).toEqual([
      1, 3,
    ]);

    expect(result.current.quantitySummary).toBe(5);
    expect(result.current.total).toBe(110);
    expect(result.current.discounts.map((p) => p.id_product)).toEqual([1, 3]);
    expect(result.current.totalDiscount).toBe(19);
    expect(result.current.totalDiscountOnly).toBe(4);
    expect(result.current.specialDiscounts.map((p) => p.id_product)).toEqual([
      3,
    ]);

    expect(result.current.totalSpecialDiscount).toBe(21);
  });
});

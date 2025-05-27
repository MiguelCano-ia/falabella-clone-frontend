import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

const addToCartMock = vi.fn();
const updateCartQtyMock = vi.fn();

vi.mock("@/actions/basket/cart", () => ({
  addToCart: (id: string) => addToCartMock(id),
  updateCartQty: (id: number, qty: number) => updateCartQtyMock(id, qty),
}));

const closeCartMock = vi.fn();

vi.mock("@/store/ui", () => ({
  useUIStore: (selector: (state: unknown) => unknown) =>
    selector({
      isCartOpen: true,
      closeCart: closeCartMock,
    }),
}));

const removeProductMock = vi.fn();
vi.mock("@/store/basket/selection.store", () => ({
  useSelectionStore: (selector: (state: unknown) => unknown) =>
    selector({ removeProduct: removeProductMock }),
}));

const productMock = {
  id_product: 1,
  price: "10",
  cartQuantity: "2",
  discount_price: "8",
  special_price: null,
  sold_by: "seller",
  brand: "MiMarca",
  title: "MiProducto",
  discount_percentage: "0",
  special_discount_percentage: null,
  images: ["img1.jpg"],
  specifications: {},
  category_slug: "",
  section_slug: "",
  subcategory_slug: "",
  rating: "4.5",
  description: "",
  stock: 10,
  created_at: new Date(),
  updated_at: new Date(),
};
vi.mock("@/store/basket/cart.store", () => ({
  useCartStore: (selector: (state: unknown) => unknown) =>
    selector({ cartProduct: productMock }),
}));

// Mock para el formateo de COP
vi.mock("@/lib/formatCop", () => ({
  formatCOP: (v: string) => `COP${v}`,
}));

vi.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: { [key: string]: number }) => <img {...props} />,
}));

import { CartModal } from "@/components/basket/cart/CartModal";

describe("CartModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render product data and allow +/- according to quantity", () => {
    render(<CartModal cart={{ 1: 2 }} />);

    expect(screen.getByText("MiMarca")).toBeInTheDocument();
    expect(screen.getByText("MiProducto")).toBeInTheDocument();

    expect(screen.getByText("COP8")).toBeInTheDocument();
    expect(screen.getByText("-0%")).toBeInTheDocument();
    expect(screen.getByText("COP10")).toBeInTheDocument();

    const minusBtn = screen.getByRole("button", { name: "disminuir" });
    const plusBtn = screen.getByRole("button", { name: "aumentar" });
    expect(minusBtn).toBeEnabled();
    expect(plusBtn).toBeEnabled();

    fireEvent.click(minusBtn);
    expect(updateCartQtyMock).toHaveBeenCalledWith(1, 1);
    expect(removeProductMock).not.toHaveBeenCalled();

    fireEvent.click(plusBtn);
    expect(addToCartMock).toHaveBeenCalledWith("1");

    const maxText = screen.getByText("Máximo 10 unidades.");
    expect(maxText).toHaveClass("text-[#888]");

    fireEvent.click(screen.getByTitle("modal"));
    expect(closeCartMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Seguir comprando"));
    expect(closeCartMock).toHaveBeenCalledTimes(2);
  });

  it("should disable minus button when quantity is 1", () => {
    render(<CartModal cart={{ 1: 1 }} />);
    expect(screen.getByRole("button", { name: "disminuir" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "aumentar" })).toBeEnabled();
  });

  it("should disable plus button and paint the maximum text in red when qty >= stock", () => {
    render(<CartModal cart={{ 1: 10 }} />);
    expect(screen.getByRole("button", { name: "aumentar" })).toBeDisabled();
    expect(screen.getByText("Máximo 10 unidades.")).toHaveClass(
      "h-[32px] font-normal text-[12px] leading-[14.4px] mt-2 text-[#888]"
    );
  });
});

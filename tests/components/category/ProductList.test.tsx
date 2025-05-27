import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "@/components/category/products/ProductCard";
import type { Products } from "@/interfaces/categories/product";

const openCartMock = vi.fn();
const setCartProductMock = vi.fn();
const selectProductMock = vi.fn();
const addToCartMock = vi.fn(() => Promise.resolve());
const refreshMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: refreshMock }),
}));

vi.mock("@/store/ui", () => ({
  useUIStore: (selector: (state: unknown) => unknown) =>
    selector({ openCart: openCartMock }),
}));

vi.mock("@/store/basket/cart.store", () => ({
  useCartStore: (selector: (state: unknown) => unknown) =>
    selector({ setCartProduct: setCartProductMock }),
}));

vi.mock("@/store/basket/selection.store", () => ({
  useSelectionStore: (selector: (state: unknown) => unknown) =>
    selector({ selectProduct: selectProductMock }),
}));

vi.mock("@/actions/basket/cart", () => ({
  addToCart: () => addToCartMock(),
}));

vi.mock("next/link", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => <a {...props} />,
}));

vi.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: any) => <img {...props} />,
}));

const product: Products = {
  id_product: 5,
  images: ["img1.jpg"],
  brand: "BrandX",
  title: "Product Title",
  sold_by: "SellerX",
  price: "100",
  discount_price: "",
  special_price: null,
  discount_percentage: "",
  special_discount_percentage: null,
  specifications: {},
  category_slug: "",
  section_slug: "",
  subcategory_slug: "",
  rating: "5",
  description: "",
  stock: 10,
  created_at: new Date(),
  updated_at: new Date(),
};

describe("ProductCard ", () => {
  it("should show the 'Agregar al Carro' button only when hovering", () => {
    render(<ProductCard product={product} />);

    const btn = screen.getByRole("button", { name: "Agregar al Carro" });
    const link = screen.getByRole("link");

    expect(btn).toHaveClass("opacity-0");

    fireEvent.mouseEnter(link);
    expect(btn).toHaveClass("opacity-100");

    fireEvent.mouseLeave(link);
    expect(btn).toHaveClass("opacity-0");
  });

  it("should call all actions when clicking 'Agregar al Carro'", async () => {
    render(<ProductCard product={product} />);

    fireEvent.mouseEnter(screen.getByRole("link"));
    const btn = screen.getByRole("button", { name: "Agregar al Carro" });

    fireEvent.click(btn);

    await Promise.resolve();

    expect(refreshMock).toHaveBeenCalled();
    expect(selectProductMock).toHaveBeenCalledWith(
      product.sold_by,
      product.id_product.toString()
    );
    expect(setCartProductMock).toHaveBeenCalledWith(product);
    expect(openCartMock).toHaveBeenCalled();
  });
});

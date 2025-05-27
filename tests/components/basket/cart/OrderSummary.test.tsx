import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { OrderSummary } from "@/components/basket/cart/OrderSummary";
import { Products } from "@/interfaces/categories/product";
import { usePathname } from "../../../setup";

const mockProducts: Products[] = [
  {
    id_product: 1,
    brand: "Test Brand",
    title: "Test Product",
    price: "100000",
    discount_percentage: "0",
    discount_price: "100000",
    special_discount_percentage: null,
    special_price: null,
    images: ["test-image.jpg"],
    specifications: {},
    category_slug: "test-category",
    section_slug: "test-section",
    subcategory_slug: "test-subcategory",
    sold_by: "Test Seller",
    rating: "4.5",
    description: "Test Description",
    stock: 10,
    created_at: new Date(),
    updated_at: new Date(),
    cartQuantity: "1",
  },
];

describe("OrderSummary", () => {
  describe("pathname is '/falabella-co/basket'", () => {
    it("should render the component", () => {
      render(<OrderSummary products={mockProducts} />);
      expect(
        screen.getByRole("button", { name: "Continuar compra" })
      ).toBeInTheDocument();
    });

    it("should button be disabled when there are no products", () => {
      render(<OrderSummary products={[]} />);
      expect(
        screen.getByRole("button", { name: "Continuar compra" })
      ).toBeDisabled();
    });
  });

  describe("pathname is '/falabella-co/checkout/delivery'", () => {
    it("should button text be 'Ir a pagar'", () => {
      usePathname.mockReturnValue("/falabella-co/checkout/delivery");
      render(<OrderSummary products={mockProducts} />);
      expect(screen.getByText("Ir a pagar")).toBeInTheDocument();
    });
  });

  describe("pathname is '/falabella-co/checkout/payment'", () => {
    it("should button text be 'Continuar'", () => {
      usePathname.mockReturnValue("/falabella-co/checkout/payment");
      render(<OrderSummary products={mockProducts} />);
      expect(screen.getByText("Continuar")).toBeInTheDocument();
    });
  });
});

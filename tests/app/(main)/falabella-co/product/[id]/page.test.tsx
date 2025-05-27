import React from "react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/actions/basket/cart", () => ({
  getCart: vi.fn(() => Promise.resolve({})),
}));

vi.mock("@/components/product/product-details/ProductDetailPage", () => ({
  ProductDetailPage: () => <div data-testid="product-detail-page" />,
}));

vi.mock("@/components/product", () => ({
  Specifications: () => <div data-testid="specifications" />,
  SimilarOptions: () => <div data-testid="similar-options" />,
  ProductFeedback: () => <div data-testid="product-feedback" />,
}));

beforeAll(() => {
  global.fetch = vi.fn().mockResolvedValue({
    json: () =>
      Promise.resolve({
        specifications: { foo: "bar" },
      }),
  });
});

import Page from "@/app/(main)/falabella-co/product/[id]/page";

describe("Product Page", () => {
  it("should render the page with the correct specifications, similar options and product feedback", async () => {
    const jsx = await Page({ params: Promise.resolve({ id: 42 }) });
    render(jsx);

    expect(screen.getByTestId("product-detail-page")).toBeInTheDocument();
    expect(screen.getByTestId("specifications")).toBeInTheDocument();
    expect(screen.getByTestId("similar-options")).toBeInTheDocument();
    expect(screen.getByTestId("product-feedback")).toBeInTheDocument();
  });
});

// tests/app/collection/Page.test.tsx
import React from "react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/components", () => ({
  Breadcrumbs: ({ slugs }: { slugs: string[] }) => (
    <div data-testid="breadcrumbs">{slugs.join(",")}</div>
  ),
  CategoryList: ({ slugs }: { slugs: string[] }) => (
    <div data-testid="category-list">{slugs.join(",")}</div>
  ),
  SideBarCateogory: ({
    slugs,
    products,
  }: {
    slugs: string[];
    products: Products[];
  }) => (
    <div data-testid="sidebar">{`${slugs.join(",")}|${products.length}`}</div>
  ),
  ProductSection: ({ products }: { products: Products[] }) => (
    <div data-testid="product-section">{products.length}</div>
  ),
}));

beforeAll(() => {
  process.env.API_URL = "https://api.test";
  const fakeResponse = {
    info: { banner: "b.jpg", featured: ["x"] },
    products: [{ id: 1 }, { id: 2 }],
  };
  global.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve(fakeResponse),
  });
});

import Page from "@/app/(main)/falabella-co/products/[...slug]/page";
import { Products } from "@/interfaces/categories/product";

describe("Collection Page", () => {
  it("should render the page with the correct slugs", async () => {
    const jsx = await Page({
      params: Promise.resolve({ slug: ["cat", "sub", "ver_todo"] }),
    });

    render(jsx);

    expect(screen.getByTestId("breadcrumbs")).toHaveTextContent("cat,sub");
    expect(screen.getByTestId("category-list")).toHaveTextContent("cat,sub");

    expect(screen.getByTestId("sidebar")).toHaveTextContent("cat,sub|2");
    expect(screen.getByTestId("product-section")).toHaveTextContent("2");
  });
});

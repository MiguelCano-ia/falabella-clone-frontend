import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/components/orders/MyOrders", () => ({
  MyOrders: ({ orders }: { orders: { id: number }[] }) => (
    <div data-testid="myorders">{orders.length}</div>
  ),
}));

import { UserOrders } from "@/components/orders/UserOrders";

describe("UserOrders", () => {
  it("should fetch and render <MyOrders /> with the received data", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ orders: [{ id: 1 }] }),
    });

    const jsx = await UserOrders({ userId: 99 });
    render(jsx);

    const placeholder = screen.getByTestId("myorders");
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent("1");
  });
});

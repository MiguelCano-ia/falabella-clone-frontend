import React from "react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { render, screen } from "@testing-library/react";

import { getUser } from "@/actions/auth/helpers/getUser";
vi.mock("@/actions/auth/helpers/getUser");

vi.mock("@/components/shared/not-authenticated/NotAuthenticated", () => ({
  NotAuthenticated: () => <div data-testid="na" />,
}));

vi.mock("@/components/orders/UserOrders", () => ({
  UserOrders: ({ userId }: { userId: number }) => (
    <div data-testid="uo">{userId}</div>
  ),
}));

import Page from "@/app/(main)/falabella-co/orders/page";

describe("Page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should show NotAuthenticated if getUser() returns null", async () => {
    (getUser as Mock).mockResolvedValueOnce(null);

    const jsx = await Page();
    render(jsx);

    expect(screen.getByTestId("na")).toBeInTheDocument();
  });

  it("should show UserOrders if getUser() returns a user", async () => {
    (getUser as Mock).mockResolvedValueOnce({ user_id: 7 });

    const jsx = await Page();
    render(jsx);

    const uo = screen.getByTestId("uo");
    expect(uo).toBeInTheDocument();
    expect(uo).toHaveTextContent("7");
  });
});

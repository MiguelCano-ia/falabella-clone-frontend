import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyOrders } from "@/components/orders/MyOrders";
import { ordersMock } from "../../mocks/orders.mock";

vi.mock("@/lib/formatCop", () => ({
  formatCOP: (v: string) => `COP${v}`,
}));

vi.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: { [key: string]: number }) => <img {...props} />,
}));

const ordersMocks = ordersMock;

describe("MyOrders", () => {
  it("should render each order and its products correctly", () => {
    render(<MyOrders orders={ordersMocks} />);

    expect(screen.getByText("Compra Nº 1234567890")).toBeInTheDocument();
    expect(screen.getByText("Retira desde mañana.")).toBeInTheDocument();
    expect(screen.getByText("Solicitud recibida")).toBeInTheDocument();
  });
});

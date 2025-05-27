// tests/EmptyCart.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { EmptyCart } from "@/components/basket/cart/EmptyCart";

const openLoginMock = vi.fn();

vi.mock("@/store/ui", () => ({
  useUIStore: (selector: (state: unknown) => unknown) =>
    selector({ openLogin: openLoginMock }),
}));

const fakeUser = {
  user_id: 1,
  name: "Test",
  lastname: "Test",
  id_type: "CC",
  id_number: "1234567890",
  email: "test@test.com",
  phone: "1234567890",
};

describe("EmptyCart", () => {
  beforeEach(() => openLoginMock.mockClear());

  it("should show message 'Iniciar Sesión' button if user is null", () => {
    render(<EmptyCart user={null} />);
    expect(screen.getByText("Tu Carro está vacío")).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: "Iniciar Sesión" });
    fireEvent.click(btn);
    expect(openLoginMock).toHaveBeenCalledOnce();
    expect(screen.getByText("¿No tienes cuenta?")).toBeInTheDocument();
    expect(screen.getByText("Regístrate")).toHaveAttribute(
      "href",
      "/falabella-co/myaccount/registration"
    );
  });

  it("should not call openLogin if user exists and click on 'Ver Ofertas' button", () => {
    render(<EmptyCart user={fakeUser} />);
    expect(screen.getByText("Tu Carro está vacío")).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: "Ver Ofertas" });
    fireEvent.click(btn);
    expect(openLoginMock).not.toHaveBeenCalled();
    expect(screen.queryByText("¿No tienes cuenta?")).toBeNull();
  });
});

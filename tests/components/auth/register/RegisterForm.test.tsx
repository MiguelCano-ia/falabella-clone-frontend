import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { useFormMock, redirect } from "../../../setup";

describe("RegisterForm", () => {
  beforeEach(() => {
    useFormMock.mockReturnValue({
      register: vi.fn(),
      handleSubmit: vi.fn((callback) => callback),
      watch: vi.fn(() => ({ phone: "", name: "", documentType: "CC" })),
      setValue: vi.fn(),
      clearErrors: vi.fn(),
      formState: { errors: {} },
    });
  });

  it("renders phone input", () => {
    render(<RegisterForm />);
    expect(screen.getByText("+57")).toBeInTheDocument();
  });

  it("displays validation error", () => {
    useFormMock.mockReturnValueOnce({
      register: vi.fn(),
      handleSubmit: vi.fn(),
      watch: vi.fn(() => ({ phone: "" })),
      setValue: vi.fn(),
      clearErrors: vi.fn(),
      formState: {
        errors: {
          phone: { message: "Teléfono requerido" },
        },
      },
    });

    render(<RegisterForm />);
    expect(screen.getByText("Teléfono requerido")).toBeInTheDocument();
  });

  it("should redirect to /falabella-co after successful registration", async () => {
    vi.mock("@/actions/auth/register", () => ({
      registerAction: vi.fn().mockResolvedValue({ authenticated: true }),
    }));

    render(<RegisterForm />);

    const form = screen.getByRole("form");
    await act(async () => {
      form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(() => {
      expect(redirect).toHaveBeenCalledWith("/falabella-co");
    });
  });
});

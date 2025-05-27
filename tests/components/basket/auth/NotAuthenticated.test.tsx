import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { NotAuthenticated } from "@/components/basket/auth/NotAuthenticated";

const openLoginMock = vi.fn();

vi.mock("@/store/ui", () => ({
  useUIStore: (selector: (state: unknown) => unknown) =>
    selector({ openLogin: openLoginMock }),
}));

describe("NotAuthenticated", () => {
  beforeEach(() => {
    openLoginMock.mockClear();
  });

  it("should call openLogin in mount", () => {
    render(<NotAuthenticated />);
    expect(openLoginMock).toHaveBeenCalledOnce();
  });
});

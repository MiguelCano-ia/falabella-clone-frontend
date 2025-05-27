import "@testing-library/jest-dom";
import { vi } from "vitest";

export const useFormMock = vi.fn(() => ({
  register: vi.fn(),
  handleSubmit: vi.fn(),
  watch: vi.fn(() => ({})),
  setValue: vi.fn(),
  clearErrors: vi.fn(),
  formState: { errors: {} },
}));

vi.mock("react-hook-form", () => {
  return {
    useForm: useFormMock,
  };
});

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

export const usePathname = vi.fn(() => "");
export const useRouter = vi.fn(() => ({
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
  back: vi.fn(),
  refresh: vi.fn(),
}));

export const redirect = vi.fn();
vi.mock("next/navigation", () => {
  return {
    usePathname,
    useRouter,
    redirect,
  };
});

vi.mock("cookies-next", () => ({
  hasCookie: vi.fn(() => false),
  getCookie: vi.fn(),
  setCookie: vi.fn(),
}));

vi.mock("server-only", () => ({}));

export const getUser = vi.fn();

vi.mock("@/actions/auth/helpers/getUser", () => ({
  getUser: () => getUser(),
}));

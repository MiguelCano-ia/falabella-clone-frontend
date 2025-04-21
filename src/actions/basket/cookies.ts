import { cookies } from "next/headers";

export const getCookieCart = async () => {
  const cookieStore = await cookies();
  if (cookieStore.has("cart")) {
    const cookieCart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");
    return cookieCart;
  }

  return {};
};

export const addProductToCart = async (id: string) => {
  const cookieStore = await cookies();
  const cookieCart = await getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }
  console.log("Estado nuevo del carrito:", cookieCart);
  cookieStore.set("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = async (id: string) => {
  const cookieStore = await cookies();
  const cookieCart = await getCookieCart();
  if (cookieCart[id] === 1) {
    delete cookieCart[id];
  } else {
    cookieCart[id] -= 1;
  }

  cookieStore.set("cart", JSON.stringify(cookieCart));
};

export const deleteProductFromCart = async (id: string) => {
  const cookieStore = await cookies();
  const cookieCart = await getCookieCart();
  delete cookieCart[id];
  cookieStore.set("cart", JSON.stringify(cookieCart));
};

export const clearCookieCart = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("cart");
};

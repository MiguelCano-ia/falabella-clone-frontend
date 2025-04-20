import { API, Body } from "@/interfaces/basket/cart";
import { getUser } from "../auth/helpers/getUser";
import { addProductToCart, clearCookieCart, getCookieCart } from "./cookies";

async function call(endpoint: string, body: Body) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function mergeGuestCart() {
  const user = await getUser();
  if (!user) return;
  const guestCart = getCookieCart();
  await Promise.all(
    Object.entries(guestCart).map(([prodId, qty]) =>
      call(API.add, {
        userId: user.user_id.toString(),
        productId: prodId,
        quantity: qty.toString(),
      })
    )
  );
  clearCookieCart();
}

export async function getCart() {
  const user = await getUser();
  if (!user) {
    return getCookieCart();
  } else {
    const { data } = await call(API.get, { userId: user.user_id.toString() });
    return data;
  }
}

export async function addToCart(productId: string, quantity?: string) {
  const user = await getUser();
  if (!user) {
    addProductToCart(productId);
  } else {
    await call(API.add, {
      userId: user.user_id.toString(),
      productId,
      quantity: quantity || "1",
    });
  }
}

export async function removeFromCart(productId: string) {
  const user = await getUser();
  if (user) {
    await call(API.del, {
      userId: user.user_id.toString(),
      productId,
    });
  }
}

export async function updateCartQty(productId: string, quantity: string) {
  const user = await getUser();
  if (!user) {
    addProductToCart(productId);
  } else {
    await call(API.put, {
      userId: user.user_id.toString(),
      productId,
      quantity,
    });
  }
}

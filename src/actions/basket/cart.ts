"use server";

import { API, Body } from "@/interfaces/basket/cart";
import { getUser } from "../auth/helpers/getUser";
import {
  addProductToCart,
  clearCookieCart,
  deleteProductFromCart,
  removeProductFromCart,
} from "./cookies";
import { cookies } from "next/headers";

async function call(endpoint: string, body: Body, method: string) {
  const res = await fetch(endpoint, {
    method,
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
  const cookieStore = cookies();
  const cart: Record<string, number> = JSON.parse(
    (await cookieStore).get("cart")?.value ?? "{}"
  );
  await Promise.all(
    Object.entries(cart).map(([prodId, qty]) =>
      call(
        API.add,
        {
          userId: user.user_id.toString(),
          productId: prodId,
          quantity: qty.toString(),
        },
        "POST"
      )
    )
  );
  clearCookieCart();
}

export async function getCart() {
  const user = await getUser();
  if (!user) {
    const cookieStore = cookies();
    const cart = JSON.parse((await cookieStore).get("cart")?.value ?? "{}");
    return cart;
  } else {
    const data = await call(
      API.get,
      { userId: user.user_id.toString() },
      "POST"
    );
    return data;
  }
}

export async function addToCart(productId: string, quantity?: string) {
  const user = await getUser();
  if (!user) {
    addProductToCart(productId);
  } else {
    await call(
      API.add,
      {
        userId: user.user_id.toString(),
        productId,
        quantity: quantity || "1",
      },
      "POST"
    );
  }
}

export async function deleteFromCart(productId: string) {
  const user = await getUser();
  if (!user) {
    deleteProductFromCart(productId);
  } else {
    await call(
      API.del,
      {
        userId: user.user_id.toString(),
        productId,
      },
      "DELETE"
    );
  }
}

export async function updateCartQty(productId: number, quantity: number) {
  const user = await getUser();
  if (!user) {
    removeProductFromCart(productId.toString());
  } else {
    await call(
      API.put,
      {
        userId: user.user_id,
        productId,
        quantity,
      },
      "PUT"
    );
  }
}

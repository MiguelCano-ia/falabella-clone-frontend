"use server";

import { getUser } from "@/actions/auth/helpers/getUser";
import { getCart } from "@/actions/basket/cart";

export async function pay(_: unknown, formData: FormData) {
  const user = await getUser();
  const cart = await getCart();

  if (!user) {
    return { error: "User not found" };
  }

  const { token, payment_id, precio_total } = Object.fromEntries(formData);

  try {
    const response = await fetch(
      `${process.env.API_URL}/cart/process_payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: cart,
          token,
          tipo: payment_id,
          precio_total,
          user_id: user.user_id,
        }),
      }
    );

    if (response.ok) {
      return { success: true };
    }
  } catch (error) {
    console.log(error);
  }

  console.log(token, payment_id, precio_total, user, cart);
}

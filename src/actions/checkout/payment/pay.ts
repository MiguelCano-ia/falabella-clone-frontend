"use server";

import { getUser } from "@/actions/auth/helpers/getUser";
import { getCart } from "@/actions/basket/cart";

export async function pay(_: unknown, formData: FormData) {
  const user = await getUser();
  const cart = await getCart();

  if (!user) {
    return { error: "Usuario no encontrado" };
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

    if (!response.ok) {
      return {
        error:
          "Hubo un error a la hora del pago, revise su tarjeta y validela denuevo.",
      };
    }

    return { success: true };
  } catch {
    return {
      error:
        "Hubo un error a la hora del pago, revise su tarjeta y validela denuevo.",
    };
  }
}

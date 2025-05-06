"use server";

import { createSession } from "@/lib/session";
import { mergeGuestCart } from "../basket/cart";

export async function checkoutCode(email: string) {
  const result = await fetch(`${process.env.API_URL}/send_code_purchase`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (result.errors) {
    return {
      errors: Object.fromEntries(
        result.errors.map(
          ({ field, message }: { field: string; message: string }) => [
            field,
            message,
          ]
        )
      ),
    };
  }

  return {
    codeSent: true,
  };
}

export async function checkoutCodeVerify(email: string, code: string) {
  const result = await fetch(`${process.env.API_URL}/verify_purchase_code`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ email, code }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (result.errors) {
    return {
      errors: Object.fromEntries(
        result.errors.map(
          ({ field, message }: { field: string; message: string }) => [
            field,
            message,
          ]
        )
      ),
    };
  }

  await createSession(result.token);
  await mergeGuestCart();

  return {
    codeVerified: true,
  };
}

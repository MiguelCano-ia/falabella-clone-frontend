"use server";

import {
  CardData,
  CardTokenResponse,
  PaymentMethod,
} from "@/interfaces/checkout/payment/card";
import { cookies } from "next/headers";

const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;

export async function createSessionPayment(
  token: string,
  payment_method_id: string
) {
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set(
    "session_payment",
    JSON.stringify({ token, payment_method_id }),
    {
      expires: expiresAt,
    }
  );
}

async function generateCardToken(
  cardData: CardData
): Promise<CardTokenResponse> {
  const response = await fetch("https://api.mercadopago.com/v1/card_tokens", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      site_id: "MCO",
      ...cardData,
    }),
  });
  return await response.json();
}

async function getCardBrand(bin: string): Promise<PaymentMethod> {
  const response = await fetch(
    `https://api.mercadopago.com/v1/payment_methods/search?bins=${bin}&marketplace=NONE`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data.results[0];
}

export async function verifyCard(_: unknown, formData: FormData) {
  const cardNumber = formData.get("cardNumber") as string;
  const expiration = formData.get("expiration") as string;
  const cvv = formData.get("cvv") as string;

  if (!cardNumber || !expiration || !cvv) {
    return { error: "" };
  }

  const cardData: CardData = {
    card_number: cardNumber.split(" ").join(""),
    expiration_month: expiration.split("/")[0],
    expiration_year: "20" + expiration.split("/")[1],
    security_code: cvv,
    cardholder: {
      name: "APRO",
      identification: { type: "CC", number: "123456789" },
    },
  };

  try {
    const { id: token, first_six_digits: bin } = await generateCardToken(
      cardData
    );
    const { id: payment_method_id } = await getCardBrand(bin);
    await createSessionPayment(token, payment_method_id);
    return { success: true };
  } catch {
    return { error: "Error al verificar la tarjeta" };
  }
}

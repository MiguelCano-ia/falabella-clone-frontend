"use server";

import { getUser } from "@/actions/auth/helpers/getUser";
import { Address } from "@/interfaces/checkout/delivery/address";

export async function getAddress(): Promise<Address | undefined> {
  const user = await getUser();
  if (!user) return;
  const address = await fetch(`${process.env.API_URL}/get_addresses`, {
    method: "POST",
    body: JSON.stringify({ userId: user.user_id.toString() }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return address.json();
}

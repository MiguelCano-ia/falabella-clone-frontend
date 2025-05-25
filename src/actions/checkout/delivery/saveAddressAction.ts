"use server";

import { getUser } from "@/actions/auth/helpers/getUser";
import z from "zod";

const addressSchema = z.object({
  address: z.string(),
  apartment: z.string().optional(),
  department: z.string(),
  city: z.string(),
  neighborhood: z.string(),
});

export async function saveAddressAction(_: unknown, formData: FormData) {
  const formEntries = Object.fromEntries(formData.entries());
  const validatedFields = addressSchema.safeParse(formEntries);
  if (!validatedFields.success) {
    return {
      error: "No se pudo guardar la dirección",
    };
  }

  const user = await getUser();

  if (!user) {
    return {
      error: "No se pudo guardar la dirección",
    };
  }

  const data = {
    userId: user.user_id,
    address: {
      department: formData.get("department"),
      city: formData.get("city"),
      neighborhood: formData.get("neighborhood"),
      complement_1: formData.get("address"),
      reference: formData.get("apartment"),
    },
  };

  const result = await fetch(`${process.env.API_URL}/add_address`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!result.ok) {
    return {
      error: "No se pudo guardar la dirección",
    };
  }

  return {
    success: true,
  };
}

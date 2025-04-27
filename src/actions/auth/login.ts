"use server";

import { createSession } from "@/lib/session";
import {
  FormFields,
  FormState,
  loginFormSchema,
} from "@/validations/auth/login";
import { mergeGuestCart } from "../basket/cart";

export async function loginAction(state: FormState, data: FormFields) {
  const validatedFields = loginFormSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const result = await fetch(`${process.env.API_URL}/login`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(data),
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
    authenticated: true,
  };
}

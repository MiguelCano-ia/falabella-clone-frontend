"use server";

import { createSession } from "@/lib/session";
import {
  FormFields,
  FormState,
  registerFormSchema,
} from "@/validations/auth/register";
import { redirect } from "next/navigation";

export async function registerAction(state: FormState, data: FormFields) {
  const validatedFields = registerFormSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const result = await fetch(`${process.env.API_URL}/register`, {
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
  redirect("/");
}

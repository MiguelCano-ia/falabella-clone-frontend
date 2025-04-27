"use server";

import {
  FormFields,
  FormState,
  passwordRecoverySchema,
} from "@/validations/auth/password.recovery";

export async function passwordRecoveryAction(
  state: FormState,
  data: FormFields
) {
  const validatedFields = passwordRecoverySchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (!data.code) {
    const result = await fetch(`${process.env.API_URL}/forgot_password`, {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify({ email: data.email }),
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
      successSentCode: true,
    };
  }

  const result = await fetch(`${process.env.API_URL}/verify_reset_code`, {
    cache: "no-cache",
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

  return {
    successVerifyCode: true,
  };
}

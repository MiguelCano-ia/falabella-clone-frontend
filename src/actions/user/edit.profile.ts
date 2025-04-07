"use server";

import {
  editPersonalDataFormSchema,
  FormFields,
  FormState,
} from "@/validations/user/edit.persona.data";
import { getUser } from "../auth/helpers/getUser";

export async function editProfileAction(state: FormState, data: FormFields) {
  const validatedFields = editPersonalDataFormSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await getUser();
  console.log(validatedFields.data);

  const result = await fetch(
    `http://localhost:4000/editProfile/${user?.user_id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

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
    success: true,
  };
}

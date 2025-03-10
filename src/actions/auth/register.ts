import {
  FormFields,
  FormState,
  registerFormSchema,
} from "@/validations/auth/register";

export async function registerAction(state: FormState, data: FormFields) {
  const validatedFields = registerFormSchema.safeParse(Object.entries(data));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}

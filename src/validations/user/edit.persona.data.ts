import { z } from "zod";

export const editPersonalDataFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    })
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "Ingresa un nombre sin símbolos ni caracteres especiales"
    ),
  lastname: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    })
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "Ingresa un nombre sin símbolos ni caracteres especiales"
    ),
  lastname2: z
    .string()
    .refine((val) => !val || /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
      message: "Ingresa un nombre sin símbolos ni caracteres especiales.",
    }),
  phone: z.string().refine((value) => value.length === 10, {
    message: "Ingresa número de celular válido",
  }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        lastname?: string[];
        lastname2?: string[];
        phone?: string[];
      };
      message?: string;
    }
  | undefined;

export type FormFields = z.infer<typeof editPersonalDataFormSchema>;

import { z } from "zod";

export const registerFormSchema = z.object({
  email: z.string().email({ message: "Ingresa un correo válido." }),
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    })
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "Ingresa un nombre sin símbolos ni caracteres especiales.s"
    ),
  lastname: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    })
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "Ingresa un nombre sin símbolos ni caracteres especiales.s"
    ),
  id_type: z.string(),
  id_number: z.string().min(4, { message: "Ingresa un Carnet." }),
  phone: z.string().refine((value) => value.length === 10, {
    message: "Ingresa número de celular válido",
  }),
  password: z
    .string()
    .min(8, "Min. 8 caracteres")
    .regex(/[0-9]/, "1 número")
    .regex(/[a-z]/, "1 minúscula")
    .regex(/[A-Z]/, "1 mayúscula")
    .regex(/^\S*$/, "Sin espacio")
    .refine((value) => !/[\\'",~çñN]/.test(value), {
      message: "Sin usar \\ ' \" , ~ ç ñ N",
    }),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        name?: string[];
        lastname?: string[];
        id_type?: string[];
        id_number?: string[];
        phone?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type FormFields = z.infer<typeof registerFormSchema>;

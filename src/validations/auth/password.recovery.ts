import { z } from "zod";

export const passwordRecoverySchema = z.object({
  email: z.string().email({
    message: "Ingresa un correo electrónico válido (nombre@ejemplo.com)",
  }),
  code: z
    .string()
    .min(3, { message: "Ingresa un código verficador" })
    .optional(),
  new_password: z
    .string()
    .min(8, "Min. 8 caracteres")
    .regex(/[0-9]/, "1 número")
    .regex(/[a-z]/, "1 minúscula")
    .regex(/[A-Z]/, "1 mayúscula")
    .regex(/^\S*$/, "Sin espacio")
    .refine((value) => !/[\\'",~çñN]/.test(value), {
      message: "Sin usar \\ ' \" , ~ ç ñ N",
    })
    .optional(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        code?: string[];
        new_password?: string[];
      };
      successSentCode?: boolean;
      successVerifyCode?: boolean;
      message?: string;
    }
  | undefined;

export type FormFields = z.infer<typeof passwordRecoverySchema>;

import { z } from "zod";

export const phoneSchema = z
  .string()
  .trim()
  .max(30)
  .refine(
    (value) =>
      !value ||
      (/^[+\d\s().-]+$/.test(value) &&
        value.replace(/\D/g, "").length >= 7 &&
        value.replace(/\D/g, "").length <= 15),
    "Introduce un teléfono válido, con entre 7 y 15 dígitos."
  );
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indica tu nombre (al menos 2 caracteres).").max(100),
  email: z.string().trim().email("Introduce un email válido.").max(254),
  phone: phoneSchema,
  message: z
    .string()
    .trim()
    .min(10, "Cuéntame tu objetivo con al menos 10 caracteres.")
    .max(4000, "El mensaje no puede superar los 4000 caracteres."),
});

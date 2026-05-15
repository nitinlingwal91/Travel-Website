import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits.")
    .max(15, "Phone number must be at most 15 digits."),
  subject: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormValues, string[]>>;
  fields?: Partial<Record<keyof ContactFormValues, string>>;
};
import { z } from "zod";

export const inquirySchema = z.object({
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
  destination: z
    .string()
    .trim()
    .min(1, "Please select a destination."),
  tripType: z
    .string()
    .trim()
    .min(1, "Please select a trip type."),
  travelDate: z.string().optional(),
  groupSize: z.string().optional(),
  budgetRange: z
    .string()
    .trim()
    .min(1, "Please select a budget range."),
  notes: z.string().trim().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

export type InquiryActionState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof InquiryFormValues, string[]>>;
  fields?: Partial<Record<keyof InquiryFormValues, string>>;
};
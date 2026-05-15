"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema, type ContactActionState } from "@/lib/validations/contact";

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const rawData = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phoneNumber: String(formData.get("phoneNumber") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      errors: validated.error.flatten().fieldErrors,
      fields: rawData,
    };
  }

  try {
    await prisma.contact.create({
      data: {
        fullName: validated.data.fullName,
        email: validated.data.email,
        phoneNumber: validated.data.phoneNumber,
        subject: validated.data.subject || null,
        message: validated.data.message,
      },
    });

    return {
      success: true,
      message: "Message sent successfully.",
      errors: {},
      fields: {},
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong while saving your message.",
      fields: rawData,
    };
  }
}
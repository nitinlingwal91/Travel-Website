"use server";

import { prisma } from "@/lib/prisma";
import { inquirySchema, type InquiryActionState } from "@/lib/validations/inquiry";

export async function submitInquiry(
  _prevState: InquiryActionState,
  formData: FormData
): Promise<InquiryActionState> {
  const rawData = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phoneNumber: String(formData.get("phoneNumber") ?? ""),
    destination: String(formData.get("destination") ?? ""),
    tripType: String(formData.get("tripType") ?? ""),
    travelDate: String(formData.get("travelDate") ?? ""),
    groupSize: String(formData.get("groupSize") ?? ""),
    budgetRange: String(formData.get("budgetRange") ?? ""),
    notes: String(formData.get("notes") ?? ""),
  };

  const validated = inquirySchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      errors: validated.error.flatten().fieldErrors,
      fields: rawData,
    };
  }

  try {
    await prisma.inquiry.create({
      data: {
        fullName: validated.data.fullName,
        email: validated.data.email,
        phoneNumber: validated.data.phoneNumber,
        destination: validated.data.destination,
        tripType: validated.data.tripType,
        travelDate: validated.data.travelDate
          ? new Date(validated.data.travelDate)
          : null,
        groupSize: validated.data.groupSize
          ? Number(validated.data.groupSize)
          : null,
        budgetRange: validated.data.budgetRange,
        notes: validated.data.notes || null,
      },
    });

    return {
      success: true,
      message: "Inquiry submitted successfully.",
      errors: {},
      fields: {},
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong while saving your inquiry.",
      fields: rawData,
    };
  }
}
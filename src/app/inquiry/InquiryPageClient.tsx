"use client";

import { useActionState } from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { submitInquiry } from "./actions";
import type { InquiryActionState } from "@/lib/validations/inquiry";

const initialState: InquiryActionState = {
  success: false,
  message: "",
  errors: {},
  fields: {},
};

const destinationOptions = [
  "Kasol & Kheerganga",
  "Kedarkantha",
  "Jibhi & Tirthan",
  "Manali",
  "Uttarakhand Treks",
  "Custom Recommendation",
];

const tripTypeOptions = [
  "Backpacking",
  "Trekking",
  "Weekend Escape",
  "Group Trip",
  "Custom Trip",
];

const budgetOptions = [
  "Under ₹7,000",
  "₹7,000 - ₹10,000",
  "₹10,000 - ₹15,000",
  "₹15,000+",
  "Not sure yet",
];

export default function InquiryPage() {
  const [state, formAction, isPending] = useActionState(
    submitInquiry,
    initialState
  );

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Plan your trip"
              title="Tell us what kind of trip you want"
              description="Share a few details and we will help you find a trip that fits your time, budget, and travel style."
            />

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">What happens next?</h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    1
                  </span>
                  <p className="text-sm leading-7 text-slate-600">
                    You submit your travel preferences.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    2
                  </span>
                  <p className="text-sm leading-7 text-slate-600">
                    We review your destination, dates, budget, and group size.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    3
                  </span>
                  <p className="text-sm leading-7 text-slate-600">
                    We contact you with the most suitable trip options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form action={formAction} className="space-y-8">
              {state.message && (
                <div
                  className={`rounded-2xl border p-4 text-sm ${
                    state.success
                      ? "border-teal-200 bg-teal-50 text-teal-800"
                      : "border-rose-200 bg-rose-50 text-rose-800"
                  }`}
                >
                  {state.message}
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold text-slate-900">Your details</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      defaultValue={state.fields?.fullName ?? ""}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    />
                    {state.errors?.fullName && (
                      <p className="mt-2 text-sm text-rose-600">
                        {state.errors.fullName[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      defaultValue={state.fields?.phoneNumber ?? ""}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    />
                    {state.errors?.phoneNumber && (
                      <p className="mt-2 text-sm text-rose-600">
                        {state.errors.phoneNumber[0]}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue={state.fields?.email ?? ""}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    />
                    {state.errors?.email && (
                      <p className="mt-2 text-sm text-rose-600">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">Trip preferences</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="destination"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Destination interest
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      defaultValue={state.fields?.destination ?? ""}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    >
                      <option value="">Select destination</option>
                      {destinationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {state.errors?.destination && (
                      <p className="mt-2 text-sm text-rose-600">
                        {state.errors.destination[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="tripType"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Trip type
                    </label>
                    <select
                      id="tripType"
                      name="tripType"
                      defaultValue={state.fields?.tripType ?? ""}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    >
                      <option value="">Select trip type</option>
                      {tripTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {state.errors?.tripType && (
                      <p className="mt-2 text-sm text-rose-600">
                        {state.errors.tripType[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="travelDate"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Preferred travel date
                    </label>
                    <input
                      id="travelDate"
                      name="travelDate"
                      type="date"
                      defaultValue={state.fields?.travelDate ?? ""}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="groupSize"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Group size
                    </label>
                    <input
                      id="groupSize"
                      name="groupSize"
                      type="number"
                      min="1"
                      defaultValue={state.fields?.groupSize ?? ""}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="budgetRange"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Budget range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      defaultValue={state.fields?.budgetRange ?? ""}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {state.errors?.budgetRange && (
                      <p className="mt-2 text-sm text-rose-600">
                        {state.errors.budgetRange[0]}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="notes"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Additional notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={5}
                      defaultValue={state.fields?.notes ?? ""}
                      placeholder="Tell us about your travel goals, flexibility, preferred route, or any special request"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
"use client";

import { useActionState } from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { submitContact } from "./actions";
import type { ContactActionState } from "@/lib/validations/contact";

const initialState: ContactActionState = {
  success: false,
  message: "",
  errors: {},
  fields: {},
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Talk to us before you book"
              description="Ask about trip dates, destination fit, budget, itinerary, or group travel concerns. Clear communication helps travelers move forward with confidence."
            />

            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a
                  href="mailto:hello@madfortrip.com"
                  className="text-teal-700 hover:text-teal-800"
                >
                  hello@madfortrip.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                +91 98765 43210
              </p>
              <p>
                <span className="font-semibold text-slate-900">Location:</span>{" "}
                Delhi, India
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                What happens after you contact us?
              </h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    1
                  </span>
                  <p className="text-sm leading-7 text-slate-600">
                    You send your question or travel concern.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    2
                  </span>
                  <p className="text-sm leading-7 text-slate-600">
                    We review your message and understand your requirement.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    3
                  </span>
                  <p className="text-sm leading-7 text-slate-600">
                    We reply with guidance, clarification, or the next planning
                    step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form action={formAction} className="space-y-8" noValidate>
              {state.message && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`rounded-2xl border p-4 text-sm ${
                    state.success
                      ? "border-teal-200 bg-teal-50 text-teal-800"
                      : "border-rose-200 bg-rose-50 text-rose-800"
                  }`}
                >
                  {state.message}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
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
                    autoComplete="name"
                    defaultValue={state.fields?.fullName ?? ""}
                    aria-invalid={!!state.errors?.fullName}
                    aria-describedby={
                      state.errors?.fullName ? "fullName-error" : undefined
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                  />
                  {state.errors?.fullName && (
                    <p
                      id="fullName-error"
                      role="alert"
                      className="mt-2 text-sm text-rose-600"
                    >
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
                    autoComplete="tel"
                    defaultValue={state.fields?.phoneNumber ?? ""}
                    aria-invalid={!!state.errors?.phoneNumber}
                    aria-describedby={
                      state.errors?.phoneNumber
                        ? "phoneNumber-error"
                        : undefined
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                  />
                  {state.errors?.phoneNumber && (
                    <p
                      id="phoneNumber-error"
                      role="alert"
                      className="mt-2 text-sm text-rose-600"
                    >
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
                    autoComplete="email"
                    defaultValue={state.fields?.email ?? ""}
                    aria-invalid={!!state.errors?.email}
                    aria-describedby={
                      state.errors?.email ? "email-error" : undefined
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                  />
                  {state.errors?.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-2 text-sm text-rose-600"
                    >
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    defaultValue={state.fields?.subject ?? ""}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    placeholder="Optional subject"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    defaultValue={state.fields?.message ?? ""}
                    aria-invalid={!!state.errors?.message}
                    aria-describedby={
                      state.errors?.message ? "message-error" : undefined
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-700"
                    placeholder="Tell us what you want help with"
                  />
                  {state.errors?.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-2 text-sm text-rose-600"
                    >
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
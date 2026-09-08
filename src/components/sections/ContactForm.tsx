"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import {
  contactSchema,
  PROJECT_TYPES,
  BUDGET_BANDS,
  type ContactInput,
} from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink placeholder:text-muted/60 focus:border-garnet focus:outline-none focus:ring-0 transition-colors duration-300";

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setStartedAt(Date.now()));
    return () => cancelAnimationFrame(frame);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: PROJECT_TYPES[0],
      message: "",
      website: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (values: ContactInput) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, startedAt }),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(payload?.error ?? "Something went wrong. Please try again.");
        return;
      }

      reset();
      toast.success("Message sent. Check your inbox for a confirmation.");
      router.push("/thank-you");
    } catch {
      toast.error("Network error. Please email directly instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
      {/* Honeypot. Hidden from humans and from assistive technology. */}
      <div aria-hidden className="absolute left-[-9999px] size-px overflow-hidden">
        <label htmlFor="website">Do not fill this in</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message} htmlFor="name" required>
          <input
            id="name"
            autoComplete="name"
            placeholder="Jane Okafor"
            className={fieldBase}
            {...register("name")}
          />
        </Field>

        <Field label="Email" error={errors.email?.message} htmlFor="email" required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldBase}
            {...register("email")}
          />
        </Field>

        <Field label="Company" error={errors.company?.message} htmlFor="company">
          <input
            id="company"
            autoComplete="organization"
            placeholder="Optional"
            className={fieldBase}
            {...register("company")}
          />
        </Field>

        <Field
          label="What is this about"
          error={errors.projectType?.message}
          htmlFor="projectType"
          required
        >
          <select id="projectType" className={cn(fieldBase, "cursor-pointer")} {...register("projectType")}>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget range" error={errors.budget?.message} htmlFor="budget" className="sm:col-span-2">
          <select id="budget" className={cn(fieldBase, "cursor-pointer")} {...register("budget")}>
            <option value="">Prefer not to say</option>
            {BUDGET_BANDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell me what is going on" error={errors.message?.message} htmlFor="message" required>
        <textarea
          id="message"
          rows={6}
          placeholder="What is happening in the funnel right now, what you have already tried, and what a good outcome looks like."
          className={cn(fieldBase, "resize-none")}
          {...register("message")}
        />
      </Field>

      <div>
        <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-[var(--garnet)]"
            {...register("consent")}
          />
          <span>
            I am happy for Sawera to store this message and reply by email. See the{" "}
            <a href="/privacy" className="link-underline text-ink">
              privacy notice
            </a>
            .
          </span>
        </label>
        {errors.consent?.message && (
          <p role="alert" className="mt-2 text-sm text-garnet">
            {errors.consent.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" />
            </>
          )}
        </Button>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
          Replies within one working day
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={htmlFor}
        className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted"
      >
        {label}
        {required && <span className="ml-1 text-garnet">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-sm text-garnet">
          {error}
        </p>
      )}
    </div>
  );
}

import { z } from "zod";

export const PROJECT_TYPES = [
  "Outbound engine build",
  "GTM systems audit",
  "AI workflow engineering",
  "Training, workshop or talk",
  "Hiring or full-time role",
  "Something else",
] as const;

export const BUDGET_BANDS = [
  "Under 2k USD",
  "2k to 5k USD",
  "5k to 15k USD",
  "15k USD and up",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.email("Please enter a valid email address"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum(PROJECT_TYPES),
  budget: z.enum(BUDGET_BANDS).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "A little more detail helps, at least 20 characters")
    .max(3000, "Please keep it under 3000 characters"),
  consent: z.literal(true, {
    message: "Please confirm you are happy to be contacted",
  }),
  // Anti-spam. Must stay empty. Hidden from humans and from screen readers.
  website: z.string().max(0).optional().or(z.literal("")),
  // Anti-spam. Client stamps mount time; a sub-3-second submit is a bot.
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

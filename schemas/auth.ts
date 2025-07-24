import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export const loginSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one lowercase letter")
    .regex(/[0-9]/, "Must include at least one number")
    .regex(/[^A-Za-z0-9]/, "Must include at least one special character"),
});

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: loginSchema.shape.password,
});

export type EmailSchemaType = z.infer<typeof emailSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;

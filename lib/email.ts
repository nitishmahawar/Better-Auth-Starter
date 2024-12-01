import type { CreateEmailOptions } from "resend";
import { resend } from "./resend";

export const sendEmail = async (options: Omit<CreateEmailOptions, "from">) => {
  await resend.emails.send({
    from: "Better Auth Starter <onboarding@resend.dev>",
    ...options,
    text: options.text || options.html || "", // Ensure text is always provided
  });
};

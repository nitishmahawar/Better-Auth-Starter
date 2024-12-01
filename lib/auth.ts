import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { VerificationEmail } from "@/emails/verification-email";
import { ResetPasswordEmail } from "@/emails/reset-password-email";
import { sendEmail } from "@/lib/email";

export const auth = betterAuth({
  appName: "better-auth-starter",
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    async sendResetPassword(data) {
      await sendEmail({
        to: data.user.email,
        subject: "Reset your password",
        react: ResetPasswordEmail({ resetPasswordUrl: data.url }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  advanced: {
    generateId: false,
  },
  emailVerification: {
    sendOnSignUp: true,
    async sendVerificationEmail(data) {
      await sendEmail({
        to: data.user.email,
        subject: "Verify your email address",
        react: VerificationEmail({ verificationUrl: data.url }),
      });
    },
  },
  secondaryStorage: {
    get: async (key) => await redis.get(key),
    set: async (key, value, ttl) => {
      if (ttl) await redis.set(key, JSON.stringify(value), { ex: ttl });
      else await redis.set(key, JSON.stringify(value));
    },
    delete: async (key) => (await redis.del(key)).toString(),
  },
});

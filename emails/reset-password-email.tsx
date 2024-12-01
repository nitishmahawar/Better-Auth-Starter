import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ResetPasswordEmailProps {
  resetPasswordUrl: string;
}

export const ResetPasswordEmail = ({
  resetPasswordUrl,
}: ResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-8 px-4">
            <Section className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <Text className="text-2xl font-bold text-gray-900 mb-4">
                Reset your password
              </Text>
              <Text className="text-gray-600 mb-6">
                Someone requested a password reset for your account. Click the
                button below to choose a new password.
              </Text>
              <Button
                href={resetPasswordUrl}
                className="bg-neutral-950 text-white text-sm px-6 py-2.5 rounded-md font-medium hover:bg-neutral-950/90 transition-colors"
              >
                Reset Password
              </Button>
              <Text className="text-sm text-gray-500 mt-6">
                If you didn't request this email, you can safely ignore it. Your
                password will remain unchanged.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordEmail;

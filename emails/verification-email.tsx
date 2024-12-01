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

interface VerificationEmailProps {
  verificationUrl: string;
}

export const VerificationEmail = ({
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your email address</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-8 px-4">
            <Section className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <Text className="text-2xl font-bold text-gray-900 mb-4">
                Verify your email address
              </Text>
              <Text className="text-gray-600 mb-6">
                Thanks for signing up! Please click the button below to verify
                your email address.
              </Text>
              <Button
                href={verificationUrl}
                className="bg-neutral-950 text-white text-sm px-6 py-2.5 rounded-md font-medium hover:bg-neutral-950/90 transition-colors"
              >
                Verify Email
              </Button>
              <Text className="text-sm text-gray-500 mt-6">
                If you didn't request this email, you can safely ignore it.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;

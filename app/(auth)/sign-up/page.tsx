import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { SignUpForm } from "./sign-up-form";
import Image from "next/image";
import betterAuth from "@/public/better-auth.svg";

const Page = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <Image
          src={betterAuth}
          alt="BetterAuth"
          width={60}
          height={45}
          className="h-5 w-fit mx-auto mb-2 dark:invert"
        />
        <CardTitle className="text-lg">Sign Up</CardTitle>
        <CardDescription>Create an account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
};

export default Page;

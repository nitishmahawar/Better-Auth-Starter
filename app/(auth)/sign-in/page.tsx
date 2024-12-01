import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { SignInForm } from "./sign-in-form";
import Image from "next/image";
import betterAuth from "@/public/better-auth.svg";

const Page = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center ">
        <Image
          src={betterAuth}
          alt="BetterAuth"
          width={60}
          height={45}
          className="h-5 w-fit mx-auto mb-2 dark:invert"
        />
        <CardTitle className="text-lg">Sign In</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default Page;

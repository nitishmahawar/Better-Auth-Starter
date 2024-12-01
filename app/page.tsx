"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import {
  ProfileContent,
  ProfileEmail,
  ProfileImage,
  ProfileName,
  ProfileRoot,
} from "@/components/ui/profile";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <ProfileRoot>
        <ProfileImage
          src={session?.user?.image as string | undefined}
          alt={session?.user?.name}
        />
        <ProfileContent>
          <ProfileName>{session?.user?.name}</ProfileName>
          <ProfileEmail>{session?.user?.email}</ProfileEmail>
        </ProfileContent>
      </ProfileRoot>

      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign out
      </Button>

      <ThemeToggle />
    </div>
  );
};

export default Page;

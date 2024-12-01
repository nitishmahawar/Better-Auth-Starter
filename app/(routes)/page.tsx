"use client";
import React from "react";
import {
  ProfileRoot,
  ProfileImage,
  ProfileContent,
  ProfileName,
  ProfileEmail,
} from "@/components/ui/profile";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { ChangePasswordDialog } from "@/components/change-password-dialog";

const Page = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <div className="px-4 py-6">
      <div className="max-w-4xl mx-auto p-6 border rounded-lg bg-accent/30">
        <p className="font-medium mb-6">User</p>

        <ProfileRoot className="mb-4">
          <ProfileImage
            src={session?.user?.image as string | undefined}
            alt={session?.user?.name}
            className="size-9"
          />
          <ProfileContent>
            <ProfileName className="break-all line-clamp-1">
              {session?.user?.name}
            </ProfileName>
            <ProfileEmail className="break-all line-clamp-1">
              {session?.user?.email}
            </ProfileEmail>
          </ProfileContent>
        </ProfileRoot>

        <div className="flex justify-end gap-2.5">
          <ChangePasswordDialog />
          <Button
            variant="outline"
            onClick={() =>
              authClient.signOut(
                {},
                { onSuccess: () => router.push("/sign-in") }
              )
            }
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

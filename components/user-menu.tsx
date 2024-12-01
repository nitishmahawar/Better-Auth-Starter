"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import {
  ProfileRoot,
  ProfileImage,
  ProfileContent,
  ProfileName,
  ProfileEmail,
} from "@/components/ui/profile";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const UserMenu = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-9">
          <AvatarImage src={session?.user?.image as string | undefined} />
          <AvatarFallback>
            {session?.user?.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 p-2.5">
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
        <DropdownMenuItem
          className="p-2.5"
          onClick={() => router.push("/profile")}
        >
          <User className="w-4 h-4 mr-2" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-2.5"
          onClick={() =>
            authClient.signOut(
              {},
              {
                onSuccess(context) {
                  router.push("/sign-in");
                },
              }
            )
          }
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

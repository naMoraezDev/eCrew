"use client";

import Link from "next/link";
import { useUserMenu } from "./_io";
import { UserMenuProps } from "./types";
import { useAuth } from "@/contexts/auth";

import dynamic from "next/dynamic";
const DynamicLoggedOutUser = dynamic(() =>
  import("./logged-out-user").then((module) => module.LoggedOutUser)
);
const DynamicLoggedInUser = dynamic(() =>
  import("./logged-in-user").then((module) => module.LoggedInUser)
);
const DynamicSignOutButton = dynamic(() =>
  import("./sign-out-button").then((module) => module.SignOutButton)
);

export function UserMenuView({ isDesktop }: UserMenuProps) {
  const { user } = useAuth();
  const { signOut } = useUserMenu();

  return (
    <div className="flex gap-2">
      <Link
        href={user ? "#" : "/login"}
        className={`
          ${!user ? "p-3" : "p-2"}
          flex items-center gap-3 bg-zinc-800 bg-opacity-50 rounded-lg
        `}
      >
        {!user && <DynamicLoggedOutUser isDesktop={isDesktop} />}
        {user && (
          <DynamicLoggedInUser
            isDesktop={isDesktop}
            email={user.email || ""}
            photoURL={user.photoURL || ""}
            displayName={user.displayName || ""}
          />
        )}
      </Link>
      {user && <DynamicSignOutButton signOut={signOut} />}
    </div>
  );
}

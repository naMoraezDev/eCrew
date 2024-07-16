"use client";

import Link from "next/link";
import { useUserMenu } from "./_io";
import { UserMenuProps } from "./types";
import { useAuth } from "@/contexts/auth";
import { LoggedInUser } from "./logged-in-user";
import { LoggedOutUser } from "./logged-out-user";
import { SignOutButton } from "./sign-out-button";

export function UserMenuView({ isDesktop }: UserMenuProps) {
  const { signOut } = useUserMenu();
  const { user, cleanPreferences } = useAuth();

  return (
    <div className="flex gap-2">
      <Link
        href={user ? "#" : "/login"}
        className={`
          ${!user ? "p-3" : "p-2"}
          flex items-center gap-3 bg-zinc-900 bg-opacity-50 rounded-lg
        `}
      >
        {!user && <LoggedOutUser isDesktop={isDesktop} />}
        {user && (
          <LoggedInUser
            isDesktop={isDesktop}
            email={user.email || ""}
            photoURL={user.photoURL || ""}
            displayName={user.displayName || ""}
          />
        )}
      </Link>
      {user && (
        <SignOutButton
          signOut={() => {
            signOut();
            cleanPreferences();
          }}
        />
      )}
    </div>
  );
}

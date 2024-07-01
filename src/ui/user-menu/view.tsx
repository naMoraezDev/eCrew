"use client";

import Link from "next/link";
import { sha256 } from "js-sha256";
import { useUserMenu } from "./_io";
import { UserMenuProps } from "./types";
import { FaUser } from "react-icons/fa6";
import { useAuth } from "@/contexts/auth";
import { FaSignOutAlt } from "react-icons/fa";

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
        {!user && (
          <>
            <FaUser className="shrink-0" size={20} />
            {isDesktop && (
              <div className="flex flex-col text-xs font-kanit">
                <span>Entre ou Cadastre-se</span>
              </div>
            )}
          </>
        )}
        {user && (
          <>
            <img
              width={28}
              height={28}
              alt="user photo"
              className="rounded-full"
              src={
                user.photoURL ??
                `https://www.gravatar.com/avatar/${sha256(
                  user.email ?? ""
                )}?d=https://avatars.githubusercontent.com/u/1753933?v=4`
              }
            />
            {isDesktop && (
              <div className="flex flex-col text-xs font-kanit">
                <span>Bem vindo, {user.displayName?.split(" ")[0]}</span>
                <span>minha conta</span>
              </div>
            )}
          </>
        )}
      </Link>
      {user && (
        <button
          type="button"
          onClick={signOut}
          className="flex justify-center items-center bg-zinc-800 bg-opacity-50 rounded-lg p-3"
        >
          <FaSignOutAlt size={16} />
        </button>
      )}
    </div>
  );
}

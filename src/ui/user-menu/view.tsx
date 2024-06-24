"use client";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserMenu } from "./_io";
import { FaUser } from "react-icons/fa6";
import { useAuth } from "@/contexts/auth";

export function UserMenuView() {
  const { user } = useAuth();
  const { signOut } = useUserMenu();

  return (
    <Popover>
      <PopoverTrigger className="relative">
        <div className="flex items-center gap-3">
          {user ? (
            user.photoURL ? (
              <img
                width={32}
                height={32}
                alt="user avatar"
                src={user.photoURL}
                className="rounded-full"
              />
            ) : (
              <FaUser size={20} />
            )
          ) : (
            <Link href="/login">
              <FaUser size={20} />
            </Link>
          )}
        </div>
      </PopoverTrigger>
      {user && (
        <PopoverContent className="bg-zinc-900 border-transparent shadow-md mt-2 text-zinc-50 p-4 flex justify-center">
          {user && (
            <div className="flex flex-col gap-3">
              <span className="font-kanit text-sm">
                Olá, <span className="font-bold">{user.displayName}</span>
              </span>
              <span className="font-kanit text-sm">{user.email}</span>
              <button
                type="button"
                onClick={signOut}
                className="bg-opacity-10 bg-zinc-500 rounded-lg py-1 font-kanit text-sm font-medium"
              >
                Sair
              </button>
            </div>
          )}
        </PopoverContent>
      )}
    </Popover>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useHeader } from "./_io";
import { HeaderProps } from "./types";
import { FaUserCircle } from "react-icons/fa";
import { SearchInput } from "@/ui/search-input";
import { GameSelectHover } from "@/ui/game-select-hover";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";
import { GameSelectPopover } from "@/ui/game-select-popover";

export function HeaderView({ games, isDesktop }: HeaderProps) {
  const { visible } = useHeader();

  return (
    <header
      className={`${visible ? "translate-y-0" : "translate-y-[-100%]"} 
      sticky top-0 z-20 bg-zinc-950 bg-opacity-20 backdrop-blur-sm duration-500`}
    >
      <div className="w-full h-16 flex items-center justify-between max-w-[1270px] mx-auto px-4">
        <div className="flex items-center gap-10">
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-1 relative">
              <Image
                priority
                width={24}
                height={24}
                src={ePostsLogo}
                alt="ePosts logo"
              />
              <span className="font-kanit text-xl">ePosts</span>
              <Link
                href="/noticias"
                className="w-full h-full absolute top-0 left-0"
              />
            </div>
            <div className="w-px h-6 bg-gray-50" />
            {isDesktop ? (
              <GameSelectHover games={games} />
            ) : (
              <GameSelectPopover games={games} />
            )}
          </section>
          <SearchInput />
        </div>
        <FaUserCircle size={32} />
      </div>
    </header>
  );
}

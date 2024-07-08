"use client";

import { useHeader } from "./_io";
import { HeaderProps } from "./types";
import { UserMenu } from "@/ui/user-menu";
import { SiteLogo } from "@/ui/site-logo";

import dynamic from "next/dynamic";
import Link from "next/link";
const DynamicGameSelectHover = dynamic(() =>
  import("@/ui/game-select-hover").then((module) => module.GameSelectHover)
);
const DynamicGameSelectPopover = dynamic(() =>
  import("@/ui/game-select-popover").then((module) => module.GameSelectPopover)
);
const DynamicSearchInput = dynamic(() =>
  import("@/ui/search-input").then((module) => module.SearchInput)
);

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
            <SiteLogo />
            <div className="w-px h-6 bg-gray-50" />
            {isDesktop && <DynamicGameSelectHover games={games} />}
            {!isDesktop && <DynamicGameSelectPopover games={games} />}
          </section>
          {isDesktop && <DynamicSearchInput />}
        </div>
        {isDesktop && (
          <section className="px-4 py-2 flex items-center gap-12 font-bold text-sm">
            <Link href="/noticias">Notícias</Link>
            <Link href="/torneios">Torneios</Link>
            <Link href="/partidas">Partidas</Link>
          </section>
        )}
        <UserMenu isDesktop={isDesktop} />
      </div>
    </header>
  );
}

"use client";

import { Menu } from "@/ui/menu";
import { useHeader } from "./_io";
import { HeaderProps } from "./types";
import { NavMenu } from "@/ui/nav-menu";
import { UserMenu } from "@/ui/user-menu";
import { SiteLogo } from "@/ui/site-logo";

import dynamic from "next/dynamic";
const DynamicGameSelectHover = dynamic(() =>
  import("@/ui/game-select-hover").then((module) => module.GameSelectHover)
);
const DynamicGameSelectPopover = dynamic(() =>
  import("@/ui/game-select-popover").then((module) => module.GameSelectPopover)
);
const DynamicSearchInput = dynamic(() =>
  import("@/ui/search-input").then((module) => module.SearchInput)
);

export function HeaderView({
  games,
  csPosts,
  r6Posts,
  codPosts,
  lolPosts,
  isDesktop,
  dotaPosts,
  pastMatches,
  valorantPosts,
  csTournaments,
  r6Tournaments,
  lolTournaments,
  codTournaments,
  dotaTournaments,
  upcomingMatches,
  valorantTournaments,
}: HeaderProps) {
  const { visible } = useHeader();

  return (
    <header
      className={`${visible ? "translate-y-0" : "translate-y-[-100%]"} 
      sticky top-0 z-20 bg-zinc-950 bg-opacity-20 backdrop-blur-sm duration-500`}
    >
      <div className="w-full h-16 flex items-center justify-between sm:max-w-[90%] 2xl:max-w-[70%] mx-auto px-4">
        <div className="flex items-center gap-10">
          <section className="flex items-center gap-4">
            <Menu />
            <SiteLogo />
            <div className="w-px h-6 bg-gray-50" />
            {isDesktop && <DynamicGameSelectHover games={games} />}
            {!isDesktop && <DynamicGameSelectPopover games={games} />}
          </section>
        </div>
        {isDesktop && (
          <NavMenu
            games={games}
            r6Posts={r6Posts}
            csPosts={csPosts}
            codPosts={codPosts}
            lolPosts={lolPosts}
            dotaPosts={dotaPosts}
            pastMatches={pastMatches}
            valorantPosts={valorantPosts}
            csTournaments={csTournaments}
            r6Tournaments={r6Tournaments}
            lolTournaments={lolTournaments}
            codTournaments={codTournaments}
            dotaTournaments={dotaTournaments}
            upcomingMatches={upcomingMatches}
            valorantTournaments={valorantTournaments}
          />
        )}
        {isDesktop && <DynamicSearchInput />}
        <UserMenu isDesktop={isDesktop} />
      </div>
    </header>
  );
}

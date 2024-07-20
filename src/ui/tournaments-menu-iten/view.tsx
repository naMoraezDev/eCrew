"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IoIosPodium } from "react-icons/io";
import { useTournamentsMenuIten } from "./_io";
import { Category } from "../news-menu-iten/types";
import { TournamentsMenuItenProps } from "./types";

export function TournamentsMenuItenView({
  games,
  csTournaments,
  r6Tournaments,
  lolTournaments,
  codTournaments,
  dotaTournaments,
  valorantTournaments,
}: TournamentsMenuItenProps) {
  const tournaments = [
    ...csTournaments,
    ...r6Tournaments,
    ...lolTournaments,
    ...codTournaments,
    ...dotaTournaments,
    ...valorantTournaments,
  ];

  const { getTournamentsByGame, setSelectedGame } = useTournamentsMenuIten({
    games,
    csTournaments,
    r6Tournaments,
    lolTournaments,
    codTournaments,
    dotaTournaments,
    valorantTournaments,
  });

  return (
    <>
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <Link href="/torneios" className="flex items-center gap-2">
            <IoIosPodium />
            Torneios
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="bg-zinc-900 bg-opacity-90 border-transparent mt-4 text-zinc-50 overflow-hidden rounded-lg !p-0 w-full">
          <div className="flex w-[1024px] h-[450px]">
            <div className="flex flex-col gap-6 bg-zinc-950 bg-opacity-90 p-4 w-1/3">
              {games
                .filter((game) =>
                  tournaments.find((t) => t.videogame.slug === game.slug)
                )
                .map((game) => (
                  <div
                    key={game.id}
                    className="w-full flex items-center gap-4 cursor-pointer"
                    onMouseOver={() => setSelectedGame(game.slug as Category)}
                  >
                    <span className="text-sm font-kanit py-1 px-3 bg-zinc-900 rounded-full">
                      {game.name}
                    </span>
                  </div>
                ))}
            </div>
            <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-2/3">
              <h4 className="font-kanit font-medium text-sm flex items-center gap-2 px-6 py-3">
                <IoIosPodium />
                <span>Torneios em andamento</span>
              </h4>
              {getTournamentsByGame().map((tournament) => (
                <li
                  key={tournament.id}
                  className="text-sm flex gap-3 px-6 py-3 relative animate-fade-in"
                >
                  <Image
                    width={40}
                    height={40}
                    src={
                      games.find(
                        (game) => game.slug === tournament.videogame.slug
                      )?.icon_url || ""
                    }
                    alt={
                      games.find(
                        (game) => game.slug === tournament.videogame.slug
                      )?.name || ""
                    }
                    className="rounded-sm object-cover size-4 shrink-0 relative top-1"
                  />
                  <div className="flex flex-col gap-1 font-kanit ">
                    <span className="font-bold">{tournament.league.name}</span>
                    <span className="text-xs">
                      {tournament.serie.name}
                      {tournament.serie.name && " - "}
                      {tournament.name}
                    </span>
                  </div>
                  <Link
                    href={`/torneios/${tournament.id}`}
                    className="size-full absolute top-0 left-0"
                  />
                </li>
              ))}
              <Link
                href="/torneios"
                className="self-center text-sm px-3 py-1 bg-violet-500 bg-opacity-10 rounded-full text-violet-500 my-4 mt-auto"
              >
                Ver todos
              </Link>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}

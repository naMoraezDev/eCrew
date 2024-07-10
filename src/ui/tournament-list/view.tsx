"use client";

import Image from "next/image";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { Fragment } from "react";
import { useTournamentList } from "./_io";
import { TournamentListProps } from "./types";
import { HorizontalAd } from "../horizontal-ad";
import { RiErrorWarningFill } from "react-icons/ri";

export function TournamentListView({
  games,
  tournaments,
}: TournamentListProps) {
  const { hendleChange, filteredTournaments } = useTournamentList({
    games,
    tournaments,
  });

  return (
    <section className="w-full flex flex-col gap-3">
      <Select onValueChange={hendleChange}>
        <SelectTrigger className="w-[300px] h-8 font-kanit text-zinc-300">
          <SelectValue placeholder="filtrar por jogo" />
        </SelectTrigger>
        <SelectContent>
          {games.map((game, index) => (
            <SelectItem key={index} value={game.slug}>
              <div className="flex items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  alt={game.name}
                  src={game.icon_url}
                  className="rounded-sm object-cover size-4 shrink-0"
                />
                <span>{game.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ul className="flex flex-col w-full bg-zinc-900 bg-opacity-50 rounded-lg text-zinc-300 overflow-hidden">
        <li className="pl-10 pr-6 py-3 flex justify-between items-center font-kanit font-bold text-sm gap-10">
          <span className="w-1/4"></span>
          <span className="w-1/4">Serie</span>
          <span className="w-1/4">Premiação</span>
          <span className="w-1/4">Duração</span>
        </li>
        {!Boolean(filteredTournaments.length) && (
          <li className="w-full flex justify-center">
            <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2">
              <RiErrorWarningFill />
              Nenhum torneio encontrado.
            </span>
          </li>
        )}
        {filteredTournaments
          .sort(
            (a, b) =>
              b.matches.filter((match) => match.status === "running").length -
              a.matches.filter((match) => match.status === "running").length
          )
          .map((tournament, index) => (
            <Fragment key={tournament.id}>
              {index === 8 && <HorizontalAd rounded={false} />}
              <li className="h-16 pl-10 pr-6 py-3 flex justify-between items-center font-kanit text-xs gap-10 relative">
                <div className="flex gap-4 w-1/4 items-center">
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
                    className="rounded-sm object-cover size-4 shrink-0 relative"
                  />
                  <span className="text-sm line-clamp-2">
                    {tournament.league.name} {tournament.name}
                  </span>
                </div>
                <span className="w-1/4">{tournament.serie.name || "-"}</span>
                <span className="w-1/4">{tournament.prizepool || "-"}</span>
                <span className="w-1/4">
                  {new Date(tournament.begin_at).toLocaleDateString("pt-BR")} -{" "}
                  {new Date(tournament.end_at).toLocaleDateString("pt-BR")}
                </span>
                {tournament.matches.find(
                  (match) => match.status === "running"
                ) && (
                  <>
                    <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
                    <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                      <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                        LIVE
                      </span>
                    </div>
                  </>
                )}
              </li>
            </Fragment>
          ))}
        <HorizontalAd rounded={false} />
      </ul>
    </section>
  );
}

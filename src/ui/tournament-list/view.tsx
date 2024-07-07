"use client";

import Image from "next/image";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { useTournamentList } from "./_io";
import { TournamentListProps } from "./types";
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
      <ul className="flex flex-col w-full bg-zinc-900 bg-opacity-50 rounded-lg text-zinc-300">
        <li className="px-6 py-3 flex justify-between items-center font-kanit font-bold text-sm gap-10">
          <span className="w-1/4"></span>
          <span className="w-1/4">Liga</span>
          <span className="w-1/4">Serie</span>
          <span className="w-1/4">Premiação</span>
        </li>
        {!Boolean(filteredTournaments.length) && (
          <li className="w-full flex justify-center">
            <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2">
              <RiErrorWarningFill />
              Nenhum torneio encontrado.
            </span>
          </li>
        )}
        {filteredTournaments.map((tournament) => (
          <li
            key={tournament.id}
            className="px-6 py-3 flex justify-between items-center font-kanit text-xs gap-10"
          >
            <div className="flex gap-4 w-1/4">
              <Image
                width={40}
                height={40}
                src={
                  games.find((game) => game.slug === tournament.videogame.slug)
                    ?.icon_url || ""
                }
                alt={
                  games.find((game) => game.slug === tournament.videogame.slug)
                    ?.name || ""
                }
                className="rounded-sm object-cover size-4 shrink-0 relative top-1"
              />
              <span className="text-sm">{tournament.name}</span>
            </div>
            <span className="w-1/4">{tournament.league.name}</span>
            <span className="w-1/4">{tournament.serie.name || "-"}</span>
            <span className="w-1/4">{tournament.prizepool || "-"}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { MatchesListProps } from "./types";
import { HorizontalAd } from "../horizontal-ad";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";

export function MatchesListView({ games, matches }: MatchesListProps) {
  return (
    <section className="w-full flex flex-col gap-3">
      <ul className="flex flex-col w-full bg-zinc-900 bg-opacity-50 rounded-lg text-zinc-300 overflow-hidden">
        <li className="pl-6 py-3 flex items-center font-kanit font-bold text-sm gap-6">
          <span className="w-1/5"></span>
          <span className="w-1/5">Partida</span>
          <span className="w-1/5">Torneio</span>
          <span className="w-1/5 text-center">Jogo</span>
          <span className="w-1/5">Data</span>
        </li>
        {matches.map((match, index) => (
          <Fragment key={match.id}>
            {index === 8 && <HorizontalAd rounded={false} />}
            <li
              title={match.name}
              className="py-3 flex items-center h-12 relative text-xs gap-6 group"
            >
              <div className="w-1/5 pl-12 h-full flex items-center gap-3 z-10 shrink-0">
                <Image
                  width={16}
                  height={16}
                  alt="opponent 1"
                  src={match.opponents[0]?.opponent.image_url || ecrewLogo}
                />
                <div className="flex items-center gap-2">
                  {match.status === "running" && (
                    <span className="font-kanit font-bold">
                      {match.results[0].score}
                    </span>
                  )}
                  <span className="font-bold">vs</span>
                  {match.status === "running" && (
                    <span className="font-kanit font-bold">
                      {match.results[1].score}
                    </span>
                  )}
                </div>
                <Image
                  width={16}
                  height={16}
                  alt="opponent 1"
                  src={match.opponents[1]?.opponent.image_url || ecrewLogo}
                />
              </div>
              <div className="w-1/5 overflow-hidden">
                <span className="font-kanit font-bold text-nowrap hover:animate-text-slide group-hover:text-violet-500 duration-300">
                  {match.name}
                </span>
              </div>
              <div className="w-1/5 overflow-hidden">
                <span className="font-kanit font-bold text-nowrap hover:animate-text-slide">
                  {match.league.name} {match.tournament.name}
                </span>
              </div>
              <div className="w-1/5 overflow-hidden flex justify-center">
                <Image
                  width={40}
                  height={40}
                  alt={match.videogame.name}
                  src={
                    games.find((g) => g.slug === match.videogame.slug)
                      ?.icon_url || ""
                  }
                  className="size-4 shrink-0 object-cover rounded-sm"
                />
              </div>
              <div className="w-1/5 overflow-hidden pr-6">
                <span className="font-medium font-kanit text-xs bg-opacity-10">
                  {new Date(match.begin_at).toLocaleDateString("pt-BR", {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
              </div>
              {match.status === "running" && (
                <>
                  <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
                  <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                    <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90">
                      LIVE
                    </span>
                  </div>
                </>
              )}
              <Link
                href={`/partidas/${match.id}`}
                className="size-full absolute top-0 left-0 z-10"
              />
            </li>
          </Fragment>
        ))}
        <HorizontalAd rounded={false} />
      </ul>
    </section>
  );
}

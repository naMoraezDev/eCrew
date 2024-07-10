"use client";

import Link from "next/link";
import Image from "next/image";
import { useLiveMatches } from "./_io";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";
import { RiErrorWarningFill, RiLiveFill } from "react-icons/ri";

export function LiveMatchesView() {
  const { data } = useLiveMatches();

  return (
    <section className="flex flex-col rounded-lg bg-zinc-900 bg-opacity-50">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2 px-6 py-3">
        <RiLiveFill />
        Partidas em andamento
      </h4>
      <ul className="flex flex-col">
        {Boolean(!data?.length) && (
          <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2">
            <RiErrorWarningFill />
            Nenhuma partida em andamento.
          </span>
        )}
        {data?.map((match, index) => {
          return (
            <li
              key={index}
              title={match.name}
              className="pl-10 pr-6 py-3 flex items-center gap-4 h-14 relative"
            >
              <div className="h-full flex justify-center items-center gap-2 z-10 shrink-0">
                <Image
                  width={16}
                  height={16}
                  alt="opponent 1"
                  src={match.opponents[0].opponent.image_url || ecrewLogo}
                />
                {match.status === "running" && (
                  <span className="text-xs font-kanit font-bold">
                    {match.results[0].score}
                  </span>
                )}
                <span className="text-xs font-bold">vs</span>
                {match.status === "running" && (
                  <span className="text-xs font-kanit font-bold">
                    {match.results[1].score}
                  </span>
                )}
                <Image
                  width={16}
                  height={16}
                  alt="opponent 1"
                  src={match.opponents[1].opponent.image_url || ecrewLogo}
                />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="font-kanit text-xs font-bold text-nowrap hover:animate-text-slide">
                  {match.name}
                </span>
              </div>
              <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
              <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                  LIVE
                </span>
              </div>
              <Link
                href={`/partidas/${match.id}`}
                className="size-full absolute top-0 left-0 z-10"
              />
            </li>
          );
        })}
      </ul>
      <Link href="/partidas" className="text-sm font-kanit p-3 self-center">
        ver todas
      </Link>
    </section>
  );
}

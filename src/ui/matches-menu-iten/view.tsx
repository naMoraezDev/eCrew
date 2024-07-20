"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { useMatchesMenuIten } from "./_io";
import { MatchesMenuItenProps } from "./types";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";
import { BsFillLightningChargeFill } from "react-icons/bs";

export function MatchesMenuItenView({
  pastMatches,
  upcomingMatches,
}: MatchesMenuItenProps) {
  const { setListType, getMatchesByType } = useMatchesMenuIten({
    pastMatches,
    upcomingMatches,
  });

  return (
    <>
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <Link href="/partidas" className="flex items-center gap-2">
            <BsFillLightningChargeFill />
            Partidas
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="bg-zinc-900 bg-opacity-70 border-transparent mt-4 text-zinc-50 overflow-hidden rounded-lg !p-0 w-full">
          <div className="flex w-[1024px] h-[450px]">
            <div className="flex flex-col gap-6 bg-zinc-950 bg-opacity-90 p-4 w-1/3">
              <div
                onMouseOver={() => setListType("past")}
                className="w-full flex items-center gap-4 cursor-pointer"
              >
                <span className="text-sm font-kanit py-1 px-3 bg-zinc-900 rounded-full">
                  partidas encerradas
                </span>
              </div>
              <div
                onMouseOver={() => setListType("upcoming")}
                className="w-full flex items-center gap-4 cursor-pointer"
              >
                <span className="text-sm font-kanit py-1 px-3 bg-zinc-900 rounded-full">
                  próximas partidas
                </span>
              </div>
            </div>
            <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-2/3">
              {getMatchesByType().map((match) => (
                <li
                  key={match.id}
                  className="px-6 py-3 flex gap-4 relative animate-fade-in"
                >
                  <div className="h-full flex justify-center items-center gap-2 z-10 shrink-0">
                    <Image
                      width={16}
                      height={16}
                      alt="opponent 1"
                      src={match.opponents[0]?.opponent?.image_url || ecrewLogo}
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
                      src={match.opponents[1]?.opponent?.image_url || ecrewLogo}
                    />
                  </div>
                  <div className="flex flex-col gap-1 overflow-hidden">
                    <span className="font-kanit text-sm font-bold text-nowrap hover:animate-text-slide">
                      {match.name}
                    </span>
                    <span className="text-xs font-kanit">
                      {new Date(match.begin_at).toLocaleDateString("pt-BR", {
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </span>
                  </div>
                  <Link
                    href={`/partidas/${match.id}`}
                    className="size-full absolute top-0 left-0"
                  />
                </li>
              ))}
              <Link
                href="/torneios"
                className="self-center text-sm px-3 py-1 bg-violet-500 bg-opacity-10 rounded-full text-violet-500 my-4 mt-auto"
              >
                ver todas
              </Link>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}

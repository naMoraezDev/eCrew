"use client";

import { useLiveMatches } from "./_io";
import { MatchCard } from "../match-card";
import { LiveMatchesProps } from "./types";
import { RiLiveFill } from "react-icons/ri";
import { Skeleton } from "@/components/ui/skeleton";

export function LiveMatchesView({
  games,
  background = true,
}: LiveMatchesProps) {
  const { data, isLoading, viewMore, toggleViewMore } = useLiveMatches();

  if (!data?.length && !isLoading) {
    return null;
  }

  return (
    <section
      className={`
        ${
          background &&
          "bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900"
        }
        flex flex-col gap-4 p-2 rounded-lg
      `}
    >
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2">
        <RiLiveFill />
        Jogos em andamento
      </h4>
      <div className="flex flex-col gap-2">
        {isLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-12 w-full rounded-xl !bg-zinc-800 !bg-opacity-50 !animate-fade"
            />
          ))}
        {!isLoading &&
          (viewMore ? data : data?.slice(0, 5))?.map((match, index) => (
            <MatchCard key={index} games={games} match={match} />
          ))}
      </div>
      {!isLoading && data && data.length > 5 && (
        <button
          type="button"
          onClick={toggleViewMore}
          className="text-sm font-kanit"
        >
          {viewMore ? "Ver menos" : "ver mais"}
        </button>
      )}
    </section>
  );
}

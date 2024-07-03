"use client";

import { MatchCard } from "../match-card";
import { useUpcommingMatches } from "./_io";
import { MdSchedule } from "react-icons/md";
import { UpcommingMatchesProps } from "./types";
import { Skeleton } from "@/components/ui/skeleton";

export function UpcommingMatchesView({
  background = true,
}: UpcommingMatchesProps) {
  const { data, isLoading, viewMore, toggleViewMore } = useUpcommingMatches();
  const matches = data?.filter(
    (match) => new Date(match.begin_at) > new Date()
  );

  if (!data?.length && !isLoading) {
    return null;
  }

  return (
    <section
      className={`
        ${background && "bg-zinc-800 bg-opacity-50"}
        flex flex-col gap-4 p-2 rounded-lg
      `}
    >
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2">
        <MdSchedule />
        Próximas partidas
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
          (viewMore ? matches : matches?.slice(0, 5))?.map((match, index) => {
            return <MatchCard key={index} match={match} />;
          })}
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

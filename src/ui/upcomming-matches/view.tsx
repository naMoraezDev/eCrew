"use client";

import { MatchCard } from "../match-card";
import { useUpcommingMatches } from "./_io";
import { MdSchedule } from "react-icons/md";
import { UpcomingMatchesProps } from "./types";

export function UpcomingMatchesView({
  background = true,
  upcomingMatches,
}: UpcomingMatchesProps) {
  const { viewMore, toggleViewMore } = useUpcommingMatches();
  const matches = upcomingMatches?.filter(
    (match) => new Date(match.begin_at) > new Date()
  );

  if (!upcomingMatches?.length) {
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
        {(viewMore ? matches : matches?.slice(0, 5))?.map((match, index) => {
          return <MatchCard key={index} match={match} />;
        })}
      </div>
      {upcomingMatches && upcomingMatches.length > 5 && (
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

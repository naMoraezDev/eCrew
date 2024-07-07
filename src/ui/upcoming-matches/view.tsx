"use client";

import Image from "next/image";
import { useUpcommingMatches } from "./_io";
import { MdSchedule } from "react-icons/md";
import { FaShieldCat } from "react-icons/fa6";
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
        flex flex-col gap-4 p-3 rounded-lg
      `}
    >
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2 mb-3">
        <MdSchedule />
        Próximas partidas
      </h4>
      <ul className="flex flex-col gap-2">
        {(viewMore ? matches : matches?.slice(0, 5))?.map((match, index) => {
          return (
            <li key={index} className="p-3 flex gap-4">
              <div className="h-full flex justify-center items-center gap-2 z-10 shrink-0">
                {match.opponents[0]?.opponent.image_url ? (
                  <Image
                    width={16}
                    height={16}
                    alt="opponent 1"
                    src={match.opponents[0].opponent.image_url || ""}
                  />
                ) : (
                  <FaShieldCat size={16} className="text-zink-600 shrink-0" />
                )}
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
                {match.opponents[1]?.opponent.image_url ? (
                  <Image
                    width={16}
                    height={16}
                    alt="opponent 1"
                    src={match.opponents[1].opponent.image_url || ""}
                  />
                ) : (
                  <FaShieldCat size={16} className="text-zink-600 shrink-0" />
                )}
              </div>
              <div className="flex flex-col gap-2 overflow-hidden">
                <span className="font-kanit text-sm font-bold text-nowrap hover:animate-text-slide">
                  {match.name}
                </span>
                <span className="text-xs font-kanit">
                  {new Date(match.begin_at).toLocaleDateString("pt-BR", {
                    hour: "numeric",
                    minute: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
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

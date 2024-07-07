"use client";

import Link from "next/link";
import Image from "next/image";
import { useLiveMatches } from "./_io";
import { RiLiveFill } from "react-icons/ri";
import { FaShieldCat } from "react-icons/fa6";

export function LiveMatchesView() {
  const { data, isLoading } = useLiveMatches();

  if (!data?.length && !isLoading) {
    return null;
  }

  return (
    <section className="flex flex-col rounded-lg bg-zinc-900 bg-opacity-50">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2 px-6 py-3">
        <RiLiveFill />
        Partidas em andamento
      </h4>
      <ul className="flex flex-col">
        {data?.map((match, index) => {
          return (
            <li
              key={index}
              title={match.name}
              className="pl-10 pr-6 py-3 flex items-center gap-4 h-14 relative"
            >
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
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="font-kanit text-xs font-bold text-nowrap hover:animate-text-slide">
                  {match.name}
                </span>
              </div>
              <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-10 z-10" />
              <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                  LIVE
                </span>
              </div>
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

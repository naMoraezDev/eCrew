import Image from "next/image";
import { useMatchCard } from "./_io";
import { MatchCardProps } from "./types";
import { FaTwitch } from "react-icons/fa";
import { FaShieldCat } from "react-icons/fa6";

export function MatchCardView({ match, games }: MatchCardProps) {
  const { stream, gameLogo } = useMatchCard({ match, games });

  return (
    <section
      title={`${match.league.name} - ${match.name}`}
      className="flex items-center gap-6 relative w-full h-12 pl-10 pr-10 rounded-lg bg-zinc-900 overflow-hidden group"
    >
      <div className="flex gap-4 items-center z-10 group-hover:animate-text-slide">
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
          <span className="text-xs font-bold">vs</span>
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
        <span className="text-xs whitespace-nowrap font-kanit font-bold">
          {match.name}
        </span>
      </div>
      {match.status === "running" && (
        <>
          <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-10 z-10" />
          <div className="absolute top-0 left-0 h-full z-10 rotate-180">
            <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
              LIVE
            </span>
          </div>
        </>
      )}
      {stream?.raw_url && (
        <>
          <div className="absolute top-0 right-0 h-full flex items-center z-20 pointer-events-none">
            <div className="flex items-center justify-center h-full p-2 font-bold text-xs text-center text-violet-500 bg-purple-600 bg-opacity-20">
              <FaTwitch size={16} />
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href={stream.raw_url}
            className="absolute top-0 left-0 size-full z-10"
          />
        </>
      )}
      {gameLogo && (
        <div className="absolute top-0 left-0 size-full flex justify-end items-center">
          <Image
            width={100}
            height={72}
            src={gameLogo}
            alt="game icon"
            className="shrink-0 invert opacity-10"
          />
        </div>
      )}
      <div className="absolute top-0 right-0 size-full bg-gradient-to-l from-zinc-900 via-transparent to-transparent z-10 pointer-events-none" />
    </section>
  );
}

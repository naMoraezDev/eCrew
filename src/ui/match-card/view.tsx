import Image from "next/image";
import { useMatchCard } from "./_io";
import { MatchCardProps } from "./types";
import { FaTwitch } from "react-icons/fa";
import { FaShieldCat } from "react-icons/fa6";

export function MatchCardView({ match, games }: MatchCardProps) {
  const { stream, gameLogo } = useMatchCard({ match, games });

  return (
    <section
      title={match.name}
      className="flex items-center gap-6 relative w-full h-10 pl-12 pr-10 rounded-xl border border-slate-800 bg-gray-900 shrink-0 overflow-hidden"
    >
      <div className="flex gap-4 items-center z-10">
        <div className="h-full flex justify-center items-center gap-2 z-10">
          {match.opponents[0]?.opponent.image_url ? (
            <Image
              width={16}
              height={16}
              alt="opponent 1"
              src={match.opponents[0].opponent.image_url || ""}
            />
          ) : (
            <FaShieldCat size={16} className="text-red-600 shrink-0" />
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
            <FaShieldCat size={16} className="text-blue-600 shrink-0" />
          )}
        </div>
        <span className="text-xs whitespace-nowrap text-ellipsis overflow-hidden max-w-[120px] font-kanit font-bold">
          {match.name}
        </span>
      </div>
      {match.status === "running" && (
        <>
          <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-20 z-10" />
          <div className="absolute top-0 left-3 h-full z-10">
            <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold animate-pulse">
              {match.results[0]?.score || 0} - {match.results[1]?.score || 0}
            </span>
          </div>
        </>
      )}
      {stream?.raw_url && (
        <>
          <div className="absolute top-0 right-0 h-full flex items-center z-10">
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
            alt="game icon"
            src={gameLogo}
            className="shrink-0 invert opacity-10"
          />
        </div>
      )}
    </section>
  );
}

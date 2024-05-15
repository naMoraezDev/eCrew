import Image from "next/image";
import { useMatchCard } from "./_io";
import { MatchCardProps } from "./types";
import { FaShieldCat } from "react-icons/fa6";

export function MatchCardView({ match, games }: MatchCardProps) {
  const { stream, gameIcon } = useMatchCard({ match, games });

  return (
    <section
      title={match.name}
      className="flex items-center gap-6 relative w-72 h-20 pl-10 pr-10 py-1 rounded-xl border border-slate-800 bg-gray-900 shrink-0 overflow-hidden"
    >
      <div className="h-full flex flex-col justify-center items-center gap-2 z-10">
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
      <div className="w-px h-2/3 bg-slate-600" />
      <div className="h-full w-full flex flex-col justify-center items-center gap-2 z-10 pr-7">
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-1">
            <div>
              {gameIcon && (
                <Image
                  width={14}
                  height={14}
                  src={gameIcon}
                  alt="game image"
                  className="size-[14px] shrink-0 float-start mr-1"
                />
              )}
              <span className="text-xs font-bold text-ellipsis line-clamp-1 grow-0">
                {match.league.name}
              </span>
            </div>
            {match.status === "running" ? (
              <span className="font-kanit font-bold">
                {match.results[0].score} - {match.results[1].score}
              </span>
            ) : (
              <span className="text-xs text-center">
                {new Date(match.begin_at).toLocaleString("pt-BR", {
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
            )}
          </div>
        </div>
      </div>
      {match.status === "running" && (
        <>
          <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-20 z-10" />
          <div className="absolute top-0 left-0 h-full flex items-center z-10">
            <span
              style={{ writingMode: "vertical-rl" }}
              className="flex items-center gap-1 p-1 font-bold text-xs text-red-500 rotate-180"
            >
              ao vivo
              <div className="size-2 bg-red-500 rounded-full animate-pulse" />
            </span>
          </div>
        </>
      )}
      {stream?.raw_url && (
        <>
          <div className="absolute top-0 right-0 h-full flex items-center z-10">
            <span
              style={{ writingMode: "vertical-lr" }}
              className="h-full p-1 font-bold text-sm text-center text-violet-500 rotate-180 bg-purple-600 bg-opacity-20"
            >
              assistir
            </span>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href={stream.raw_url}
            className="absolute top-0 left-0 size-full z-10"
          />
        </>
      )}
    </section>
  );
}

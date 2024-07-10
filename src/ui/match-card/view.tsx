import Image from "next/image";
import { useMatchCard } from "./_io";
import { MatchCardProps } from "./types";
import { FaTwitch } from "react-icons/fa";
import { FaShieldCat } from "react-icons/fa6";

export function MatchCardView({ match }: MatchCardProps) {
  const { stream, revealStream, handleRevealStream } = useMatchCard({
    match,
  });

  return (
    <>
      <section
        onClick={handleRevealStream}
        title={`${match.league.name} - ${match.name}`}
        className={`
          ${match.status === "running" ? "pl-10 cursor-pointer" : "pl-3"}
          flex items-center gap-6 relative w-full h-12 pr-10 rounded-lg bg-zinc-900 overflow-hidden group animate-fade
        `}
      >
        <div
          className={`
            ${match.status === "running" && "group-hover:animate-text-slide"}
            flex gap-4 items-center z-10 group-hover:animate-text-slide
          `}
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
          <span className="text-xs whitespace-nowrap font-kanit font-bold">
            {match.name}
          </span>
          <span className="text-xs whitespace-nowrap font-kanit font-bold">
            {new Date(match.begin_at).toLocaleDateString("pt-BR", {
              hour: "numeric",
              minute: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        {match.status === "running" && (
          <>
            <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
            <div className="absolute top-0 left-0 h-full z-10 rotate-180">
              <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                LIVE
              </span>
            </div>
          </>
        )}
        {match.status === "running" && stream?.raw_url && (
          <div className="absolute top-0 right-0 h-full flex items-center z-20 pointer-events-none">
            <div className="flex items-center justify-center h-full p-2 font-bold text-xs text-center text-violet-500 bg-purple-600 bg-opacity-20">
              <FaTwitch size={16} />
            </div>
          </div>
        )}
        <div className="absolute top-0 right-0 size-full bg-gradient-to-l from-zinc-900 via-transparent to-transparent z-10 pointer-events-none" />
      </section>
      {match.status === "running" && revealStream && stream?.raw_url && (
        <iframe
          className="w-full rounded-lg animate-fade"
          src={
            stream?.embed_url + `&parent=${process.env.NEXT_PUBLIC_SITE_HOST}`
          }
        />
      )}
    </>
  );
}

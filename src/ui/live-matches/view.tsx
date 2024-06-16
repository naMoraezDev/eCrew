import { MatchCard } from "../match-card";
import { LiveMatchesProps } from "./types";
import { RiLiveFill } from "react-icons/ri";

export function LiveMatchesView({ games, matches }: LiveMatchesProps) {
  if (!matches.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 p-2 rounded-lg bg-gradient-to-t from-zinc-950 to-zinc-900">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2">
        <RiLiveFill />
        Jogos em andamento
      </h4>
      <div className="flex flex-col gap-2">
        {matches.map((match, index) => (
          <MatchCard key={index} games={games} match={match} />
        ))}
      </div>
    </section>
  );
}

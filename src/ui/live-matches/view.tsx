import { MatchCard } from "../match-card";
import { LiveMatchesProps } from "./types";

export function LiveMatchesView({ games, matches }: LiveMatchesProps) {
  if (!matches.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-2 p-2 rounded-lg bg-gradient-to-t from-gray-950 to-gray-900">
      <h4 className="font-kanit font-medium text-sm">Jogos em andamento</h4>
      {matches.map((match, index) => (
        <MatchCard key={index} games={games} match={match} />
      ))}
    </section>
  );
}

import "./styles.css";
import { MatchCard } from "../match-card";
import { MatchesCarouselProps } from "./types";

export function MatchesCarouselView({ games, matches }: MatchesCarouselProps) {
  return (
    <section className="relative">
      <div className="w-full overflow-x-scroll flex gap-2">
        {matches.map((match, index) => (
          <MatchCard key={index} match={match} games={games} />
        ))}
      </div>
      <div className="size-full max-w-[10%] absolute top-0 right-0 bg-gradient-to-l from-gray-950 to-transparent z-20" />
    </section>
  );
}

import "./styles.css";
import { MatchCard } from "../match-card";
import { MatchesCarouselProps } from "./types";

export function MatchesCarouselView({ games, matches }: MatchesCarouselProps) {
  return (
    <section className="w-full overflow-x-scroll flex gap-2">
      {matches.map((match, index) => (
        <MatchCard key={index} match={match} games={games} />
      ))}
    </section>
  );
}

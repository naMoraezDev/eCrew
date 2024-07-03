import "./styles.css";
import { MatchCard } from "../match-card";
import { MatchesCarouselProps } from "./types";

export function MatchesCarouselView({ matches }: MatchesCarouselProps) {
  return (
    <section className="relative">
      <div className="w-full overflow-x-scroll flex gap-2">
        {matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
      <div className="size-full max-w-[10%] absolute top-0 right-0 bg-gradient-to-l from-zinc-950 to-transparent z-20" />
    </section>
  );
}

import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { MatchCard } from "../match-card";
import { LiveMatchesCarouselProps } from "./types";

export function LiveMatchesCarouselView({
  games,
  matches,
}: LiveMatchesCarouselProps) {
  return (
    <section className="w-full pt-4 relative">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {matches.map((match, index) => (
            <CarouselItem key={index} className="basis-[80%]">
              <MatchCard games={games} match={match} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="h-full w-[10%] absolute top-0 right-0 bg-gradient-to-l from-zinc-950 to-transparent" />
    </section>
  );
}

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
    <section className="w-full p-4 relative flex flex-col gap-2">
      <h4 className="font-kanit font-medium text-sm">Em andamento</h4>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="gap-4">
          {matches.map((match, index) => (
            <CarouselItem key={index} className="basis-1/2">
              <MatchCard games={games} match={match} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="h-full w-[10%] absolute top-0 right-4 bg-gradient-to-l from-zinc-950 to-transparent"></div>
    </section>
  );
}

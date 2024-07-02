"use client";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { MatchCard } from "../match-card";
import { LiveMatchesCarouselProps } from "./types";
import { Skeleton } from "@/components/ui/skeleton";
import { useLiveMatches } from "../live-matches/_io";

export function LiveMatchesCarouselView({ games }: LiveMatchesCarouselProps) {
  const { data, isLoading } = useLiveMatches({ initialViewMore: true });

  if (!data?.length && !isLoading) {
    return null;
  }

  return (
    <section className="w-full relative bg-zinc-900 px-4 py-3 -mb-10">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {isLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[70%]">
                <Skeleton className="h-12 w-full rounded-xl !bg-zinc-800 !bg-opacity-50 !animate-fade" />
              </CarouselItem>
            ))}
          {!isLoading &&
            data?.map((match, index) => (
              <CarouselItem key={index} className="basis-[70%]">
                <MatchCard games={games} match={match} />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      <div className="h-full w-[10%] absolute top-0 right-0 bg-gradient-to-l from-zinc-900 to-transparent" />
    </section>
  );
}

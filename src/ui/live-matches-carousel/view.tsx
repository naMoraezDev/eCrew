"use client";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { MatchCard } from "../match-card";
import { LiveMatchesCarouselProps } from "./types";
import { useLiveMatches } from "../live-matches/_io";

export function LiveMatchesCarouselView({ games }: LiveMatchesCarouselProps) {
  const { data } = useLiveMatches();

  if (!data?.length) {
    return null;
  }

  return (
    <section className="w-full relative bg-zinc-900 px-4 py-3 -mb-10">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {data?.map((match, index) => (
            <CarouselItem key={index} className="basis-[70%]">
              <MatchCard match={match} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="h-full w-[10%] absolute top-0 right-0 bg-gradient-to-l from-zinc-900 to-transparent" />
    </section>
  );
}

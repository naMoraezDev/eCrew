import Image from "next/image";
import { LiveMatches } from "../live-matches";
import { PopularTags } from "../popular-tags";
import { HomeSideSectionProps } from "./types";
import { MostReadPosts } from "../most-read-posts";
import exitLagBanner from "@/assets/images/exitlag-banner.png";

export function HomeSideSectionView({ games }: HomeSideSectionProps) {
  return (
    <section className="w-1/4 mt-4 relative">
      <div className="flex flex-col gap-4 sticky top-16">
        <LiveMatches games={games} />
        <MostReadPosts />
        <PopularTags />
        <section className="p-2 relative">
          <Image
            quality={100}
            src={exitLagBanner}
            alt="exit_lag_banner"
            className="rounded-lg"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.exitlag.com/"
            className="absolute top-0 left-0 w-full h-full"
          />
        </section>
      </div>
    </section>
  );
}

import Image from "next/image";
import { HorizontalAdProps } from "./types";
import horizontalBanner from "@/assets/images/exitlag-horizontal-banner.png";

export function HorizontalAdView({ rounded = true }: HorizontalAdProps) {
  return (
    <section
      className={`${
        rounded && "rounded-lg"
      } w-full max-w-[1000px] overflow-hidden flex justify-center relative`}
    >
      <Image src={horizontalBanner} alt="exitlag horizontal banner" />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.exitlag.com/"
        className="absolute size-full top-0 left-0"
      />
    </section>
  );
}

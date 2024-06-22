import Image from "next/image";
import horizontalBanner from "@/assets/images/exitlag-horizontal-banner.png";

export function HorizontalAdView() {
  return (
    <section className="w-full max-w-[1000px] overflow-hidden flex justify-center rounded-lg relative">
      <Image
        quality={100}
        src={horizontalBanner}
        alt="exitlag horizontal banner"
      />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.exitlag.com/"
        className="absolute size-full top-0 left-0"
      />
    </section>
  );
}

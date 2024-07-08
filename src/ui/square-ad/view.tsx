import Image from "next/image";
import exitLagBanner from "@/assets/images/exitlag-banner.png";

export function SquareAdView() {
  return (
    <section className="p-2 relative">
      <Image src={exitLagBanner} alt="exit_lag_banner" className="rounded-lg" />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.exitlag.com/"
        className="absolute top-0 left-0 w-full h-full"
      />
    </section>
  );
}

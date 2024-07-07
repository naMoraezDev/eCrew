import Link from "next/link";
import Image from "next/image";
import { SiteLogoProps } from "./types";
import eCrewLogo from "@/assets/images/e_posts_logo.svg";

export function SiteLogoView({ size = "small" }: SiteLogoProps) {
  return (
    <div
      className={`
        ${size === "small" ? "gap-2" : "gap-3"}
        flex items-center  relative
      `}
    >
      <Image
        priority
        src={eCrewLogo}
        alt="ecrew logo"
        width={size === "small" ? 24 : 32}
        height={size === "small" ? 24 : 32}
      />
      <span
        className={`
          ${size === "small" ? "text-2xl" : "text-3xl"}
          font-kanit font-bold
        `}
      >
        eCrew
      </span>
      <Link href="/noticias" className="w-full h-full absolute top-0 left-0" />
    </div>
  );
}

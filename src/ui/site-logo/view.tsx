import Image from "next/image";
import { SiteLogoProps } from "./types";
import logo from "@/assets/images/ggatari-logo.svg";

export function SiteLogoView({ size = "small" }: SiteLogoProps) {
  return (
    <Image
      priority
      src={logo}
      alt="GGATARI"
      width={size === "small" ? 80 : 120}
    />
  );
}

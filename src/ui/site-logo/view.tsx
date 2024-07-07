import Link from "next/link";
import Image from "next/image";
import eCrewLogo from "@/assets/images/e_posts_logo.svg";

export function SiteLogoView() {
  return (
    <div className="flex items-center gap-2 relative">
      <Image priority width={24} height={24} src={eCrewLogo} alt="eCrew logo" />
      <span className="font-kanit text-2xl font-bold">eCrew</span>
      <Link href="/noticias" className="w-full h-full absolute top-0 left-0" />
    </div>
  );
}

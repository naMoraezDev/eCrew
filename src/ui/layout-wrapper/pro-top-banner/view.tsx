import Image from "next/image";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";
import Link from "next/link";

export function ProTopBannerView() {
  return (
    <section className="w-full h-10 bg-zinc-800 bg-opacity-50 relative">
      <div className="w-full max-w-[1000px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center gap-2">
          <Image
            priority
            width={24}
            height={24}
            src={ePostsLogo}
            alt="ePosts logo"
          />
          <span className="text-2xl text-violet-500 font-kanit font-bold">
            PRO
          </span>
        </div>
        <p className="font-kanit">
          Domine as partidas. Assine o{" "}
          <span className="font-kanit font-bold text-violet-500">PRO</span>.
        </p>
        <span className="bg-violet-500 bg-opacity-10 px-4 py-1 rounded-lg text-sm text-violet-500 font-bold">
          Assinar
        </span>
      </div>
      <Link
        href="/assinatura-pro"
        className="size-full absolute top-0 left-0"
      />
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import eCrewLogo from "@/assets/images/e_posts_logo.svg";
import { useHeader } from "../layout-wrapper/header/_io";

export function BasicHeaderView() {
  const { visible } = useHeader();
  return (
    <header
      className={`
        ${visible ? "translate-y-0" : "translate-y-[-100%]"} 
        fixed w-full top-0 z-20 bg-zinc-500 bg-opacity-10 backdrop-blur-sm duration-500
      `}
    >
      <div className="w-full h-16 flex items-center justify-between max-w-[1270px] mx-auto px-4">
        <div className="flex items-center gap-1 relative">
          <Image
            priority
            width={24}
            height={24}
            src={eCrewLogo}
            alt="eCrew logo"
          />
          <span className="font-kanit text-xl">eCrew</span>
          <Link
            href="/noticias"
            className="w-full h-full absolute top-0 left-0"
          />
        </div>
        <Link
          href="/noticias"
          className="bg-violet-500 bg-opacity-10 px-10 self-center py-2 rounded-3xl text-violet-500 font-bold"
        >
          Notícias
        </Link>
      </div>
    </header>
  );
}

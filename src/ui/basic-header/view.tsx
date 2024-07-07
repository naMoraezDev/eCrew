"use client";

import Link from "next/link";
import { SiteLogo } from "../site-logo";
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
        <SiteLogo />
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

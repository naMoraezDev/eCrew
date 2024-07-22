"use client";

import Link from "next/link";
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { UserMenu } from "../user-menu";
import { SiteLogo } from "../site-logo";
import { RiTeamFill } from "react-icons/ri";
import { IoChatbox } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { SearchInput } from "../search-input";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiNewspaperFill } from "react-icons/pi";
import brazilFlag from "@/assets/images/brazil-flag.png";
import { IoIosPodium, IoMdListBox } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

export function MenuView() {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu size={28} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-zinc-900 border-none bg-opacity-70 h-full"
      >
        <SheetHeader>
          <SheetTitle>
            <SiteLogo />
          </SheetTitle>
        </SheetHeader>
        <section className="flex flex-col gap-10 text-zinc-300 text-left h-full mt-6">
          <div className="flex flex-col gap-4">
            <div className="self-center">
              <UserMenu isDesktop />
            </div>
            <SearchInput />
          </div>
          <div className="flex flex-col gap-4 font-kanit w-full">
            <Link
              href="/noticias"
              className="flex items-center gap-2 hover:text-zinc-400 duration-300"
            >
              <PiNewspaperFill />
              Notícias
            </Link>
            <Link
              href="/torneios"
              className="flex items-center gap-2 hover:text-zinc-400 duration-300"
            >
              <IoIosPodium />
              Torneios
            </Link>
            <Link
              href="/partidas"
              className="flex items-center gap-2 hover:text-zinc-400 duration-300"
            >
              <BsFillLightningChargeFill />
              Partidas
            </Link>
          </div>
          <div className="flex flex-col gap-4 font-kanit w-full">
            <Link
              href="/noticias"
              className="flex items-center gap-2 hover:text-zinc-400 duration-300"
            >
              <RiTeamFill />
              Sobre nós
            </Link>
            <Link
              href="/noticias"
              className="flex items-center gap-2 hover:text-zinc-400 duration-300"
            >
              <IoMdListBox />
              Termos de uso
            </Link>
            <Link
              href="/noticias"
              className="flex items-center gap-2 hover:text-zinc-400 duration-300"
            >
              <MdPrivacyTip />
              Política de privacidade
            </Link>
            <Link
              href="/noticias"
              className="flex items-center gap-2 hover:text-zinc-400 duration-300"
            >
              <IoChatbox />
              Fale conosco
            </Link>
          </div>
          <div className="flex gap-2 mt-auto relative bottom-12 text-zinc-400 flex-wrap">
            <span className="text-sm font-kanit">© 2024 eCrew.</span>
            <span className="flex items-center gap-2 text-center text-xs font-kanit">
              <Image
                width={20}
                height={20}
                src={brazilFlag}
                alt="brazil flag"
                className="rounded-md"
              />
              Desenvolvido no Brasil
            </span>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}

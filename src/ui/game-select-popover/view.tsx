"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GameSelectProps } from "./types";
import gamepadIcon from "@/assets/images/gamepad_icon.png";

export function GameSelectPopoverView({ games }: GameSelectProps) {
  return (
    <section>
      <Popover>
        <PopoverTrigger className="relative top-1">
          <Image
            priority
            width={24}
            height={24}
            src={gamepadIcon}
            alt="gamepad icon"
          />
        </PopoverTrigger>
        <PopoverContent className="bg-zinc-900 border-transparent shadow-md mt-4 text-zinc-50 p-4 flex justify-center">
          <div className="grid grid-cols-3 gap-10 justify-center w-fit">
            {games.map((game, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 overflow-hidden w-10 group relative"
              >
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    width={40}
                    height={40}
                    alt={game.name}
                    src={game.icon_url}
                    className="group-hover:scale-110 duration-300"
                  />
                </div>
                <span className="w-full font-kanit font-medium text-xs whitespace-nowrap group-hover:animate-fast-text-slide">
                  {game.name}
                </span>
                <Link
                  href={`/noticias/${game.slug}`}
                  className="absolute top-0 right-0 w-full h-full"
                />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </section>
  );
}

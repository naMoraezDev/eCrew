"use client";

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
        <PopoverTrigger>
          <Image
            priority
            width={24}
            height={24}
            src={gamepadIcon}
            alt="gamepad icon"
          />
        </PopoverTrigger>
        <PopoverContent className="bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900 border-transparent shadow-md mt-4 text-zinc-50 p-4">
          <div className="flex flex-col gap-3">
            {games.map((game, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  width={20}
                  height={20}
                  alt={game.name}
                  src={game.icon_url}
                />
                <span className="font-kanit font-medium text-xs">
                  {game.name}
                </span>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </section>
  );
}

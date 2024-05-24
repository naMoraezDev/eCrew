import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import gamepadIcon from "@/assets/images/gamepad_icon.png";

export function GameSelectView() {
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
        <PopoverContent className="bg-zinc-950 border-gray-600">
          Place content for the popover here.
        </PopoverContent>
      </Popover>
    </section>
  );
}

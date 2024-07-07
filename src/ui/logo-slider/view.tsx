import Image from "next/image";
import { LogoSliderProps } from "./types";

export function LogoSliderView({ games }: LogoSliderProps) {
  return (
    <section className="relative flex w-full overflow-hidden select-none -mt-4">
      <div className="flex gap-6 shrink-0 animate-slider bg-zinc-900 bg-opacity-50">
        {games.map((game) => (
          <Image
            width={100}
            height={72}
            key={game.id}
            alt={game.name}
            src={game.logo_url}
            className="shrink-0 invert opacity-50"
          />
        ))}
        {games.map((game) => (
          <Image
            width={100}
            height={72}
            key={game.id}
            alt={game.name}
            src={game.logo_url}
            className="shrink-0 invert opacity-50"
          />
        ))}
        {games.map((game) => (
          <Image
            width={100}
            height={72}
            key={game.id}
            alt={game.name}
            src={game.logo_url}
            className="shrink-0 invert opacity-50"
          />
        ))}
        {games.map((game) => (
          <Image
            width={100}
            height={72}
            key={game.id}
            alt={game.name}
            src={game.logo_url}
            className="shrink-0 invert opacity-50"
          />
        ))}
      </div>
      <div className="size-full max-w-[20%] absolute top-0 left-0 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="size-full max-w-[20%] absolute top-0 right-0 bg-gradient-to-l from-zinc-950 to-transparent" />
    </section>
  );
}

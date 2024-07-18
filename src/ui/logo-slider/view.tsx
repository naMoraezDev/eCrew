import Link from "next/link";
import Image from "next/image";
import { LogoSliderProps } from "./types";

export function LogoSliderView({ games }: LogoSliderProps) {
  return (
    <section className="relative flex w-full overflow-hidden select-none -mt-4">
      <div className="flex gap-6 shrink-0 animate-slider bg-zinc-900 bg-opacity-50 overflow-hidden hover:paused">
        {games.map((game) => (
          <div className="flex items-center relative hover:scale-110 duration-300">
            <Image
              width={100}
              height={72}
              key={game.id}
              alt={game.name}
              src={game.logo_url}
              className="shrink-0 invert opacity-50"
            />
            <Link
              href={`/noticias/${game.slug}`}
              className="size-full absolute top-0 left-0"
            />
          </div>
        ))}
        {games.map((game) => (
          <div className="flex items-center relative hover:scale-110 duration-300">
            <Image
              width={100}
              height={72}
              key={game.id}
              alt={game.name}
              src={game.logo_url}
              className="shrink-0 invert opacity-50"
            />
            <Link
              href={`/noticias/${game.slug}`}
              className="size-full absolute top-0 left-0"
            />
          </div>
        ))}
        {games.map((game) => (
          <div className="flex items-center relative hover:scale-110 duration-300">
            <Image
              width={100}
              height={72}
              key={game.id}
              alt={game.name}
              src={game.logo_url}
              className="shrink-0 invert opacity-50"
            />
            <Link
              href={`/noticias/${game.slug}`}
              className="size-full absolute top-0 left-0"
            />
          </div>
        ))}
        {games.map((game) => (
          <div className="flex items-center relative hover:scale-110 duration-300">
            <Image
              width={100}
              height={72}
              key={game.id}
              alt={game.name}
              src={game.logo_url}
              className="shrink-0 invert opacity-50"
            />
            <Link
              href={`/noticias/${game.slug}`}
              className="size-full absolute top-0 left-0"
            />
          </div>
        ))}
      </div>
      <div className="size-full max-w-[20%] absolute top-0 left-0 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
      <div className="size-full max-w-[20%] absolute top-0 right-0 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}

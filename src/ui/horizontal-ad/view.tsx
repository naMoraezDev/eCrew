import { HorizontalAdProps } from "./types";

export function HorizontalAdView({ rounded = true }: HorizontalAdProps) {
  return (
    <section
      className={`${
        rounded && "rounded-lg"
      } w-full h-[158px] overflow-hidden flex justify-center items-center relative bg-zinc-900 bg-opacity-50`}
    >
      <span className="text-sm text-zinc-500 font-kanit">
        --- AD ---
      </span>
    </section>
  );
}

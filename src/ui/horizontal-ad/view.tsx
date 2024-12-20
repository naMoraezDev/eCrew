import { HorizontalAdProps } from "./types";

export function HorizontalAdView({
  isDesktop,
  rounded = false,
}: HorizontalAdProps) {
  return (
    <section
      className={`${(rounded || isDesktop) && "rounded-lg"} ${
        isDesktop ? "h-[158px]" : "h-[100px]"
      } w-full overflow-hidden flex justify-center items-center relative bg-zinc-900 bg-opacity-50`}
    >
      <span className="text-sm text-zinc-500 font-kanit">--- AD ---</span>
    </section>
  );
}

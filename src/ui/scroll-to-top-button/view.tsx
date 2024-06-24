"use client";

import { useScrollToTopButton } from "./_io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export function ScrollToTopButtonView() {
  const { scrollToTop } = useScrollToTopButton();

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="h-fit px-4 py-2 bg-zinc-500 rounded-lg flex items-center gap-2 whitespace-nowrap text-sm font-kanit bg-opacity-10 w-fit"
    >
      Voltar ao topo <MdKeyboardDoubleArrowUp />
    </button>
  );
}

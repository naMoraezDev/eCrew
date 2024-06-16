"use client";

import { useScrollToTopButton } from "./_io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export function ScrollToTopButtonView() {
  const { scrollToTop } = useScrollToTopButton();

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="h-fit px-2 py-1 bg-zinc-800 rounded-lg flex items-center gap-2 whitespace-nowrap text-sm font-kanit border border-zinc-600 bg-opacity-50"
    >
      Voltar ao topo <MdKeyboardDoubleArrowUp />
    </button>
  );
}

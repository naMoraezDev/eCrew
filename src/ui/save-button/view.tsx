"use client";

import { useSaveButton } from "./_io";
import { SaveButtonProps } from "./types";
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";

export function SaveButtonView({ postSlug }: SaveButtonProps) {
  const { handleSave, isSaved } = useSaveButton({ postSlug });

  return (
    <button type="button" className="z-20" title="salvar" onClick={handleSave}>
      {isSaved ? (
        <GoBookmarkFill size={20} className="text-zinc-400 animate-fade" />
      ) : (
        <GoBookmark size={20} className="text-zinc-400 animate-fade" />
      )}
    </button>
  );
}

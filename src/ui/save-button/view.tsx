"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useSaveButton } from "./_io";
import { SaveButtonProps } from "./types";
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";

export function SaveButtonView({ postSlug }: SaveButtonProps) {
  const { isLoading } = useSaveButton({ postSlug });

  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button type="button" className="z-20">
            {isLoading && (
              <>
                {false ? (
                  <GoBookmarkFill
                    size={20}
                    className="text-zinc-400 animate-spin"
                  />
                ) : (
                  <GoBookmark
                    size={20}
                    className="text-zinc-400 animate-spin"
                  />
                )}
              </>
            )}
            {!isLoading && (
              <>
                {false ? (
                  <GoBookmarkFill
                    size={20}
                    className="text-zinc-400 animate-fade"
                  />
                ) : (
                  <GoBookmark
                    size={20}
                    className="text-zinc-400 animate-fade"
                  />
                )}
              </>
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{false ? "remover" : "salvar"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

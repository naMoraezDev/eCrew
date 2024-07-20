import { useState } from "react";
import { MatchesMenuItenProps } from "./types";

export function useMatchesMenuIten({
  pastMatches,
  upcomingMatches,
}: MatchesMenuItenProps) {
  const [listType, setListType] = useState<"past" | "upcoming">("past");

  function getMatchesByType() {
    switch (listType) {
      case "past":
        return pastMatches;
      case "upcoming":
        return upcomingMatches;
      default:
        return pastMatches;
    }
  }

  return { setListType, getMatchesByType };
}

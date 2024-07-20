import { useState } from "react";
import { Category } from "../news-menu-iten/types";
import { TournamentsMenuItenProps } from "./types";

export function useTournamentsMenuIten({
  r6Tournaments,
  csTournaments,
  codTournaments,
  lolTournaments,
  dotaTournaments,
  valorantTournaments,
}: TournamentsMenuItenProps) {
  const [selectedGame, setSelectedGame] = useState<Category>("cs-go");

  function getTournamentsByGame() {
    switch (selectedGame) {
      case "cs-go":
        return csTournaments;
      case "cod-mw":
        return codTournaments;
      case "dota-2":
        return dotaTournaments;
      case "league-of-legends":
        return lolTournaments;
      case "r6-siege":
        return r6Tournaments;
      case "valorant":
        return valorantTournaments;
      default:
        return csTournaments;
    }
  }

  return { getTournamentsByGame, setSelectedGame, selectedGame };
}

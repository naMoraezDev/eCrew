import { GameName } from "@/ui/tournaments/types";

export function getGameName(gameSlug: string): GameName {
  switch (gameSlug) {
    case "cod-mw":
      return "Call of Duty";
    case "cs-go":
      return "Counter Strike";
    case "dota-2":
      return "Dota 2";
    case "league-of-legends":
      return "League of Legends";
    case "r6-siege":
      return "Rainbow 6 Siege";
    case "valorant":
      return "Valorant";
    default:
      return "Counter Strike";
  }
}

import { Games } from "@/services/types/games.types";
import { Matches } from "@/services/types/matches.types";

export interface LiveMatchesCarouselProps {
  games: Games;
  matches: Matches;
}

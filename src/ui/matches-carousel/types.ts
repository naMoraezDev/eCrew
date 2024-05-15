import { Games } from "@/services/types/games.types";
import { Matches } from "@/services/types/matches.types";

export interface MatchesCarouselProps {
  games: Games;
  matches: Matches;
}

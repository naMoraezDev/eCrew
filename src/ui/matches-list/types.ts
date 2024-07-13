import { Games } from "@/services/types/games.types";
import { MatchesList } from "@/services/pandascore/types/matches.types";

export interface MatchesListProps {
  games: Games;
  matches: MatchesList;
}

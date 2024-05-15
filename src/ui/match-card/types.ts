import { Games } from "@/services/types/games.types";
import { Match } from "@/services/types/matches.types";

export interface MatchCardProps {
  match: Match;
  games: Games;
}

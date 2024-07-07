import { Games } from "@/services/types/games.types";
import { Tournaments } from "@/services/types/tournaments.types";

export interface TournamentListProps {
  games: Games;
  tournaments: Tournaments;
}

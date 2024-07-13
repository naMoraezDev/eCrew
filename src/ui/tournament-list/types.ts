import { Games } from "@/services/types/games.types";
import { TournamentsList } from "@/services/pandascore/types/tournaments.types";

export interface TournamentListProps {
  games: Games;
  tournaments: TournamentsList;
}

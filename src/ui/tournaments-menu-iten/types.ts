import { Games } from "@/services/types/games.types";
import { TournamentsList } from "@/services/pandascore/types/tournaments.types";

export interface TournamentsMenuItenProps {
  games: Games;
  csTournaments: TournamentsList;
  r6Tournaments: TournamentsList;
  lolTournaments: TournamentsList;
  codTournaments: TournamentsList;
  dotaTournaments: TournamentsList;
  valorantTournaments: TournamentsList;
}

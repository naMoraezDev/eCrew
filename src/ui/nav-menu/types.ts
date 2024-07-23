import { Games } from "@/services/types/games.types";
import { PostsList } from "@/services/wordpress/types/posts-list";
import { MatchesList } from "@/services/pandascore/types/matches.types";
import { TournamentsList } from "@/services/pandascore/types/tournaments.types";

export interface NavMenuProps {
  games: Games;
  r6Posts: PostsList;
  csPosts: PostsList;
  codPosts: PostsList;
  lolPosts: PostsList;
  dotaPosts: PostsList;
  valorantPosts: PostsList;
  pastMatches: MatchesList;
  upcomingMatches: MatchesList;
  csTournaments: TournamentsList;
  r6Tournaments: TournamentsList;
  lolTournaments: TournamentsList;
  codTournaments: TournamentsList;
  dotaTournaments: TournamentsList;
  valorantTournaments: TournamentsList;
}

export type Category =
  | "cs-go"
  | "cod-mw"
  | "dota-2"
  | "r6-siege"
  | "valorant"
  | "league-of-legends";

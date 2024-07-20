import { DefaultProps } from "@/types/common";
import { Games } from "@/services/types/games.types";
import { PostsList } from "@/services/wordpress/types/posts-list";
import { MatchesList } from "@/services/pandascore/types/matches.types";
import { TournamentsList } from "@/services/pandascore/types/tournaments.types";

export interface HeaderProps extends DefaultProps {
  games: Games;
  csPosts: PostsList;
  r6Posts: PostsList;
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

import { Games } from "@/services/types/games.types";
import { PostsList } from "@/services/wordpress/types/posts-list";

export interface NewsMenuItenProps {
  games: Games;
  csPosts: PostsList;
  r6Posts: PostsList;
  codPosts: PostsList;
  lolPosts: PostsList;
  dotaPosts: PostsList;
  valorantPosts: PostsList;
}

export type Category =
  | "cs-go"
  | "cod-mw"
  | "dota-2"
  | "r6-siege"
  | "valorant"
  | "league-of-legends";

import { DefaultProps } from "@/types/common";
import { Games } from "@/services/types/games.types";
import { PostsList } from "@/services/wordpress/types/posts-list";

export interface HeaderProps extends DefaultProps {
  games: Games;
  csPosts: PostsList;
  r6Posts: PostsList;
  codPosts: PostsList;
  lolPosts: PostsList;
  dotaPosts: PostsList;
  valorantPosts: PostsList;
}

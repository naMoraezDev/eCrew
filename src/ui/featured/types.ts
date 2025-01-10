import { DefaultProps } from "@/types/common";
import { Games } from "@/services/types/games.types";
import { PostsList } from "@/services/wordpress/types/posts-list";

export interface FeaturedProps extends DefaultProps {
  games: Games;
  posts: PostsList;
}

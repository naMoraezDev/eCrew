import { DefaultProps } from "@/types/common";
import { Games } from "@/services/types/games.types";
import { PostsList } from "@/services/wordpress/types/posts-list";

export interface PostsCarouselProps extends DefaultProps {
  games: Games;
  category: string;
  postsList: PostsList;
}

import { DefaultProps } from "@/types/common";
import { Posts } from "@/services/types/posts.types";
import { Games } from "@/services/types/games.types";

export interface FeaturedCarouselProps extends DefaultProps {
  posts: Posts;
  games: Games;
}

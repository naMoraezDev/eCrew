import { DefaultProps } from "@/types/common";
import { Games } from "@/services/types/games.types";
import { FeaturedPost } from "@/services/wordpress/types/category";

export interface FeaturedCarouselProps extends DefaultProps {
  games: Games;
  posts: FeaturedPost[];
}

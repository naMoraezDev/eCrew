import { DefaultProps } from "@/types/common";
import { Posts } from "@/services/types/posts.types";
import { Games } from "@/services/types/games.types";

export interface LatestPostsProps extends DefaultProps {
  games: Games;
  postList: Posts;
}

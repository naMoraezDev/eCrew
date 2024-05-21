import { DefaultProps } from "@/types/common";
import { Posts } from "@/services/types/posts.types";

export interface LatestPostsProps extends DefaultProps {
  postList: Posts;
}

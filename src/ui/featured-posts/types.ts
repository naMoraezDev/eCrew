import { DefaultProps } from "@/types/common";
import { Posts } from "@/services/types/posts.types";

export interface FeaturedPostsProps extends DefaultProps {
  postList: Posts;
}

import { DefaultProps } from "@/types/common";
import { Posts } from "@/services/types/posts.types";

export interface PostsCarouselProps extends DefaultProps {
  postList: Posts;
  category: string;
}

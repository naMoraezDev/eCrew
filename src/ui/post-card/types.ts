import { DefaultProps } from "@/types/common";
import { Post } from "@/services/types/posts.types";

export interface PostCardProps extends DefaultProps {
  post: Post;
  gameIconUrl?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled";
  orientation?: "horizontal" | "vertical";
}

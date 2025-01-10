import { DefaultProps } from "@/types/common";
import { Post } from "@/services/wordpress/types/posts-list";

export interface PostCardProps extends DefaultProps {
  post: Post;
  gradient?: boolean;
  gameIconUrl?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled";
  orientation?: "horizontal" | "vertical";
}

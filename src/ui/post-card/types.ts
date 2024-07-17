import { DefaultProps } from "@/types/common";
import { Node } from "@/services/wordpress/types/posts-list";

export interface PostCardProps extends DefaultProps {
  post: Node;
  gameIconUrl?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled";
  orientation?: "horizontal" | "vertical";
}

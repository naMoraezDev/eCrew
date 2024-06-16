import { Post } from "@/services/types/posts.types";

export interface PostCardProps {
  post: Post;
  gameIconUrl?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled";
  orientation?: "horizontal" | "vertical";
}

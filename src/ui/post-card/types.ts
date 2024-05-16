import { Post } from "@/services/types/posts.types";

export interface PostCardProps {
  post: Post;
  size?: "small" | "medium";
  variant?: "outlined" | "filled";
  orientation?: "horizontal" | "vertical";
}

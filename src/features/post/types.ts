import { DefaultProps } from "@/types/common";
import { Post } from "@/services/wordpress/types/post";
import { PostsList } from "@/services/wordpress/types/posts-list";

export interface PostProps extends DefaultProps {
  post: Post;
  morePostsAbout: PostsList;
}

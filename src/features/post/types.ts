import { DefaultProps } from "@/types/common";
import { Post } from "@/services/types/post.types";
import { Tags } from "@/services/types/tags.types";
import { Posts } from "@/services/types/posts.types";

export interface PostProps extends DefaultProps {
  post: Post;
  tags: Tags;
  morePostsAbout: Posts;
}

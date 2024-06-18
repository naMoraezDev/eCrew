export interface Post {
  ID: number;
  site_ID: number;
  author: Author;
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean;
  type: string;
  discussion: Discussion;
  likes_enabled: boolean;
  sharing_enabled: boolean;
  like_count: number;
  i_like: boolean;
  is_reblogged: boolean;
  is_following: boolean;
  global_ID: string;
  featured_image: string;
  post_thumbnail: PostThumbnail;
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  publicize_URLs: any[];
  terms: Terms;
  tags: Tags;
  categories: Category2[];
  attachments: Attachments;
  attachment_count: number;
  metadata: Metadaum[];
  meta: Meta3;
  capabilities: Capabilities;
  other_URLs: OtherUrls;
}

export interface Author {
  ID: number;
  login: string;
  email: boolean;
  name: string;
  first_name: string;
  last_name: string;
  nice_name: string;
  URL: string;
  avatar_URL: string;
  profile_URL: string;
  site_ID: number;
}

export interface Discussion {
  comments_open: boolean;
  comment_status: string;
  pings_open: boolean;
  ping_status: string;
  comment_count: number;
}

export interface PostThumbnail {
  ID: number;
  URL: string;
  guid: string;
  mime_type: string;
  width: number;
  height: number;
}

export interface Terms {
  category: Category;
  post_tag: PostTag;
  post_format: PostFormat;
  mentions: Mentions;
}

export interface Category {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta;
}

export interface Meta {
  links: Links;
}

export interface Links {
  self: string;
  help: string;
  site: string;
}

export interface PostTag {}

export interface PostFormat {}

export interface Mentions {}

export interface Tags {}

export interface Category2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta2;
}

export interface Meta2 {
  links: Links2;
}

export interface Links2 {
  self: string;
  help: string;
  site: string;
}

export interface Attachments {}

export interface Metadaum {
  id: string;
  key: string;
  value: string;
}

export interface Meta3 {
  links: Links3;
}

export interface Links3 {
  self: string;
  help: string;
  site: string;
  replies: string;
  likes: string;
}

export interface Capabilities {
  publish_post: boolean;
  delete_post: boolean;
  edit_post: boolean;
}

export interface OtherUrls {}

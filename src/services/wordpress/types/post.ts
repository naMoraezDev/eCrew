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
  categories: Categories;
  attachments: Attachments;
  attachment_count: number;
  metadata: Metadaum[];
  meta: Meta6;
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
  "COD MW": CodMw;
}

export interface CodMw {
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

export interface PostTag {
  destaques: Destaques;
}

export interface Destaques {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
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

export interface PostFormat {}

export interface Mentions {}

export interface Tags {
  destaques: Destaques2;
}

export interface Destaques2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta3;
}

export interface Meta3 {
  links: Links3;
}

export interface Links3 {
  self: string;
  help: string;
  site: string;
}

export interface Categories {
  "COD MW": CodMw2;
}

export interface CodMw2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta4;
}

export interface Meta4 {
  links: Links4;
}

export interface Links4 {
  self: string;
  help: string;
  site: string;
}

export interface Attachments {
  "118": N118;
}

export interface N118 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails;
  height: number;
  width: number;
  exif: Exif;
  meta: Meta5;
}

export interface Thumbnails {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-intermediate": string;
  "newspack-article-block-portrait-intermediate": string;
  "newspack-article-block-square-intermediate": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta5 {
  links: Links5;
}

export interface Links5 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface Metadaum {
  id: string;
  key: string;
  value: string;
}

export interface Meta6 {
  links: Links6;
}

export interface Links6 {
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

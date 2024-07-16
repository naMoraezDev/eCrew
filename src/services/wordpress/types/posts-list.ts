export interface PostsList {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  posts: Posts;
}

export interface Posts {
  edges: Edge[];
  pageInfo: PageInfo;
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  featuredImage: FeaturedImage;
  categories: Categories;
  tags: Tags;
}

export interface FeaturedImage {
  node: Node2;
}

export interface Node2 {
  sourceUrl: string;
  sizes: string;
  caption: string;
}

export interface Categories {
  edges: Edge2[];
}

export interface Edge2 {
  node: Node3;
}

export interface Node3 {
  id: string;
  slug: string;
}

export interface Tags {
  edges: Edge3[];
}

export interface Edge3 {
  node: Node4;
}

export interface Node4 {
  id: string;
  slug: string;
}

export interface PageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}

export interface Post {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  post: Post;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  date: string;
  modified: string;
  author: Author;
  categories: Categories;
  tags: Tags;
  editorBlocks: EditorBlock[];
  content: string;
}

export interface FeaturedImage {
  node: Node;
}

export interface Node {
  sourceUrl: string;
  sizes: string;
  caption: string;
}

export interface Author {
  node: Node2;
}

export interface Node2 {
  id: string;
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  nicename: string;
  description: string;
  avatar: Avatar;
}

export interface Avatar {
  url: string;
  height: number;
  width: number;
  size: number;
  foundAvatar: boolean;
}

export interface Categories {
  edges: Edge[];
}

export interface Edge {
  node: Node3;
}

export interface Node3 {
  id: string;
  slug: string;
  name: string;
}

export interface Tags {
  edges: Edge2[];
}

export interface Edge2 {
  node: Node4;
}

export interface Node4 {
  id: string;
  slug: string;
  name: string;
}

export interface EditorBlock {
  name: string;
  renderedHtml: string;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}

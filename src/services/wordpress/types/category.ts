export interface Category {
  data: Data;
  extensions: Extensions2;
}

export interface Data {
  category: Category;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  extraFields: ExtraFields;
}

export interface ExtraFields {
  isEditorial: boolean;
  isHome: boolean;
  featuredPosts: FeaturedPost[];
}

export interface FeaturedPost {
  data: Data2;
  extensions: Extensions;
}

export interface Data2 {
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
  categories: Categories;
  tags: Tags;
}

export interface FeaturedImage {
  node: Node;
}

export interface Node {
  sourceUrl: string;
  sizes: string;
  caption: string;
}

export interface Categories {
  edges: Edge[];
}

export interface Edge {
  node: Node2;
}

export interface Node2 {
  id: string;
  slug: string;
  name: string;
}

export interface Tags {
  edges: Edge2[];
}

export interface Edge2 {
  node: Node3;
}

export interface Node3 {
  id: string;
  slug: string;
  name: string;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}

export interface Extensions2 {
  debug: Debug2[];
}

export interface Debug2 {
  type: string;
  message: string;
}

export interface TagsList {
  found: number;
  tags: Tag[];
}

export interface Tag {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  feed_url: string;
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

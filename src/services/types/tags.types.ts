export interface Tags {
  tags: Tag[];
  found: number;
}

export interface Tag {
  ID: number;
  meta: Meta;
  name: string;
  slug: string;
  feed_url: string;
  post_count: number;
  description: string;
}

export interface Meta {
  links: Links;
}

export interface Links {
  self: string;
  help: string;
  site: string;
}

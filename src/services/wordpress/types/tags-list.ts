export interface TagsList {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  tags: Tags;
}

export interface Tags {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: string;
  slug: string;
  name: string;
  count: number;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}

export interface PostsList {
  found: number;
  posts: Post[];
  meta: Meta34;
}

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
  meta: Meta33;
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
  "CS-GO"?: CsGo;
  "COD MW"?: CodMw;
  Valorant?: Valorant;
  "Dota 2"?: Dota2;
  "League of Legends"?: LeagueOfLegends;
  "R6 Siege"?: R6Siege;
}

export interface CsGo {
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

export interface CodMw {
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

export interface Valorant {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
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

export interface Dota2 {
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

export interface LeagueOfLegends {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta5;
}

export interface Meta5 {
  links: Links5;
}

export interface Links5 {
  self: string;
  help: string;
  site: string;
}

export interface R6Siege {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta6;
}

export interface Meta6 {
  links: Links6;
}

export interface Links6 {
  self: string;
  help: string;
  site: string;
}

export interface PostTag {
  destaques?: Destaques;
  "mais lidas"?: MaisLidas;
}

export interface Destaques {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta7;
}

export interface Meta7 {
  links: Links7;
}

export interface Links7 {
  self: string;
  help: string;
  site: string;
}

export interface MaisLidas {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta8;
}

export interface Meta8 {
  links: Links8;
}

export interface Links8 {
  self: string;
  help: string;
  site: string;
}

export interface PostFormat {}

export interface Mentions {}

export interface Tags {
  destaques?: Destaques2;
  "mais lidas"?: MaisLidas2;
}

export interface Destaques2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta9;
}

export interface Meta9 {
  links: Links9;
}

export interface Links9 {
  self: string;
  help: string;
  site: string;
}

export interface MaisLidas2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta10;
}

export interface Meta10 {
  links: Links10;
}

export interface Links10 {
  self: string;
  help: string;
  site: string;
}

export interface Categories {
  "CS-GO"?: CsGo2;
  "COD MW"?: CodMw2;
  Valorant?: Valorant2;
  "Dota 2"?: Dota22;
  "League of Legends"?: LeagueOfLegends2;
  "R6 Siege"?: R6Siege2;
}

export interface CsGo2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta11;
}

export interface Meta11 {
  links: Links11;
}

export interface Links11 {
  self: string;
  help: string;
  site: string;
}

export interface CodMw2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta12;
}

export interface Meta12 {
  links: Links12;
}

export interface Links12 {
  self: string;
  help: string;
  site: string;
}

export interface Valorant2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta13;
}

export interface Meta13 {
  links: Links13;
}

export interface Links13 {
  self: string;
  help: string;
  site: string;
}

export interface Dota22 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta14;
}

export interface Meta14 {
  links: Links14;
}

export interface Links14 {
  self: string;
  help: string;
  site: string;
}

export interface LeagueOfLegends2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta15;
}

export interface Meta15 {
  links: Links15;
}

export interface Links15 {
  self: string;
  help: string;
  site: string;
}

export interface R6Siege2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta16;
}

export interface Meta16 {
  links: Links16;
}

export interface Links16 {
  self: string;
  help: string;
  site: string;
}

export interface Attachments {
  "118"?: N118;
  "107"?: N107;
  "90"?: N90;
  "79"?: N79;
  "74"?: N74;
  "109"?: N109;
  "66"?: N66;
  "62"?: N62;
  "58"?: N58;
  "54"?: N54;
  "49"?: N49;
  "45"?: N45;
  "40"?: N40;
  "39"?: N39;
  "36"?: N36;
  "34"?: N34;
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
  meta: Meta17;
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

export interface Meta17 {
  links: Links17;
}

export interface Links17 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N107 {
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
  thumbnails: Thumbnails2;
  height: number;
  width: number;
  exif: Exif2;
  meta: Meta18;
}

export interface Thumbnails2 {
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

export interface Exif2 {
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

export interface Meta18 {
  links: Links18;
}

export interface Links18 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N90 {
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
  thumbnails: Thumbnails3;
  height: number;
  width: number;
  exif: Exif3;
  meta: Meta19;
}

export interface Thumbnails3 {
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

export interface Exif3 {
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

export interface Meta19 {
  links: Links19;
}

export interface Links19 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N79 {
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
  thumbnails: Thumbnails4;
  height: number;
  width: number;
  exif: Exif4;
  meta: Meta20;
}

export interface Thumbnails4 {
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

export interface Exif4 {
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

export interface Meta20 {
  links: Links20;
}

export interface Links20 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N74 {
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
  thumbnails: Thumbnails5;
  height: number;
  width: number;
  exif: Exif5;
  meta: Meta21;
}

export interface Thumbnails5 {
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

export interface Exif5 {
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

export interface Meta21 {
  links: Links21;
}

export interface Links21 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N109 {
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
  thumbnails: Thumbnails6;
  height: number;
  width: number;
  exif: Exif6;
  meta: Meta22;
}

export interface Thumbnails6 {
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

export interface Exif6 {
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

export interface Meta22 {
  links: Links22;
}

export interface Links22 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N66 {
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
  thumbnails: Thumbnails7;
  height: number;
  width: number;
  exif: Exif7;
  meta: Meta23;
}

export interface Thumbnails7 {
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

export interface Exif7 {
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

export interface Meta23 {
  links: Links23;
}

export interface Links23 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N62 {
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
  thumbnails: Thumbnails8;
  height: number;
  width: number;
  exif: Exif8;
  meta: Meta24;
}

export interface Thumbnails8 {
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

export interface Exif8 {
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

export interface Meta24 {
  links: Links24;
}

export interface Links24 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N58 {
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
  thumbnails: Thumbnails9;
  height: number;
  width: number;
  exif: Exif9;
  meta: Meta25;
}

export interface Thumbnails9 {
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

export interface Exif9 {
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

export interface Meta25 {
  links: Links25;
}

export interface Links25 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N54 {
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
  thumbnails: Thumbnails10;
  height: number;
  width: number;
  exif: Exif10;
  meta: Meta26;
}

export interface Thumbnails10 {
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

export interface Exif10 {
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

export interface Meta26 {
  links: Links26;
}

export interface Links26 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N49 {
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
  thumbnails: Thumbnails11;
  height: number;
  width: number;
  exif: Exif11;
  meta: Meta27;
}

export interface Thumbnails11 {
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

export interface Exif11 {
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

export interface Meta27 {
  links: Links27;
}

export interface Links27 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N45 {
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
  thumbnails: Thumbnails12;
  height: number;
  width: number;
  exif: Exif12;
  meta: Meta28;
}

export interface Thumbnails12 {
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

export interface Exif12 {
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

export interface Meta28 {
  links: Links28;
}

export interface Links28 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N40 {
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
  thumbnails: Thumbnails13;
  height: number;
  width: number;
  exif: Exif13;
  meta: Meta29;
}

export interface Thumbnails13 {
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

export interface Exif13 {
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

export interface Meta29 {
  links: Links29;
}

export interface Links29 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N39 {
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
  thumbnails: Thumbnails14;
  height: number;
  width: number;
  exif: Exif14;
  meta: Meta30;
}

export interface Thumbnails14 {
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

export interface Exif14 {
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

export interface Meta30 {
  links: Links30;
}

export interface Links30 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N36 {
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
  thumbnails: Thumbnails15;
  height: number;
  width: number;
  exif: Exif15;
  meta: Meta31;
}

export interface Thumbnails15 {
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

export interface Exif15 {
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

export interface Meta31 {
  links: Links31;
}

export interface Links31 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N34 {
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
  thumbnails: Thumbnails16;
  height: number;
  width: number;
  exif: Exif16;
  meta: Meta32;
}

export interface Thumbnails16 {
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

export interface Exif16 {
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

export interface Meta32 {
  links: Links32;
}

export interface Links32 {
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

export interface Meta33 {
  links: Links33;
}

export interface Links33 {
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

export interface Meta34 {
  links: Links34;
  wpcom: boolean;
}

export interface Links34 {
  counts: string;
}

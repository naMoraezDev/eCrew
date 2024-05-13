export type Matches = Match[];

export interface Match {
  videogame: Videogame;
  league: League;
  status: string;
  name: string;
  begin_at: string;
  streams_list: StreamsList[];
  results: Result[];
  opponents: Opponent[];
}

export interface Videogame {
  id: number;
  name: string;
  slug: string;
}

export interface League {
  id: number;
  name: string;
  slug: string;
  image_url: string;
}

export interface StreamsList {
  main: boolean;
  raw_url: string;
  language: string;
  official: boolean;
  embed_url: string;
}

export interface Result {
  score: number;
  team_id: number;
}

export interface Opponent {
  opponent: Opponent2;
}

export interface Opponent2 {
  id: number;
  name: string;
  slug: string;
  acronym: string;
  location: string;
  image_url: string;
}

export type MatchesList = Match[];

export interface Match {
  begin_at: string;
  detailed_stats: boolean;
  draw: boolean;
  end_at: string;
  forfeit: boolean;
  game_advantage: any;
  games: Game[];
  id: number;
  league: League;
  league_id: number;
  live: Live;
  match_type: string;
  modified_at: string;
  name: string;
  number_of_games: number;
  opponents: Opponent[];
  original_scheduled_at: string;
  rescheduled: boolean;
  results: Result[];
  scheduled_at: string;
  serie: Serie;
  serie_id: number;
  slug: string;
  status: string;
  streams_list: StreamsList[];
  tournament: Tournament;
  tournament_id: number;
  videogame: Videogame;
  videogame_title: any;
  videogame_version: VideogameVersion;
  winner: Winner2;
  winner_id: number;
  winner_type: string;
}

export interface Game {
  begin_at: string;
  complete: boolean;
  detailed_stats: boolean;
  end_at: string;
  finished: boolean;
  forfeit: boolean;
  id: number;
  length: number;
  match_id: number;
  position: number;
  status: string;
  winner: Winner;
  winner_type: string;
}

export interface Winner {
  id: number;
  type: string;
}

export interface League {
  id: number;
  image_url: string;
  modified_at: string;
  name: string;
  slug: string;
  url: any;
}

export interface Live {
  opens_at: any;
  supported: boolean;
  url: any;
}

export interface Opponent {
  opponent: Opponent2;
  type: string;
}

export interface Opponent2 {
  acronym: string;
  id: number;
  image_url: string;
  location: string;
  modified_at: string;
  name: string;
  slug: string;
}

export interface Result {
  score: number;
  team_id: number;
}

export interface Serie {
  begin_at: string;
  end_at: string;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name: any;
  season: string;
  slug: string;
  winner_id: number;
  winner_type: string;
  year: number;
}

export interface StreamsList {
  embed_url: string;
  language: string;
  main: boolean;
  official: boolean;
  raw_url: string;
}

export interface Tournament {
  begin_at: string;
  detailed_stats: boolean;
  end_at: string;
  has_bracket: boolean;
  id: number;
  league_id: number;
  live_supported: boolean;
  modified_at: string;
  name: string;
  prizepool: any;
  serie_id: number;
  slug: string;
  tier: string;
  winner_id: number;
  winner_type: string;
}

export interface Videogame {
  id: number;
  name: string;
  slug: string;
}

export interface VideogameVersion {
  current: boolean;
  name: string;
}

export interface Winner2 {
  acronym: string;
  id: number;
  image_url: string;
  location: string;
  modified_at: string;
  name: string;
  slug: string;
}

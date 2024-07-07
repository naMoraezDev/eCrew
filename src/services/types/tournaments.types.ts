export type Tournaments = Tournament[];

export interface Tournament {
  begin_at: string;
  detailed_stats: boolean;
  end_at: string;
  has_bracket: boolean;
  id: number;
  league: League;
  league_id: number;
  live_supported: boolean;
  matches: Match[];
  modified_at: string;
  name: string;
  prizepool?: string;
  serie: Serie;
  serie_id: number;
  slug: string;
  teams: Team[];
  tier: string;
  videogame: Videogame;
  videogame_title: VideogameTitle;
  winner_id: any;
  winner_type: string;
}

export interface League {
  id: number;
  image_url: string;
  modified_at: string;
  name: string;
  slug: string;
  url?: string;
}

export interface Match {
  begin_at?: string;
  detailed_stats: boolean;
  draw: boolean;
  end_at?: string;
  forfeit: boolean;
  game_advantage: any;
  id: number;
  live: Live;
  match_type: string;
  modified_at: string;
  name: string;
  number_of_games: number;
  original_scheduled_at: string;
  rescheduled: boolean;
  scheduled_at: string;
  slug: string;
  status: string;
  streams_list: StreamsList[];
  tournament_id: number;
  winner_id?: number;
  winner_type: string;
}

export interface Live {
  opens_at: any;
  supported: boolean;
  url: any;
}

export interface StreamsList {
  embed_url?: string;
  language: string;
  main: boolean;
  official: boolean;
  raw_url: string;
}

export interface Serie {
  begin_at: string;
  end_at: string;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name: string;
  season?: string;
  slug: string;
  winner_id: any;
  winner_type: string;
  year: number;
}

export interface Team {
  acronym?: string;
  id: number;
  image_url?: string;
  location: string;
  modified_at: string;
  name: string;
  slug: string;
}

export interface Videogame {
  id: number;
  name: string;
  slug: string;
}

export interface VideogameTitle {
  id: number;
  name: string;
  slug: string;
  videogame_id: number;
}

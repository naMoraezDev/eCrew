export type TournamentsList = Tournament[];

export interface Tournament {
  begin_at: string;
  detailed_stats: boolean;
  end_at: string;
  expected_roster: ExpectedRoster[];
  has_bracket: boolean;
  id: number;
  league: League;
  league_id: number;
  live_supported: boolean;
  matches: Match[];
  modified_at: string;
  name: string;
  prizepool: string;
  serie: Serie;
  serie_id: number;
  slug: string;
  teams: Team2[];
  tier: any;
  videogame: Videogame;
  videogame_title: any;
  winner_id: number;
  winner_type: string;
}

export interface ExpectedRoster {
  players: Player[];
  team: Team;
}

export interface Player {
  active: boolean;
  age?: number;
  birthday?: string;
  first_name: string;
  id: number;
  image_url: string;
  last_name: string;
  modified_at: string;
  name: string;
  nationality?: string;
  role: string;
  slug: string;
}

export interface Team {
  acronym: string;
  id: number;
  image_url: string;
  location: string;
  modified_at: string;
  name: string;
  slug: string;
}

export interface League {
  id: number;
  image_url: string;
  modified_at: string;
  name: string;
  slug: string;
  url: string;
}

export interface Match {
  begin_at: string;
  detailed_stats: boolean;
  draw: boolean;
  end_at: string;
  forfeit: boolean;
  game_advantage: any;
  id: number;
  live: Live;
  match_type: string;
  modified_at: string;
  name: string;
  number_of_games: number;
  original_scheduled_at?: string;
  rescheduled: boolean;
  scheduled_at: string;
  slug: string;
  status: string;
  streams_list: any[];
  tournament_id: number;
  winner_id: number;
  winner_type: string;
}

export interface Live {
  opens_at: string;
  supported: boolean;
  url: string;
}

export interface Serie {
  begin_at: string;
  end_at: string;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name: string;
  season: string;
  slug: string;
  winner_id: number;
  winner_type: string;
  year: number;
}

export interface Team2 {
  acronym: string;
  id: number;
  image_url: string;
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

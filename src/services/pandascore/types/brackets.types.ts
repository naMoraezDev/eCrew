export type Brackets = Bracket[];

export interface Bracket {
  begin_at: string;
  detailed_stats: boolean;
  draw: boolean;
  end_at: string;
  forfeit: boolean;
  game_advantage: any;
  games: Game[];
  id: number;
  live: Live;
  match_type: string;
  modified_at: string;
  name: string;
  number_of_games: number;
  opponents: Opponent[];
  original_scheduled_at: any;
  previous_matches: PreviousMatch[];
  results: Result[];
  scheduled_at: string;
  slug: string;
  status: string;
  streams_list: any[];
  tournament_id: number;
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

export interface PreviousMatch {
  match_id: number;
  type: string;
}

export interface Result {
  score: number;
  team_id: number;
}

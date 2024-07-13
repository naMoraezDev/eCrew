export type Standings = Standing[];

export interface Standing {
  last_match: LastMatch;
  rank: number;
  team: Team;
}

export interface LastMatch {
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
  original_scheduled_at: string;
  rescheduled: boolean;
  scheduled_at: string;
  slug: string;
  status: string;
  streams_list: any[];
  tournament_id: number;
  winner_id: any;
  winner_type: string;
}

export interface Live {
  opens_at: string;
  supported: boolean;
  url: string;
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

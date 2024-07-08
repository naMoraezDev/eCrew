export interface TournamentsProps {
  game?: GameName;
}

export type GameName =
  | "Dota 2"
  | "Valorant"
  | "Call of Duty"
  | "Counter Strike"
  | "League of Legends"
  | "Rainbow 6 Siege";

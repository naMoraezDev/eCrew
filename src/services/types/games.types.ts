export type Games = Game[];

export interface Game {
  id: number;
  name: string;
  slug: string;
  icon_url: string;
  logo_url: string;
}

import { MatchCardProps } from "./types";

export function useMatchCard({ games, match }: MatchCardProps) {
  const stream = match.streams_list.find((stream) => stream.main);
  const gameIcon = games.find(
    (game) => game.slug === match.videogame.slug
  )?.icon_url;

  return { stream, gameIcon };
}

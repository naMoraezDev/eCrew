import { MatchCardProps } from "./types";

export function useMatchCard({ games, match }: MatchCardProps) {
  const stream = match.streams_list.find((stream) => stream.main);
  const gameLogo = games.find(
    (game) => game.slug === match.videogame.slug
  )?.logo_url;

  return { stream, gameLogo };
}

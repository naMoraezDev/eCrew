import { useState } from "react";
import { MatchCardProps } from "./types";

export function useMatchCard({ games, match }: MatchCardProps) {
  const [revealStream, setRevealStream] = useState(false);
  const stream = match.streams_list.find((stream) => stream.main);
  const gameLogo = games.find(
    (game) => game.slug === match.videogame.slug
  )?.logo_url;

  function handleRevealStream() {
    setRevealStream(!revealStream);
  }

  return { stream, gameLogo, revealStream, handleRevealStream };
}

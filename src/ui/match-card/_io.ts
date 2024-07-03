import { useState } from "react";
import { MatchCardProps } from "./types";

export function useMatchCard({ match }: MatchCardProps) {
  const [revealStream, setRevealStream] = useState(false);
  const stream = match.streams_list.find((stream) => stream.main);

  function handleRevealStream() {
    setRevealStream(!revealStream);
  }

  return { stream, revealStream, handleRevealStream };
}

import { useState } from "react";
import { TournamentListProps } from "./types";
import { Tournaments } from "@/services/types/tournaments.types";

export function useTournamentList({ games, tournaments }: TournamentListProps) {
  const [value, setvalue] = useState<string | null>(null);
  const [filteredTournaments, setFilteredTournaments] =
    useState<Tournaments>(tournaments);

  function hendleChange(value: string) {
    setvalue(value);
    if (!Boolean(value.length)) {
      setFilteredTournaments(tournaments);
      return;
    }
    setFilteredTournaments(
      tournaments.filter((tournament) => tournament.videogame.slug === value)
    );
  }

  return { value, hendleChange, filteredTournaments };
}

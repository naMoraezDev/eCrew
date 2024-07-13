import { useState } from "react";
import { TournamentListProps } from "./types";
import { TournamentsList } from "@/services/pandascore/types/tournaments.types";

export function useTournamentList({ games, tournaments }: TournamentListProps) {
  const [value, setvalue] = useState<string | null>(null);
  const [filteredTournaments, setFilteredTournaments] =
    useState<TournamentsList>(tournaments);

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

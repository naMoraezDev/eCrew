import { useState } from "react";
import { Category, NavMenuProps } from "./types";

export function useNavMenu({
  csPosts,
  r6Posts,
  lolPosts,
  codPosts,
  dotaPosts,
  pastMatches,
  valorantPosts,
  r6Tournaments,
  csTournaments,
  lolTournaments,
  codTournaments,
  upcomingMatches,
  dotaTournaments,
  valorantTournaments,
}: NavMenuProps) {
  const [selectedGame, setSelectedGame] = useState<Category>("cs-go");
  const [listType, setListType] = useState<"past" | "upcoming">("past");
  const [selectedCategory, setSelectedCategory] = useState<Category>("cs-go");

  function getPostsByCategory() {
    switch (selectedCategory) {
      case "cs-go":
        return csPosts;
      case "cod-mw":
        return codPosts;
      case "dota-2":
        return dotaPosts;
      case "league-of-legends":
        return lolPosts;
      case "r6-siege":
        return r6Posts;
      case "valorant":
        return valorantPosts;
      default:
        return csPosts;
    }
  }

  function getTournamentsByGame() {
    switch (selectedGame) {
      case "cs-go":
        return csTournaments;
      case "cod-mw":
        return codTournaments;
      case "dota-2":
        return dotaTournaments;
      case "league-of-legends":
        return lolTournaments;
      case "r6-siege":
        return r6Tournaments;
      case "valorant":
        return valorantTournaments;
      default:
        return csTournaments;
    }
  }

  function getMatchesByType() {
    switch (listType) {
      case "past":
        return pastMatches;
      case "upcoming":
        return upcomingMatches;
      default:
        return pastMatches;
    }
  }

  const tournaments = [
    ...csTournaments,
    ...r6Tournaments,
    ...lolTournaments,
    ...codTournaments,
    ...dotaTournaments,
    ...valorantTournaments,
  ];

  return {
    tournaments,
    setListType,
    setSelectedGame,
    selectedCategory,
    getMatchesByType,
    getPostsByCategory,
    setSelectedCategory,
    getTournamentsByGame,
  };
}

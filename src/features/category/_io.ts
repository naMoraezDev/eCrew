import { CategoryProps } from "./types";
import r6 from "@/assets/images/r6-background.jpg";
import cs from "@/assets/images/cs-background.jpeg";
import cod from "@/assets/images/cod-background.jpg";
import lol from "@/assets/images/lol-background.jpg";
import dota from "@/assets/images/dota-background.jpg";
import valorant from "@/assets/images/valorant-background.jpg";

export function useCategory({ category }: CategoryProps) {
  function getBackgroundData() {
    switch (category) {
      case "cod-mw":
        return {
          position: "top",
          background: cod,
        };
      case "dota-2":
        return {
          background: dota,
          position: "center",
        };
      case "league-of-legends":
        return {
          background: lol,
          position: "bottom",
        };
      case "r6-siege":
        return {
          background: r6,
          position: "top",
        };
      case "valorant":
        return {
          position: "bottom",
          background: valorant,
        };
      case "cs-go":
        return {
          background: cs,
          position: "center",
        };
      default:
        return null;
    }
  }

  return {
    getBackgroundData,
  };
}

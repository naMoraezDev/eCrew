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
          background: cod,
          styles: "object-top",
          url: "https://www.callofduty.com/br/pt/warzone",
        };
      case "dota-2":
        return {
          background: dota,
          styles: "object-center",
          url: "https://www.dota2.com/home",
        };
      case "league-of-legends":
        return {
          background: lol,
          styles: "object-bottom",
          url: "https://www.leagueoflegends.com/",
        };
      case "r6-siege":
        return {
          background: r6,
          styles: "object-center",
          url: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege",
        };
      case "valorant":
        return {
          background: valorant,
          styles: "object-center",
          url: "https://playvalorant.com/",
        };
      case "cs-go":
        return {
          background: cs,
          styles: "object-center",
          url: "https://www.counter-strike.net/cs2",
        };
      default:
        return null;
    }
  }

  function getChannelId() {
    switch (category) {
      case "cod-mw":
        return "UC9YydG57epLqxA9cTzZXSeQ";
      case "dota-2":
        return "UCMm9pF8QkLS3UN2fRbYgWoA";
      case "league-of-legends":
        return "UC48rkTlXjRd6pnqqBkdV0Mw";
      case "r6-siege":
        return "UCFYYhd9-VxkHnaA5cOiSybA";
      case "valorant":
        return "UCgWiuB2PQIUhJgEN9No281g";
      case "cs-go":
        return "UCPq2ETz4aAGo2Z-8JisDPIA";
      default:
        return null;
    }
  }

  return {
    getChannelId,
    getBackgroundData,
  };
}

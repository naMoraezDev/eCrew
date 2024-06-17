import { PostsCarouselProps } from "./types";
import r6 from "@/assets/images/r6-background.jpg";
import fpsIcon from "@/assets/images/fps-icon.png";
import cs from "@/assets/images/cs-background.jpeg";
import cod from "@/assets/images/cod-background.jpg";
import lol from "@/assets/images/lol-background.jpg";
import mobaIcon from "@/assets/images/moba-icon.png";
import dota from "@/assets/images/dota-background.jpg";
import valorant from "@/assets/images/valorant-background.jpg";

export function usePostsCarousel({ category, games }: PostsCarouselProps) {
  const gameIconUrl = games.find((game) => game.name === category)?.icon_url;
  function getGameCover() {
    switch (category) {
      case "Counter-Strike: Global Offensive":
        return cs;
      case "Rainbow Six Siege":
        return r6;
      case "League of Legends":
        return lol;
      case "Dota 2":
        return dota;
      case "Call of Duty: Modern Warfare":
        return cod;
      case "Valorant":
        return valorant;
      default:
        return cs;
    }
  }

  function getGameTypeIcon() {
    switch (category) {
      case "Counter-Strike: Global Offensive":
        return fpsIcon;
      case "Rainbow Six Siege":
        return fpsIcon;
      case "League of Legends":
        return mobaIcon;
      case "Dota 2":
        return mobaIcon;
      case "Call of Duty: Modern Warfare":
        return fpsIcon;
      case "Valorant":
        return fpsIcon;
      default:
        return fpsIcon;
    }
  }

  return { gameIconUrl, getGameCover, getGameTypeIcon };
}

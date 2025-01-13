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
  const gameIconUrl = games.find((game) => game.slug === category)?.icon_url;
  function getGameCover() {
    switch (category) {
      case "cs-go":
        return cs;
      case "r6-siege":
        return r6;
      case "league-of-legends":
        return lol;
      case "dota-2":
        return dota;
      case "cod-mw":
        return cod;
      case "valorant":
        return valorant;
      default:
        return cs;
    }
  }

  function getGameTypeIcon() {
    switch (category) {
      case "cs-go":
        return fpsIcon;
      case "r6-siege":
        return fpsIcon;
      case "league-of-legends":
        return mobaIcon;
      case "dota-2":
        return mobaIcon;
      case "cod-mw":
        return fpsIcon;
      case "valorant":
        return fpsIcon;
      default:
        return fpsIcon;
    }
  }

  return { gameIconUrl, getGameCover, getGameTypeIcon };
}

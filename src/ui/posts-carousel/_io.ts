import { PostsCarouselProps } from "./types";
import csCover from "@/assets/images/cs-cover.jpg";
import r6Cover from "@/assets/images/r6-cover.jpg";
import fpsIcon from "@/assets/images/fps-icon.png";
import lolCover from "@/assets/images/lol-cover.png";
import codCover from "@/assets/images/cod-cover.jpg";
import mobaIcon from "@/assets/images/moba-icon.png";
import dotaCover from "@/assets/images/dota-cover.jpg";
import valorantCover from "@/assets/images/valorant-cover.jpg";

export function usePostsCarousel({ category, games }: PostsCarouselProps) {
  const gameIconUrl = games.find((game) => game.name === category)?.icon_url;
  function getGameCover() {
    switch (category) {
      case "Counter-Strike: Global Offensive":
        return csCover;
      case "Rainbow Six Siege":
        return r6Cover;
      case "League of Legends":
        return lolCover;
      case "Dota 2":
        return dotaCover;
      case "Call of Duty: Modern Warfare":
        return codCover;
      case "Valorant":
        return valorantCover;
      default:
        return csCover;
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

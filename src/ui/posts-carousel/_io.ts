import { PostsCarouselProps } from "./types";
import csCover from "@/assets/images/cs-cover.jpg";
import r6Cover from "@/assets/images/r6-cover.jpg";
import lolCover from "@/assets/images/lol-cover.png";
import codCover from "@/assets/images/cod-cover.jpg";
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

  return { gameIconUrl, getGameCover };
}

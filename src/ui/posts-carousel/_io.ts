import { PostsCarouselProps } from "./types";

export function usePostsCarousel({ category, games }: PostsCarouselProps) {
  const gameIconUrl = games.find((game) => game.name === category)?.icon_url;

  return { gameIconUrl };
}

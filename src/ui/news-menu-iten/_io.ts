import { useState } from "react";
import { Category, NewsMenuItenProps } from "./types";

export function useMenuIten({
  csPosts,
  r6Posts,
  lolPosts,
  codPosts,
  dotaPosts,
  valorantPosts,
}: NewsMenuItenProps) {
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

  return { getPostsByCategory, setSelectedCategory, selectedCategory };
}

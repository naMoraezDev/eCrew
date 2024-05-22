import { useEffect, useState } from "react";
import { FeaturedPostsProps } from "./types";
import { CarouselApi } from "@/components/ui/carousel";

export function useFeaturedPosts({ postList }: FeaturedPostsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredPosts = [
    postList.posts[1],
    postList.posts[0],
    postList.posts[1],
    postList.posts[0],
  ];

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return { setApi, currentIndex, featuredPosts };
}

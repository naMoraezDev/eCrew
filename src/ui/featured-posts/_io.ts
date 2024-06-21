import { useEffect, useState } from "react";
import { FeaturedPostsProps } from "./types";
import { CarouselApi } from "@/components/ui/carousel";

export function useFeaturedPosts({ postList }: FeaturedPostsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollToSlide = (index: number) => {
    if (!api) {
      return;
    }
    api.scrollTo(index);
  };

  return { setApi, currentIndex, scrollToSlide };
}

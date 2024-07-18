import { useEffect, useState } from "react";
import { FeaturedCarouselProps } from "./types";

export function useFeaturedCarousel({ posts }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function scrollToSlide(index: number) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, posts.length]);

  return { currentIndex, scrollToSlide };
}

/* eslint-disable jsx-a11y/alt-text */

"use client";

import {
  useState,
  useEffect,
  forwardRef,
  CSSProperties,
  ComponentProps,
} from "react";
import Image from "next/image";

type ProgressiveImageProps = ComponentProps<typeof Image> & {
  lowQuality?: number;
  highQuality?: number;
  onHighResLoad?: () => void;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

const ProgressiveImageView = forwardRef<
  HTMLImageElement,
  ProgressiveImageProps
>(
  (
    {
      lowQuality = 20,
      highQuality = 100,
      onHighResLoad,
      wrapperClassName = "",
      wrapperStyle = {},

      quality,
      priority = false,
      onLoad,
      className = "",
      style = {},

      ...imageProps
    },
    ref
  ) => {
    const [currentQuality, setCurrentQuality] = useState<number | undefined>(
      quality !== undefined ? Number(quality) : lowQuality
    );

    const [isHighQualityLoaded, setIsHighQualityLoaded] =
      useState<boolean>(false);

    useEffect(() => {
      if (isHighQualityLoaded) {
        return;
      }

      let hasScrolled = false;

      const handleScroll = (): void => {
        if (hasScrolled) return;

        hasScrolled = true;
        setCurrentQuality(
          quality !== undefined ? Number(quality) : highQuality
        );

        window.removeEventListener("scroll", handleScroll);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [quality, highQuality, isHighQualityLoaded]);

    const handleImageLoad = (e: any): void => {
      const highQualityValue =
        quality !== undefined ? Number(quality) : highQuality;
      if (currentQuality === highQualityValue) {
        setIsHighQualityLoaded(true);

        if (onHighResLoad) {
          onHighResLoad();
        }
      }

      if (onLoad) {
        onLoad(e);
      }
    };

    const showBlurEffect = !isHighQualityLoaded;

    const imageClassNames = `${className} ${
      showBlurEffect ? "blur-md" : "blur-none"
    } transition-all duration-500 ease-in-out`;

    const combinedImageStyle = {
      ...style,
      objectFit: style.objectFit || "cover",
      objectPosition: style.objectPosition || "center",
    };

    return (
      <div
        className={`relative overflow-hidden size-full ${
          !showBlurEffect && wrapperClassName
        }`}
        style={wrapperStyle}
      >
        <Image
          ref={ref}
          priority={priority}
          onLoad={handleImageLoad}
          quality={currentQuality}
          style={combinedImageStyle}
          className={imageClassNames}
          {...imageProps}
        />
      </div>
    );
  }
);

ProgressiveImageView.displayName = "ProgressiveImage";

export default ProgressiveImageView;

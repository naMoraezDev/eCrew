import { CSSProperties } from "react";

export interface ProgressiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  [key: string]: any;
  onLoad?: () => void;
  lowQuality?: number;
  highQuality?: number;
  style?: CSSProperties;
}

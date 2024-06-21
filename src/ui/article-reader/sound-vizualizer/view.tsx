import styles from "./styles.module.scss";
import { useSoundVizualizer } from "./_io";
import { SoundVizualizerProps } from "./types";

export function SoundVisualizerView({
  color,
  height,
  barCount,
  barWidth,
}: SoundVizualizerProps) {
  const { items } = useSoundVizualizer({ barCount });

  return (
    <section className="flex gap-1 animate-fade-in self-center" style={{ height }}>
      {items.map((_, index) => (
        <div
          key={index}
          className={`${styles.bar} h-full`}
          style={{
            width: barWidth,
            backgroundColor: color,
            animationDelay: `${Math.random()}s`,
            animationDuration: `${0.5 + Math.random()}s`,
            transform: `scaleY(${0.25 + Math.random() * 0.75})`,
          }}
        />
      ))}
    </section>
  );
}

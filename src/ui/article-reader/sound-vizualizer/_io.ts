export function useSoundVizualizer({ barCount }: { barCount: number }) {
  const items = Array.from(Array(barCount), (_, i) => i);

  return { items };
}

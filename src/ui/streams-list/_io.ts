import { useState } from "react";

export function useStreamsList() {
  const [selectedStreamIndex, setSelectedStreamIndex] = useState(0);

  return { selectedStreamIndex, setSelectedStreamIndex };
}

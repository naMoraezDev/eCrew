import { useState } from "react";

export function useUpcommingMatches({
  initialViewMore = false,
}: { initialViewMore?: boolean } = {}) {
  const [viewMore, setViewMore] = useState(initialViewMore);

  function toggleViewMore() {
    setViewMore(!viewMore);
  }

  return { toggleViewMore, viewMore };
}

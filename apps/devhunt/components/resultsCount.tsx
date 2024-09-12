"use client";

import { useJobItemsContext } from "lib/hooks";

export default function ResultsCount() {
  const { totalNumberOfResults } = useJobItemsContext();
  return (
    <p className="text-xs">
      <span className="font-bold">{totalNumberOfResults} results</span>
    </p>
  );
}

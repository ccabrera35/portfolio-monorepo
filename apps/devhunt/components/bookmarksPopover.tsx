"use client";

import { useBookmarksContext } from "lib/hooks";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import JobList from "./jobList";

export const BookmarksPopover = forwardRef<HTMLDivElement>(function BookmarksPopover2 (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();

  return createPortal(
    <div ref={ref} className="bg-white min-h-[76px] min-w-[340px] w-[340px] rounded-[4px] overflow-hidden z-10 shadow-[0_5px_8px_rgba(0,0,0,0.15)] transform -translate-x-1/2 origin-left transition-all duration-200 fixed left-1/2 top-[82px]"
>
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

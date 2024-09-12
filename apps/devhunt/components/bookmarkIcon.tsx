"use client";

import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "lib/hooks";

type BookmarkItemProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkItemProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button
      className="cursor-pointer text-black"
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation;
        e.preventDefault();
      }}
    >
      <BookmarkFilledIcon
        className={`transition-all duration-200 text-[18px] ${
          bookmarkedIds.includes(id) ? "text-[#2671dd]" : "text-[#d7dbe04f]"
        } hover:text-[#3578b2] hover:rotate-[360deg]`}
      />
    </button>
  );
}

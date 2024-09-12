"use client";

import { TriangleDownIcon } from "@radix-ui/react-icons";
import { BookmarksPopover } from "./bookmarksPopover";
import { useOnClickOutside } from "lib/hooks";
import { useRef, useState } from "react";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([buttonRef, popoverRef], () => {
    setIsOpen(false);
  });

  return (
    <section>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative flex items-center ml-[13px] pl-[13px] h-[32px] text-[13px] lowercase cursor-pointer transition-all duration-200 ease-in-out
          text-white/75 hover:text-white focus:text-white
          before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[15px] before:w-[2px] before:bg-white/30`}
      >
        Bookmarks
        <TriangleDownIcon className={`ml-[2px] transform -translate-y-[1px] text-white/60 transition-all duration-200 
            ${isOpen ? 'text-white/80' : 'hover:text-white/80 focus:text-white/80'}`}
        />
      </button>
      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}

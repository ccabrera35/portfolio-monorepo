"use client";

import { cn } from "lib/utils";
import { useJobItemsContext } from "lib/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons/faArrowDownShortWide";

export default function Sorting() {
  const { sortBy, handleSortByChange } = useJobItemsContext();
  return (
    <section className="flex items-center gap-[4px]">
      <FontAwesomeIcon
        icon={faArrowDownShortWide}
        className="text-[11px] text-[#4c4f50] mr-[5px]"
      />
      {/* <i className="fa-solid fa-arrow-down-short-wide text-[11px] text-[#4c4f50] mr-[5px]"></i> */}
      <SortingButton
        onClick={() => handleSortByChange("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => handleSortByChange("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}
type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      className={cn(
        "text-[10px] uppercase bg-[#e8edf0] px-[8px] py-[6px] rounded-[3px] ml-[2px] cursor-pointer transition-all duration-200 hover:bg-[#d0d5d8] focus:bg-[#d0d5d8]",
        {
          "text-white bg-[#3c4041] hover:bg-[#3c4041] focus:bg-[#3c4041]":
            isActive
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

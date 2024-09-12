"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useJobItemsContext } from "lib/hooks";
import { PageDirection } from "lib/types";
import { cn } from "lib/utils";

export default function PaginationControls() {
  const { currentPage, totalNumberOfPages, handlePageChange: onClick } =
    useJobItemsContext();
  return (
    <section className="h-[40px] mt-auto flex items-center justify-between px-[20px] pb-[1px] border-t border-[#e8edf0]">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          onClick={() => onClick("previous")}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => onClick("next")}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: PageDirection;
  currentPage: number;
  onClick: () => void;
};

function PaginationButton({
  direction,
  currentPage,
  onClick
}: PaginationButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      className={cn(`text-[10px] px-[10px] py-[4px] rounded-full text-[#747c82] bg-[#eceff2] cursor-pointer transition-all duration-200 gap-[2px] flex items-center hover:bg-[#dde2e6] focus:bg-[#dde2e6]`,
        {
         "ml-auto": direction === "next",

        }
      )}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon className="mr-[3px] text-[#9fa6b0] text-[8px]"/>
          Page {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon className="ml-[3px] text-[#9fa6b0] text-[8px]"/>
        </>
      )}
    </button>
  );
}

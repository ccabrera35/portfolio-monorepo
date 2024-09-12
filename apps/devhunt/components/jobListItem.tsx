"use client";

import BookmarkIcon from "./bookmarkIcon";
import { JobItem } from "lib/types";
import { cn } from "lib/utils";

type JobListItemProps = {
  jobItem: JobItem;
  isActive: boolean;
};

export default function JobListItem({ jobItem, isActive }: JobListItemProps) {
  const { title, company, badge_letters, days_ago } = jobItem;
  return (
    <li
      className={cn(
        "transition-colors duration-200 bg-white hover:bg-[#f4f5f7] h-[76px] cursor-pointer border-b-[1px] last:border-b-0 border-b-[#ebeff1]",
        "[&:nth-child(even)_div:first-child]:text-[rgba(255,255,255,0.85)]",
        "[&:nth-child(4n+2)_div:first-child]:bg-[#0a3c66]",
        "[&:nth-child(4n+3)_div:first-child]:bg-[#2e8bc0]",
        "[&:nth-child(4n+4)_div:first-child]:bg-[#145da0]",
        "[&:not(:nth-child(7))]:border-b [&:not(:nth-child(7))]:border-[#ebeff1]",
        {
          "bg-[#f4f5f7]": isActive,
          "bg-white": !isActive
        }
      )}
    >
      <a
        href={`#${jobItem.id}`}
        className={cn(
          "flex h-full w-full px-5 py-[14px]"
        )}
      >
        <div className="badge flex justify-center items-center font-semibold bg-[#1467af] text-[13px] h-[46px] w-[38px]  mr-[13px] rounded-[5px]">
          {badge_letters}
        </div>

        <div className="job-item__middle">
          <h3 className="leading-tight mt-1 font-medium text-[15px]">{title}</h3>
          <p className="text-[13px] italic">{company}</p>
        </div>

        <div
          className="flex flex-col items-center ml-auto"
          style={{
            transform: "translateX(2px) translateY(0px)"
          }}
        >
          <BookmarkIcon id={jobItem.id} />
          <time className="text-[#515459] mt-[5px] text-[11px]">
            {days_ago}d
          </time>
        </div>
      </a>
    </li>
  );
}

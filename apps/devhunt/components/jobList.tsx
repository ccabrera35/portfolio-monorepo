"use client";

import { useActiveIdContext } from "lib/hooks";
import { JobItem } from "lib/types";
import JobListItem from "./jobListItem";
import Spinner from "./spinner";

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: JobListProps) {
  const { activeId } = useActiveIdContext();

  return (
    <ul
      className="list bg-white relative min-h-[140px] flex flex-1 flex-col"
    >
      {isLoading && <Spinner className="mt-20 mx-auto"/>}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

export default JobList;

import { handleError, supabase } from "./utils";
import { JobItem, JobItemExpanded } from "./types";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useMemo, useState } from "react";
import { ActiveIdContext } from "contexts/ActiveIdContextProvider";
import { JobItemsContext } from "contexts/JobItemsContextProvider";
import { BookmarksContext } from "contexts/BookmarksContextProvider";
import { SearchTextContext } from "contexts/SearchTextContextProvider";

type JobItemApiResponse = {
  jobItem: JobItemExpanded;
};

const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
  const { data, error } = await supabase
    .from("job_posting")
    .select()
    .eq("id", id)
    .returns<JobItemExpanded[]>();

  if (!data) {
    throw new Error(error.message);
  }

  return { jobItem: data[0] };
};

export function useJobItem(id: number | null) {
  const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError
    }
  );
  
  return { jobItem: data?.jobItem, isLoading: isInitialLoading } as const;
}

export function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids?.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError
    }))
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobItem) => Boolean(jobItem)) as JobItemExpanded[];
  const isLoading = results.some((result) => result.isLoading);

  return { jobItems, isLoading }
}

type JobItemsApiResponse = {
  jobItems: JobItem[];
};

const fetchJobItems = async (
  searchText: string
): Promise<JobItemsApiResponse> => {
  const { data, error } = await supabase
    .from("job_posting")
    .select()
    .ilike("title", `%${searchText}%`)
    .returns<JobItemExpanded[]>();

  if (!data) {
    throw new Error(error.message);
  }

  return { jobItems: data };
};

export function useSearchQuery(searchText: string) {
  const { data, isInitialLoading } = useQuery(
    ["job-items", searchText],
    () => fetchJobItems(searchText),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
      onError: handleError
    }
  );

  return { jobItems: data?.jobItems, isLoading: isInitialLoading } as const;
}

export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {

    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

const parseArray = (value: string | string[] | undefined): string[] => {
  try {
    if (Array.isArray(value)) {
      return value;
    }
    return JSON.parse(value || '[]');
  } catch (error) {
    console.error('Failed to parse value:', value, error);
    return [];
  }
};

export function useParsedJobItem(jobItem: JobItemExpanded | null) {
  return useMemo(() => {
    if (!jobItem) {
      return {
        qualifications: [],
        reviews: []
      };
    }

    return {
      qualifications: parseArray(jobItem.qualifications),
      reviews: parseArray(jobItem.reviews)
    };
  }, [jobItem]);
}

export function useOnClickOutside(
  refs: React.RefObject<HTMLElement>[],
  handler: () => void
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(e.target as Node))) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refs, handler]);
}

export function useBookmarksContext() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error(
      "useBookmarksContext must be used within a BookmarksContextProvider"
    );
  }
  return context;
}

export function useActiveIdContext() {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw new Error(
      "useActiveIdContext must be used within an ActiveIdContextProvider"
    );
  }
  return context;
}

export function useSearchTextContext() {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error(
      "useSearchTextContext must be used within a SearchTextContextProvider"
    );
  }
  return context;
}

export function useJobItemsContext() {
  const context = useContext(JobItemsContext);
  if (!context) {
    throw new Error(
      "useJobItemsContext must be used within an JobItemsContextProvider"
    );
  }
  return context;
}

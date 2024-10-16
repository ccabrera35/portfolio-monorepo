import Link from "next/link";
import { getEvents } from "../lib/server-utils";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `${process.env.NEXT_PUBLIC_BASE_PATH}/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `${process.env.NEXT_PUBLIC_BASE_PATH}/events/${city}?page=${page + 1}` : "";

  if (events.length === 0) {
    return (
      <p>
        No results were found! &nbsp;
        <Link href="/cityvibe" className="text-blue-500">
          Try searching for something else.
        </Link>
      </p>
    );
  }
  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center">
      {" "}
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}

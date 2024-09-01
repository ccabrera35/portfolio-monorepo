import Link from "next/link";
import SearchForm from "../components/search-form";
import H1 from "../components/h1";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold text-accent italic underline">
          10,000 events
        </span>{" "}
        around you
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-2 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/events/houston`}>Houston</Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/events/tokyo`}>Tokyo</Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/events/sydney`}>Sydney</Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/events/new%20york`}>New York</Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/events/rio%20de%20janeiro`}>Rio de Janeiro</Link>
        </div>
      </section>
    </main>
  );
}

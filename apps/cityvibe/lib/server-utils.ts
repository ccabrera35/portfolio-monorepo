import "server-only";

import prisma from "./db";
import { capitalize } from "./utils";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.event.findMany({
    skip: (page - 1) * 6, 
    take: 6,
    where: {
      city: city === "all" ? undefined : capitalize(city)
    },
    orderBy: {
      date: "asc"
    }
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.event.count();
  } else {
    totalCount = await prisma.event.count({
      where: {
        city: capitalize(city)
      }
    });
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug
    }
  });

  if (!event) {
    return notFound();
  }

  return event;
});

"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { Event } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";

type EventCardProps = {
  event: Event;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/event/${event.slug}`}
      ref={ref}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress
      }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <section
        className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects"
        key={event.id}
      >
        <Image
          src={event.image_url}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizer_name}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="font-bold text-xl -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit"
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short"
            })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}

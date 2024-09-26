"use client";

import { projectsData } from "lib/data";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  url
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] 
      border border-black/5 
      rounded-lg overflow-hidden 
      sm:pr-8 relative sm:h-[340px] lg:h-[20rem]
      sm:group-even:pl-8 
       hover:bg-gray-200 
       transition 
       dark:text-white 
       dark:bg-white/10 
       dark:hover:bg-white/20">
       
        <div className="
          pt-4 pb-7 px-5 
          md:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
          flex flex-col h-full 
          md:group-even:pl-3 
          sm:group-even:ml-[12rem] 
          md:group-even:ml-[18rem]">
            <Link href={url}><h3 className="text-2xl sm:text-lg md:text-2xl font-semibold">{title}</h3></Link>
          <p className="mt-2 mb-2 leading-snug sm:text-sm md:text-base md:leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap md:mt-4 mt-6 gap-2 sm:gap-1 md:gap-2 sm:mt-auto">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-slate-950/[0.7] tracking-wider sm:px-1 sm:py-[2px] px-3 py-1 text-[0.7rem] md:px-3 md:py-1 sm:text-[0.6rem] md:text-[0.7rem] uppercase sm:tracking-tight md:tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Link href={url}>
            <Image
              alt={title}
              src={imageUrl}
              quality={95}
              onClick={() => setFlipped(!flipped)}
              className={clsx(
                "absolute hidden sm:block top-8 -right-56 md:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-56 md:group-even:-left-40"
              )}
            />
        </Link>
      </section>
    </motion.div>
  );
}

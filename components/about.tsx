"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
        <span className="font-medium">Ut enim</span>, ad minim veniam, quis
        nostrud exercitation ullamco laboris{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">
          nisi ut aliquip ex ea commodo consequat. Duis aute irure
        </span>
        dolor in reprehenderit in voluptate velit{" "}
        <span className="underline">love</span> the esse cillum dolore eu fugiat
        nulla pariatur. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>
    </motion.section>
  );
}

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
        My journey into web development began with a fascination for how
        websites work and a desire to build my own. This led me to learn HTML,
        CSS, and JavaScript, and I quickly found myself captivated by the
        endless possibilities of{" "}
        <span className="font-medium">web development. </span>I have{" "}
        <span className="italic">hands-on experience </span>
        with modern web technologies such as{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB{" "}
        </span>
        and I'm well-versed in TypeScript and Prisma. I am continuously learning
        and always eager to take on new challenges that push my abilities and
        help me grow as a developer.{" "}
        <span className="font-medium">Aside from coding, </span> I enjoy
        traveling and exploring new places, and I love watching soccer matches.
      </p>
    </motion.section>
  );
}

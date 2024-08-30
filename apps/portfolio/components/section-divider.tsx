"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-x-4">
      {[1, 2, 3].map((item, idx) => (
        <motion.div
          ref={ref}
          key={idx}
          className="bg-gray-200 my-56 h-12 w-12 hidden sm:block rounded-full dark:bg-opacity-20 shadow-md dark:shadow-sm dark:shadow-orange-300"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 1,
            stiffness: 175,
            delay: 0.125 * idx
          }}
        />
      ))}
    </div>
  );
}

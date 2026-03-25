"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PunchlineProps {
  line: string;
  sub?: string;
}

export default function Punchline({ line, sub }: PunchlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="py-16 md:py-24 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug">
          {line}
        </p>
        {sub && <p className="text-sm text-gray mt-3">{sub}</p>}
      </motion.div>
    </div>
  );
}

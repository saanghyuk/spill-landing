"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QUOTES = [
  {
    text: "I filmed my desk and talked about quitting my job. 40 seconds. Next morning, 12 people had resonated. I wasn't alone.",
    name: "Mia",
    detail: "after her first spill",
  },
  {
    text: "Someone I've never met said 'I feel that too' on my answer. That one notification changed my whole day.",
    name: "James",
    detail: "day 3",
  },
  {
    text: "I pointed the camera at my ceiling and talked about my dad. It felt like writing a diary, except someone was actually listening.",
    name: "Sarah",
    detail: "after her first spill",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-center text-sm text-lime font-semibold uppercase tracking-[0.2em] mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Your story reaches someone
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUOTES.map((q, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
            >
              <div className="glass rounded-2xl border border-gray-border p-6 h-full">
                {/* Quote mark */}
                <span className="text-3xl text-lime/20 font-serif leading-none">&ldquo;</span>
                <p className="text-base text-foreground leading-relaxed mt-1 mb-4">
                  {q.text}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-lime rounded-full" />
                  <span className="text-xs text-gray">
                    <span className="text-foreground font-medium">{q.name}</span> — {q.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

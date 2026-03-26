"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ARCHIVE_DAYS = [
  { date: "Mar 26, 2026", question: "What are you afraid to say out loud?", hasAnswer: true },
  { date: "Mar 25, 2026", question: "What episode of your life are you on?", hasAnswer: true },
  { date: "Mar 24, 2026", question: "When was the last time you cried?", hasAnswer: false },
  { date: "Mar 23, 2026", question: "What are you putting off?", hasAnswer: true },
  { date: "Mar 22, 2026", question: "What do you think about before sleep?", hasAnswer: true },
];

export default function TimeCapsule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            A year from now,
            <br />
            <span className="text-gradient">you&apos;ll hear today&apos;s you.</span>
          </h2>
          <p className="text-gray text-base sm:text-lg max-w-lg mx-auto">
            Every answer gets saved. One year later, Spill plays it back.
            You&apos;ll hear yourself and think &ldquo;oh wow, I said that?&rdquo;
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: "1 year ago today" card */}
          <motion.div
            className="flex-1 w-full max-w-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl border border-lime/20 p-6 relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime/[0.03] to-transparent animate-[wave_4s_ease-in-out_infinite]" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-lime">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-xs text-lime font-semibold tracking-widest uppercase">
                    1 year ago today
                  </span>
                </div>

                <p className="text-sm text-gray mb-2">March 26, 2025</p>
                <p className="text-base font-semibold mb-4">
                  &ldquo;What were you most afraid of back then?&rdquo;
                </p>

                {/* Fake video thumbnail */}
                <div className="aspect-video rounded-xl overflow-hidden relative bg-gray-dark mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?w=400&h=225&fit=crop')" }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-lime/20 backdrop-blur-sm border border-lime/30 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[10px] border-l-lime border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] text-white/60 bg-black/40 px-2 py-0.5 rounded">
                    1:47
                  </div>
                </div>

                <p className="text-xs text-gray italic text-center">
                  &ldquo;Tap to hear what you sounded like a year ago.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Archive timeline */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-2">
              {ARCHIVE_DAYS.map((day, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                    i === 0
                      ? "bg-lime/[0.06] border border-lime/20"
                      : day.hasAnswer
                        ? "bg-gray-dark/50 border border-transparent hover:border-gray-border"
                        : "opacity-40"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: day.hasAnswer ? 1 : 0.4, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  {/* Date */}
                  <div className="w-20 flex-shrink-0">
                    <span className={`text-xs font-medium ${i === 0 ? "text-lime" : "text-gray"}`}>
                      {day.date.split(", ")[0]}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    day.hasAnswer ? (i === 0 ? "bg-lime" : "bg-foreground/30") : "bg-gray-border"
                  }`} />

                  {/* Question */}
                  <p className={`text-sm flex-1 ${
                    i === 0 ? "text-foreground font-medium" : day.hasAnswer ? "text-gray" : "text-gray/50 line-through"
                  }`}>
                    {day.question}
                  </p>

                  {/* Status */}
                  {day.hasAnswer ? (
                    <div className="flex items-end gap-[1px] h-3 flex-shrink-0">
                      {[2,4,3,5,3].map((h, j) => (
                        <div key={j} className={`w-[2px] rounded-full ${i === 0 ? "bg-lime/60" : "bg-foreground/20"}`} style={{ height: `${h}px` }} />
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] text-gray/50">skipped</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-xs text-gray mt-4 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              No pressure to answer every day. But when you do, it&apos;s there forever.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

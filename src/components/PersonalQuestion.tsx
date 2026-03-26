"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const SCENARIOS = [
  {
    yesterday: "I've been binge-watching cooking videos but I can't cook at all.",
    today: "So what's stopping you from actually trying?",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Marcus",
  },
  {
    yesterday: "I keep saying I'll start working out tomorrow.",
    today: "What's the real reason you keep pushing it?",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Yuna",
  },
  {
    yesterday: "I think I text my friends way more than they text me.",
    today: "Does that bother you, or have you gotten used to it?",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    name: "Sarah",
  },
];

export default function PersonalQuestion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SCENARIOS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            It also asks questions
            <br />
            <span className="text-gradient">only you get.</span>
          </h2>
          <p className="text-gray text-base sm:text-lg max-w-lg mx-auto">
            AI listens to your story and asks the follow-up
            that a good friend would ask. Every day, a question
            that picks up right where you left off.
          </p>
        </motion.div>

        {/* Scenario display */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* User's yesterday */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SCENARIOS[active].avatar}
                    alt={SCENARIOS[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray mb-1">
                    <span className="text-foreground font-medium">{SCENARIOS[active].name}</span>
                    {" "}said yesterday
                  </div>
                  <div className="bg-gray-dark rounded-2xl rounded-tl-sm px-5 py-3 border border-gray-border">
                    <p className="text-base text-foreground/80 italic">
                      &ldquo;{SCENARIOS[active].yesterday}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-lime">
                      <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* AI's follow-up */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-lime">AI</span>
                </div>
                <div>
                  <div className="text-xs text-lime font-medium mb-1">
                    Spill asks today
                  </div>
                  <div className="bg-lime/[0.08] rounded-2xl rounded-tl-sm px-5 py-4 border border-lime/20">
                    <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                      &ldquo;{SCENARIOS[active].today}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {SCENARIOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-lime" : "w-1.5 bg-gray-border hover:bg-gray"
                }`}
              />
            ))}
          </div>

          <p className="text-center text-sm text-gray mt-6">
            No one else gets your question. It&apos;s yours alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

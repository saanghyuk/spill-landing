"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function EmotionalHook() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 relative flex items-center justify-center min-h-[90vh]"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-lime/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-sm text-lime font-semibold uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          One last question
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          When was the
          <br />
          last time you said
          <br />
          something <span className="text-gradient">real</span>?
        </motion.h2>

        <motion.p
          className="text-gray text-lg sm:text-xl mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A diary you speak into. A world that listens.
          <br />
          We ask. You answer. That&apos;s how you find the real you — and the real everyone else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            {submitted ? (
              <motion.div
                className="flex items-center gap-2 bg-lime/10 border border-lime/30 rounded-full px-6 py-4 mx-auto"
                initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-lime">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lime font-medium text-sm">You&apos;re on the list.</span>
              </motion.div>
            ) : (
              <>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" required
                  className="flex-1 bg-gray-dark/80 border border-gray-border rounded-full px-5 py-4 text-sm text-foreground placeholder:text-gray focus:outline-none focus:border-lime/50 transition-colors"
                />
                <button type="submit" className="bg-lime text-background font-bold text-sm px-8 py-4 rounded-full hover:brightness-110 transition-all whitespace-nowrap">
                  I&apos;m ready to spill
                </button>
              </>
            )}
          </form>
          <p className="text-xs text-gray">
            First <span className="text-lime font-semibold">1,000</span> get in. Limited access.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

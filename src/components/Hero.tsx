"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const QUESTIONS = [
  "What do you keep thinking about at 2am?",
  "What's your hottest take that nobody asked for?",
  "Who do you miss but won't text first?",
  "What's the most useless thing you're good at?",
  "What would you do if no one was watching?",
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [showQ, setShowQ] = useState(false);
  const [count] = useState(2847);

  useEffect(() => {
    const t = setTimeout(() => setShowQ(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowQ(false);
      setTimeout(() => {
        setQIndex((p) => (p + 1) % QUESTIONS.length);
        setShowQ(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Sp<span className="text-gradient">i</span>ll
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-lime/80 font-medium tracking-wide mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real you. Real me.
        </motion.p>

        {/* Core message - not generic, provocative */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray max-w-2xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A back camera SNS.
          <br />
          <span className="text-foreground font-semibold">A question drops. You film what you see, and talk. 60 seconds.</span>
        </motion.p>

        {/* Question card — the experience */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="glass rounded-3xl border border-gray-border p-6 sm:p-8 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-lime font-semibold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              Today&apos;s question
            </div>

            <div className="min-h-[80px] sm:min-h-[70px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {showQ && (
                  <motion.p
                    key={qIndex}
                    className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                    transition={{ duration: 0.4 }}
                  >
                    &ldquo;{QUESTIONS[qIndex]}&rdquo;
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <p className="text-sm text-lime/70 mt-4 font-medium">Gone in 12 hours. Answer or miss it.</p>

            <div className="flex items-center justify-center gap-3 mt-4 text-xs text-gray">
              <div className="flex -space-x-1.5">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
                ].map((a, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-background overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span>
                <span className="text-foreground font-semibold">{count.toLocaleString()}</span> answered today ·
                <span className="text-lime"> 47 recording right now</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA with urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
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
                <span className="text-lime font-medium text-sm">You&apos;re in. We&apos;ll reach out soon.</span>
              </motion.div>
            ) : (
              <>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" required
                  className="flex-1 bg-gray-dark/80 border border-gray-border rounded-full px-5 py-4 text-sm text-foreground placeholder:text-gray focus:outline-none focus:border-lime/50 transition-colors"
                />
                <button type="submit" className="bg-lime text-background font-bold text-sm px-8 py-4 rounded-full hover:brightness-110 transition-all animate-pulse-lime whitespace-nowrap">
                  Get Early Access
                </button>
              </>
            )}
          </form>
          <p className="text-xs text-gray">
            First <span className="text-lime font-semibold">1,000</span> get in. <span className="text-foreground">847 spots left.</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2 text-gray">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

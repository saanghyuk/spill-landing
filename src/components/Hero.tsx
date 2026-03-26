"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const QUESTIONS = [
  { text: "What's the most useless thing you're weirdly good at?", count: 2847 },
  { text: "What do you keep thinking about before you fall asleep?", count: 4102 },
  { text: "What's your worst habit that you're not planning to fix?", count: 1923 },
  { text: "Who would you call if your phone was about to die?", count: 3516 },
  { text: "What's something you changed your mind about recently?", count: 1284 },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [showQ, setShowQ] = useState(false);
  const [phoneTab, setPhoneTab] = useState(0);
  const [tabAutoPlay, setTabAutoPlay] = useState(true);

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

  // Auto-cycle tabs: Feed → Today → Archive → Feed, then stop
  useEffect(() => {
    if (!tabAutoPlay) return;
    const sequence = [0, 1, 2, 0]; // Feed → Today → Archive → Feed
    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step >= sequence.length) {
        setTabAutoPlay(false);
        clearInterval(timer);
        return;
      }
      setPhoneTab(sequence[step]);
    }, 3000);
    return () => clearInterval(timer);
  }, [tabAutoPlay]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Hook */}
        <motion.p
          className="text-base sm:text-lg text-gray mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          You&apos;ve seen a thousand posts today. <span className="text-foreground font-semibold">How many felt real?</span>
        </motion.p>

        {/* Logo + Slogan */}
        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Sp<span className="text-lime">i</span>ll
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-lime font-semibold tracking-wide mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Real you. Real me.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-gray mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="font-medium text-foreground/80">Back camera</span> · your voice · <span className="font-medium text-foreground/80">60 seconds</span> · every day
        </motion.p>

        {/* Main visual: Question card + Phone mockup side by side */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* Left: Question card */}
          <div className="glass rounded-2xl border border-gray-border p-6 sm:p-8 w-full max-w-md text-left">
            <div className="flex items-center gap-2 text-xs text-lime font-semibold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              Today&apos;s question
            </div>

            <div className="min-h-[70px] sm:min-h-[60px] flex items-start">
              <AnimatePresence mode="wait">
                {showQ && (
                  <motion.p
                    key={qIndex}
                    className="text-xl sm:text-2xl font-bold leading-snug"
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                    transition={{ duration: 0.4 }}
                  >
                    &ldquo;{QUESTIONS[qIndex].text}&rdquo;
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-lime font-medium">Gone in 12 hours.</p>
              <div className="flex items-center gap-2 text-sm text-gray">
                <div className="flex -space-x-1.5">
                  {["🌙", "☕", "🎧"].map((emoji, i) => (
                    <div key={i} className="w-5 h-5 rounded-full border-2 border-background bg-gray-dark flex items-center justify-center text-[8px]">
                      {emoji}
                    </div>
                  ))}
                </div>
                <span className="text-foreground font-semibold">{QUESTIONS[qIndex].count.toLocaleString()}</span> answered
              </div>
            </div>
          </div>

          {/* Right: Phone mockup — Feed UI */}
          <div className="w-[280px] sm:w-[320px] flex-shrink-0">
            <div className="relative rounded-[2rem] border-2 border-gray-border bg-gray-dark overflow-hidden shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-gray-dark rounded-b-xl z-20" />

              {/* Screen — Interactive tabs */}
              <div className="aspect-[9/16] relative overflow-hidden rounded-[1.8rem] bg-background pt-10 px-3.5">

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-foreground">Sp<span className="text-lime">i</span>ll</span>
                  <div className="w-5 h-5 rounded-full bg-gray-dark border border-gray-border" />
                </div>

                {/* Tab bar */}
                <div className="flex gap-1 mb-3">
                  {["Feed", "Today", "Archive"].map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => { setPhoneTab(i); setTabAutoPlay(false); }}
                      className={`text-[9px] font-semibold px-2.5 py-1 rounded-full transition-all ${
                        phoneTab === i
                          ? "bg-lime text-background"
                          : "text-gray hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                  {phoneTab === 0 && (
                    <motion.div key="feed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                      {/* 🔥 Hot today */}
                      <div className="mb-3">
                        <span className="text-[9px] text-lime font-bold">🔥 Hot today</span>
                        <div className="flex gap-2 mt-1.5">
                          {[
                            { emoji: "☕", name: "@coffee" },
                            { emoji: "🌙", name: "@night_" },
                            { emoji: "🎧", name: "@quiet" },
                          ].map((r, i) => (
                            <div key={i} className="bg-gray-dark rounded-lg p-2 border border-gray-border flex-1">
                              <div className="flex items-center gap-1 mb-1">
                                <span className="text-[11px]">{r.emoji}</span>
                                <span className="text-[8px] text-gray truncate">{r.name}</span>
                              </div>
                              <div className="flex items-end gap-[1px] h-2.5">
                                {[2,5,3,6,4,5,3].map((h, j) => (
                                  <div key={j} className="flex-1 bg-lime/40 rounded-full" style={{ height: `${h}px` }} />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 👥 Thinks like you */}
                      <span className="text-[9px] text-gray font-medium">👥 Thinks like you</span>
                      <div className="bg-gray-dark rounded-xl overflow-hidden border border-gray-border mt-1.5 mb-2.5">
                        <div className="h-[55px] relative overflow-hidden">
                          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=300&h=150&fit=crop')" }} />
                          <div className="absolute inset-0 bg-black/30" />
                          <div className="absolute bottom-1.5 left-2.5 flex items-end gap-[1px] h-3">
                            {[2,4,3,5,4,5,3,4].map((h, j) => (
                              <motion.div key={j} className="w-[2px] bg-lime/60 rounded-full" style={{ height: `${h}px` }}
                                animate={{ height: [`${h}px`, `${h+3}px`, `${h}px`] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: j * 0.1 }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="p-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px]">🦉</span>
                              <span className="text-[9px] font-semibold">@night_owl</span>
                              <span className="text-[8px] text-gray">· 5m</span>
                            </div>
                            <span className="text-[7px] bg-lime/10 text-lime px-2 py-0.5 rounded-full">same 😂</span>
                          </div>
                        </div>
                      </div>

                      {/* 🔀 Different perspective */}
                      <span className="text-[9px] text-gray font-medium">🔀 Different take</span>
                      <div className="bg-gray-dark rounded-xl overflow-hidden border border-gray-border mt-1.5 mb-2.5">
                        <div className="h-[45px] relative overflow-hidden bg-[#080604]">
                          <div className="absolute bottom-1.5 left-2.5 flex items-end gap-[1px] h-2.5">
                            {[3,2,5,3,4,3,5,2].map((h, j) => (
                              <motion.div key={j} className="w-[2px] bg-lime/60 rounded-full" style={{ height: `${h}px` }}
                                animate={{ height: [`${h}px`, `${h+2}px`, `${h}px`] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: j * 0.12 }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="p-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px]">🌿</span>
                              <span className="text-[9px] font-semibold">@just.vibing</span>
                            </div>
                            <span className="text-[7px] bg-lime/10 text-lime px-2 py-0.5 rounded-full">took courage</span>
                          </div>
                        </div>
                      </div>

                      {/* 💬 Following */}
                      <span className="text-[9px] text-gray font-medium">💬 Following</span>
                      <div className="bg-gray-dark rounded-xl overflow-hidden border border-gray-border mt-1.5">
                        <div className="h-[45px] relative overflow-hidden">
                          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=100&fit=crop')" }} />
                          <div className="absolute inset-0 bg-black/30" />
                        </div>
                        <div className="p-2.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px]">🌧</span>
                            <span className="text-[9px] font-semibold">@hana.k</span>
                            <span className="text-[8px] text-gray">· 22m</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {phoneTab === 1 && (
                    <motion.div key="today" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                      {/* Common question — already done */}
                      <div className="bg-gray-dark rounded-xl p-3 mb-3 border border-gray-border opacity-50">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="w-2 h-2 bg-gray rounded-full" />
                          <span className="text-[9px] text-gray font-bold uppercase tracking-wider">9AM — Everyone</span>
                          <span className="text-[8px] bg-foreground/10 text-gray px-2 py-0.5 rounded-full ml-auto">✓ Spilled</span>
                        </div>
                        <p className="text-[11px] font-medium text-gray leading-snug line-through">
                          &ldquo;What&apos;s your hottest take nobody asked for?&rdquo;
                        </p>
                      </div>

                      {/* Personal question — active now */}
                      <div className="bg-gray-dark rounded-xl p-3 mb-3 border border-lime/30">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <div className="w-4 h-4 rounded-full bg-lime flex items-center justify-center">
                            <span className="text-[6px] text-background font-bold">AI</span>
                          </div>
                          <span className="text-[9px] text-lime font-bold uppercase tracking-wider">9PM — Only you</span>
                          <span className="text-[8px] text-lime/60 ml-auto">5h left</span>
                        </div>
                        <p className="text-[9px] text-gray italic mb-1.5">You said: &ldquo;I binge cooking videos but can&apos;t cook&rdquo;</p>
                        <p className="text-[11px] font-bold text-foreground leading-snug mb-2">
                          &ldquo;So what&apos;s stopping you from trying?&rdquo;
                        </p>
                        <span className="bg-lime text-background text-[9px] font-bold px-3 py-1 rounded-full">Spill</span>
                      </div>

                      {/* Mutual resonance notification */}
                      <div className="bg-lime/[0.08] rounded-xl p-3 border border-lime/15">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-[11px]">✨</span>
                          <span className="text-[9px] text-lime font-bold">Mutual resonance!</span>
                        </div>
                        <p className="text-[9px] text-gray">You and <span className="text-foreground font-semibold">@night_owl</span> resonated with each other</p>
                        <span className="text-[8px] text-lime/70 mt-1.5 block">🔓 Whisper unlocked</span>
                      </div>
                    </motion.div>
                  )}

                  {phoneTab === 2 && (
                    <motion.div key="archive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                      {/* 1 year ago */}
                      <div className="bg-lime/[0.08] rounded-xl p-3 mb-3 border border-lime/20">
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className="text-[11px]">⏰</span>
                          <span className="text-[9px] text-lime font-bold">1 YEAR AGO TODAY</span>
                        </div>
                        <p className="text-[10px] text-foreground font-semibold mb-1">&ldquo;What were you overthinking?&rdquo;</p>
                        <span className="text-[9px] text-gray">Tap to hear yourself →</span>
                      </div>

                      {/* Archive list */}
                      <div className="space-y-2">
                        {[
                          { date: "Mar 26", q: "Worst habit?", has: true },
                          { date: "Mar 25", q: "Overthinking?", has: true },
                          { date: "Mar 24", q: "Comfort food?", has: false },
                          { date: "Mar 23", q: "Who would you call?", has: true },
                          { date: "Mar 22", q: "Changed your mind?", has: true },
                          { date: "Mar 21", q: "Last time you laughed?", has: true },
                          { date: "Mar 20", q: "Hottest take?", has: true },
                        ].map((d, i) => (
                          <div key={i} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${
                            i === 0 ? "bg-lime/[0.06] border border-lime/20" : d.has ? "bg-gray-dark" : "opacity-40"
                          }`}>
                            <span className={`text-[9px] w-12 ${i === 0 ? "text-lime font-semibold" : "text-gray"}`}>{d.date}</span>
                            <div className={`w-2 h-2 rounded-full ${d.has ? (i === 0 ? "bg-lime" : "bg-foreground/30") : "bg-gray-border"}`} />
                            <span className={`text-[9px] flex-1 ${i === 0 ? "text-foreground font-medium" : d.has ? "text-gray" : "text-gray/50 line-through"}`}>{d.q}</span>
                            {d.has && (
                              <div className="flex items-end gap-[1px] h-2">
                                {[2,4,3,5,3].map((h, j) => (
                                  <div key={j} className={`w-[1.5px] rounded-full ${i === 0 ? "bg-lime/60" : "bg-foreground/20"}`} style={{ height: `${h}px` }} />
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      <p className="text-[9px] text-gray mt-3 text-center">Your voice, saved forever.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Home indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gray rounded-full z-20" />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
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
                  className="flex-1 bg-gray-dark/80 border border-gray-border rounded-full px-5 py-3.5 text-sm text-foreground placeholder:text-gray focus:outline-none focus:border-lime/50 transition-colors"
                />
                <button type="submit" className="bg-lime text-background font-bold text-sm px-8 py-3.5 rounded-full hover:brightness-110 transition-all animate-pulse-lime whitespace-nowrap">
                  Get Early Access
                </button>
              </>
            )}
          </form>
          <p className="text-sm text-gray">
            First <span className="text-lime font-bold">1,000</span> get early access. <span className="text-foreground font-semibold">After that, invitation only.</span>
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

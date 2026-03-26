"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SPILLS = [
  {
    // Casual selfie - guy in hoodie, not a model headshot
    image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?w=400&h=600&fit=crop&crop=face",
    label: "just got home, had to say this",
    question: "What are you putting off?",
    name: "Marcus, 28",
    resonates: 247,
  },
  {
    // POV: looking at laptop keyboard/screen - what you see at a desk
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=400&h=600&fit=crop",
    label: "at my desk, 11pm",
    question: "When did you last feel free?",
    name: "James, 31",
    resonates: 183,
  },
  {
    // Dark room - CSS gradient, nearly black
    image: "",
    dark: true,
    label: "lights off, just talking",
    question: "What do you think about at 2am?",
    name: "Sarah, 24",
    resonates: 312,
  },
  {
    // POV: messy bed/blanket - just woke up or lying down, phone in hand
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop",
    label: "lying in bed, just talking",
    question: "What episode of life are you on?",
    name: "Alex, 27",
    resonates: 156,
  },
  {
    // Girl casual selfie - warm, natural, not model-like
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    label: "couldn't sleep",
    question: "What changed your mind recently?",
    name: "Hana, 23",
    resonates: 201,
  },
  {
    // Ceiling - CSS, plain dim surface
    image: "",
    ceiling: true,
    label: "staring at the ceiling",
    question: "What are you afraid to say?",
    name: "Mia, 26",
    resonates: 289,
  },
];

export default function Voices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            A back camera
            <br />
            <span className="text-gradient">SNS.</span>
          </h2>
          <p className="text-gray text-base sm:text-lg max-w-xl mx-auto">
            Front camera shows your face. Back camera shows your world.
            <br />
            Spill uses the back. Just film what you see, and talk.
            60 seconds. No filters. No editing.
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {SPILLS.map((s, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className={`relative ${i === 0 || i === 5 ? "aspect-[9/14]" : "aspect-[9/12]"}`}>
                {/* Background */}
                {"dark" in s && s.dark ? (
                  // Nearly black with a tiny warm glow - dark room filming
                  <div className="absolute inset-0 bg-[#080808]">
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-amber-900/10 rounded-full blur-[60px]" />
                  </div>
                ) : "ceiling" in s && s.ceiling ? (
                  // Plain ceiling - off-white with a subtle light fixture shadow
                  <div className="absolute inset-0 bg-[#1a1915]">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-24 h-24 bg-amber-100/5 rounded-full blur-[40px]" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-100/10 rounded-full" />
                  </div>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${s.image}')` }}
                    />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-70">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                  <span className="text-[10px] text-white font-medium">1:23</span>
                </div>

                {/* Audio waveform */}
                <div className="absolute top-3 left-3 flex items-end gap-[2px] h-3">
                  {[3, 6, 4, 8, 5, 7, 3, 6, 4].map((h, j) => (
                    <motion.div
                      key={j}
                      className="w-[2px] bg-lime/60 rounded-full"
                      style={{ height: `${h}px` }}
                      animate={{ height: [`${h}px`, `${h + 3}px`, `${h}px`] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: j * 0.1 }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-[11px] text-white/50 italic mb-1.5">{s.label}</p>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug mb-2">
                    &ldquo;{s.question}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/60">{s.name}</span>
                    <div className="flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-lime">
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                      </svg>
                      <span className="text-[10px] text-lime">{s.resonates}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-gray mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          Your world. Your voice. That&apos;s all we need.
        </motion.p>
      </div>
    </section>
  );
}

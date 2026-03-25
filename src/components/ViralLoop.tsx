"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ViralLoop() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);

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
            Watching someone spill
            <br />
            <span className="text-gradient">makes you want to spill.</span>
          </h2>
          <p className="text-gray text-base sm:text-lg max-w-lg mx-auto">
            You hear someone answer honestly, and something clicks —
            you want to answer too.
          </p>
        </motion.div>

        {/* Interactive flow */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="space-y-4">
            {/* Step 1: See someone's answer */}
            <motion.div
              className={`glass rounded-2xl p-5 border transition-all duration-500 cursor-pointer ${
                step >= 0 ? "border-gray-border opacity-100" : "border-transparent opacity-40"
              }`}
              onClick={() => setStep(0)}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Marcus" className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold">Marcus</span>
                    <span className="text-xs text-gray">answered</span>
                  </div>
                  <p className="text-sm text-foreground/80 italic">
                    &ldquo;I almost told my best friend I&apos;m jealous of his life...&rdquo;
                  </p>
                </div>
                <div className="flex items-end gap-[2px] h-4 flex-shrink-0">
                  {[3,5,4,7,5,6,3,5].map((h, j) => (
                    <motion.div
                      key={j} className="w-[2px] bg-lime/50 rounded-full"
                      style={{ height: `${h}px` }}
                      animate={step === 0 ? { height: [`${h}px`, `${h+3}px`, `${h}px`] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity, delay: j * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Arrow + feeling */}
            <motion.div
              className="flex items-center justify-center gap-3 py-1"
              initial={{ opacity: 0 }}
              animate={isInView && step >= 0 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-border" />
              <span className="text-xs text-gray italic">you think: &ldquo;damn, me too...&rdquo;</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-border" />
            </motion.div>

            {/* Step 2: Hit "me too" */}
            <motion.div
              className={`rounded-2xl p-5 border transition-all duration-500 cursor-pointer ${
                step >= 1 ? "bg-lime/[0.06] border-lime/30" : "glass border-gray-border"
              }`}
              onClick={() => setStep(1)}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold">You tap:</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-bold transition-all ${
                    step >= 1
                      ? "bg-lime text-background border-lime"
                      : "bg-lime/10 text-lime border-lime/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => { e.stopPropagation(); setStep(1); }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={step >= 1 ? "text-background" : "text-lime"}>
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  </svg>
                  I feel that too
                </motion.button>
                <motion.button
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-bold transition-all ${
                    step >= 2
                      ? "bg-lime text-background border-lime"
                      : "bg-gray-dark text-foreground border-gray-border hover:border-lime/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => { e.stopPropagation(); setStep(2); }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={step >= 2 ? "text-background" : "text-foreground"}>
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  Answer this too
                </motion.button>
              </div>
            </motion.div>

            {/* Step 3: Now you're recording */}
            {step >= 2 && (
              <motion.div
                className="rounded-2xl overflow-hidden border border-lime/30"
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-lime/[0.06] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-foreground">Now you&apos;re spilling</span>
                    </div>
                    <span className="text-xs text-gray">0:12 / 3:00</span>
                  </div>
                  <div className="glass rounded-xl px-4 py-3 border border-gray-border">
                    <p className="text-xs text-lime font-medium mb-1">Answering the same question</p>
                    <p className="text-sm font-semibold">
                      &ldquo;What&apos;s something you almost said today but held back?&rdquo;
                    </p>
                  </div>
                  <p className="text-xs text-gray mt-3 text-center italic">
                    One answer leads to another. That&apos;s how Spill grows.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Click hint */}
          {step < 2 && (
            <motion.p
              className="text-center text-xs text-gray mt-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↑ Tap the buttons to see the flow
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

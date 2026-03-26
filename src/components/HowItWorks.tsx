"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
            How Spill works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {/* Step 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex-1">
              <div className="text-6xl font-black text-lime/10 mb-2">01</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                A question drops.
                <br />
                <span className="text-gray">Same one for everyone.</span>
              </h3>
              <p className="text-gray leading-relaxed">
                Every morning at 9AM, everyone gets the same question.
                Sometimes funny, sometimes deep. Answer it, and see what everyone else said.
                The question disappears in 12 hours — but your answer stays.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="glass rounded-2xl p-6 border border-gray-border w-full max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-lime font-semibold tracking-widest uppercase">9:00 AM — Today&apos;s question</span>
                </div>
                <p className="text-lg sm:text-xl font-bold leading-snug">
                  &ldquo;What&apos;s the most useless thing you&apos;re weirdly good at?&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray">Gone in 11h 23m</span>
                  <span className="text-sm text-lime font-semibold bg-lime/10 px-3 py-1.5 rounded-full">Spill →</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 — Personal question */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex-1">
              <div className="text-6xl font-black text-lime/10 mb-2">02</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                At night, one more.
                <br />
                <span className="text-gray">Only you get this one.</span>
              </h3>
              <p className="text-gray leading-relaxed">
                At 9PM, you get a question only you get.
                AI picks up on what you&apos;ve been saying and asks the next thing —
                like a friend who actually remembers. The more you answer, the more you learn about yourself.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-sm space-y-3">
                {/* Yesterday's answer */}
                <div className="glass rounded-xl px-4 py-3 border border-gray-border">
                  <span className="text-xs sm:text-sm text-gray">You said yesterday</span>
                  <p className="text-sm text-foreground/70 italic mt-1">
                    &ldquo;I keep saying I&apos;ll start working out tomorrow.&rdquo;
                  </p>
                </div>
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                      <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                {/* AI's personal question */}
                <div className="glass rounded-xl px-4 py-4 border border-lime/20 bg-lime/[0.04]">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-4 h-4 rounded-full bg-lime flex items-center justify-center">
                      <span className="text-[7px] text-background font-bold">AI</span>
                    </div>
                    <span className="text-xs text-lime font-semibold uppercase tracking-wider">9:00 PM — Your personal question</span>
                  </div>
                  <p className="text-base font-bold leading-snug">
                    &ldquo;What&apos;s the real reason you keep pushing it?&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex-1">
              <div className="text-6xl font-black text-lime/10 mb-2">03</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Flip the camera.
                <br />
                <span className="text-gray">Talk for 60 seconds.</span>
              </h3>
              <p className="text-gray leading-relaxed">
                Back camera — film your desk, your walk, your ceiling, whatever.
                Just talk. No prep. No filter. No editing. It&apos;s done before you overthink it.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
                {[
                  { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=300&fit=crop", label: "" },
                  { img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&h=300&fit=crop", label: "" },
                  { img: "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?w=200&h=300&fit=crop", label: "" },
                ].map((t, i) => (
                  <div key={i} className="relative aspect-[9/14] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${t.img}')` }} />
                    <div className="absolute inset-0 bg-black/30" />
                    {/* Recording dot */}
                    <div className="absolute top-2 left-2 flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs text-white font-medium">REC</span>
                    </div>
                    {/* Waveform */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-end gap-[1px] h-2">
                      {[2,4,3,5,3,4,2,5,3,4,2,3].map((h, j) => (
                        <div key={j} className="flex-1 bg-lime/50 rounded-full" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    {t.label && (
                      <div className="absolute bottom-6 left-2">
                        <span className="text-xs text-white/80">{t.label}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="flex-1">
              <div className="text-6xl font-black text-lime/10 mb-2">04</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                People resonate.
                <br />
                <span className="text-gray">Not &ldquo;like.&rdquo; Resonate.</span>
              </h3>
              <p className="text-gray leading-relaxed">
                No comments. No likes. Just reactions like &ldquo;same 😂&rdquo; or &ldquo;that took courage.&rdquo;
                The more you answer, the more people you meet — ones who think like you,
                and ones who see things totally differently.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-sm space-y-3">
                {[
                  { name: "@night_owl_92", emoji: "🦉", msg: "I feel that too", mutual: false },
                  { name: "@quiet_storm", emoji: "🌧", msg: "That took courage", mutual: true },
                  { name: "@just.me.here", emoji: "🌙", msg: "same 😂", mutual: false },
                ].map((r, i) => (
                  <motion.div
                    key={i}
                    className={`glass rounded-xl px-4 py-3 border flex items-center gap-3 ${
                      r.mutual ? "border-lime/30 bg-lime/[0.05]" : "border-gray-border"
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.15 }}
                  >
                    <div className="w-9 h-9 rounded-full bg-gray-dark flex items-center justify-center text-lg flex-shrink-0">
                      {r.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold">{r.name}</span>
                        {r.mutual && (
                          <span className="text-xs text-lime font-bold bg-lime/10 px-1.5 py-0.5 rounded-full">Mutual</span>
                        )}
                      </div>
                      <span className="text-sm text-gray">resonated</span>
                    </div>
                    <span className="text-sm text-lime font-medium bg-lime/10 px-2.5 py-1 rounded-full flex-shrink-0">
                      {r.msg}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

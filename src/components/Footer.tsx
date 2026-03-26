"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer ref={ref} className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      {/* Main footer CTA */}
      <div className="py-20 px-6">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl font-black mb-3">
            Be the first to <span className="text-gradient">spill.</span>
          </h3>
          <p className="text-gray text-base mb-8">
            Join the waitlist. Get early access before everyone else.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            {submitted ? (
              <motion.div
                className="flex items-center gap-2 bg-lime/10 border border-lime/30 rounded-full px-6 py-4 mx-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-lime">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lime font-medium text-sm">You&apos;re on the list.</span>
              </motion.div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-gray-dark/80 border border-gray-border rounded-full px-5 py-3.5 text-sm text-foreground placeholder:text-gray focus:outline-none focus:border-lime/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-lime text-background font-bold text-sm px-7 py-3.5 rounded-full hover:brightness-110 transition-all whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-border/50 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black">
              Sp<span className="text-lime">i</span>ll
            </span>
            <span className="text-xs sm:text-sm text-gray">Real you. Real me.</span>
          </div>
          <p className="text-xs sm:text-sm text-gray">© 2026 Spill. Coming soon.</p>
        </div>
      </div>
    </footer>
  );
}

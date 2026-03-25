"use client";

import Hero from "@/components/Hero";
import Voices from "@/components/Voices";
import Punchline from "@/components/Punchline";
import HowItWorks from "@/components/HowItWorks";
import ViralLoop from "@/components/ViralLoop";
import Testimonials from "@/components/Testimonials";
import TimeCapsule from "@/components/TimeCapsule";
import EmotionalHook from "@/components/EmotionalHook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen noise-bg">
      {/* HOOK: Stop scrolling. Here's a question. You know the answer. */}
      <Hero />

      {/* SHOW: This is what it looks like — raw, real, unfiltered */}
      <Voices />

      {/* PUNCH: Emotional interstitial */}
      <Punchline
        line="Every question disappears in 12 hours. Every answer stays forever."
        sub="The more you share, the more real people you find."
      />

      {/* EXPLAIN: 4 steps — question, personal question, record, resonate */}
      <HowItWorks />

      {/* VIRAL: Watching someone spill makes you want to spill */}
      <ViralLoop />

      {/* PROOF: What people felt after their first answer */}
      <Testimonials />

      {/* PUNCH: Emotional interstitial */}
      <Punchline
        line="The more you answer, the more people you meet — people who think like you, and people who see the world completely differently."
      />

      {/* TIME: Your answers become a time capsule */}
      <TimeCapsule />

      {/* CLOSE: One last question + final CTA */}
      <EmotionalHook />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

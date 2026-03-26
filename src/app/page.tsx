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
      {/* HOOK: Back camera app. We ask, you answer. */}
      <Hero />

      {/* SHOW: What Spill looks like — back camera, your world, your voice */}
      <Voices />

      {/* PUNCH: The diary that listens back */}
      <Punchline
        line="Record today's you. Tomorrow it's already a memory. And somewhere out there, someone's thinking the same thing."
      />

      {/* EXPLAIN: 4 steps */}
      <HowItWorks />

      {/* VIRAL: Watching someone spill makes you want to spill */}
      <ViralLoop />

      {/* PROOF: What people felt after their first answer */}
      <Testimonials />

      {/* PUNCH: Connection + discovery */}
      <Punchline
        line="Every question gone in 12 hours. But your answers? Saved forever."
        sub="The more you answer, the more interesting people you find."
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

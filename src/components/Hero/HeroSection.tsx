"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";
import SocialBar from "@/components/Global/SocialBar";
import { personal } from "@/data/personal";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <HeroCanvas text={personal.tagline} containerRef={containerRef} />

      {/* Technical subtitle — fades in at bottom-left */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-20 left-12 right-12 text-sm text-[var(--muted)] font-mono max-w-lg"
      >
        {personal.technicalTagline}
      </motion.p>

      {/* Social links + scroll hint at bottom */}
      <div className="absolute bottom-6 left-12 right-12 flex justify-between items-end">
        <SocialBar />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-xs text-[var(--muted)] font-mono"
        >
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-block"
          >
            scroll
          </motion.span>
        </motion.span>
      </div>
    </section>
  );
}

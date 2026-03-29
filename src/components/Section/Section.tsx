"use client";

import { motion } from "framer-motion";
import { sectionReveal, itemStagger } from "@/assets/animations";
import TextReveal from "@/components/Global/TextReveal";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <TextReveal
          text={title}
          className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-mono"
          as="h2"
        />
        <motion.div
          className="flex-1 h-px bg-[var(--muted)] opacity-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <motion.ul
        variants={itemStagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        className="space-y-5"
      >
        {children}
      </motion.ul>
    </motion.section>
  );
}

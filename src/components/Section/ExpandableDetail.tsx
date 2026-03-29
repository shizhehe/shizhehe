"use client";

import { motion } from "framer-motion";
import { expandVariants } from "@/assets/animations";

interface ExpandableDetailProps {
  children: React.ReactNode;
}

export default function ExpandableDetail({ children }: ExpandableDetailProps) {
  return (
    <motion.div
      variants={expandVariants}
      initial="collapsed"
      animate="expanded"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="mt-2 pl-3 border-l-2 border-[var(--accent)] text-[0.8125rem] text-[var(--muted)]">
        {children}
      </div>
    </motion.div>
  );
}

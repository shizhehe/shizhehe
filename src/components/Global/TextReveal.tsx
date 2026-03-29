"use client";

import { motion } from "framer-motion";
import { textRevealVariants } from "@/assets/animations";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3";
  once?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  as: Tag = "p",
  once = true,
}: TextRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          custom={i}
          variants={textRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          aria-hidden="true"
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
}

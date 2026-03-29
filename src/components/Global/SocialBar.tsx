"use client";

import { motion } from "framer-motion";
import { links } from "@/assets/links";

export default function SocialBar({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono ${className}`}
    >
      {links.map((social, index) => (
        <span key={social.name} className="flex items-center gap-x-4">
          <a
            href={social.url}
            target={social.url.startsWith("/") ? undefined : "_blank"}
            rel={social.url.startsWith("/") ? undefined : "noopener noreferrer"}
            className="link text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            {social.name}
          </a>
          {index < links.length - 1 && (
            <span className="text-[var(--muted)] opacity-30">/</span>
          )}
        </span>
      ))}
    </motion.div>
  );
}

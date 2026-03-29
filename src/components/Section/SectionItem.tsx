"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itemStagger } from "@/assets/animations";
import ExpandableDetail from "./ExpandableDetail";

interface SectionItemProps {
  number: string;
  summary: React.ReactNode;
  detail?: React.ReactNode;
  links?: { text: string; href: string }[];
}

export default function SectionItem({
  number,
  summary,
  detail,
  links,
}: SectionItemProps) {
  const [expanded, setExpanded] = useState(false);
  const hasDetail = Boolean(detail);

  return (
    <motion.li variants={itemStagger.item} className="list-none">
      <div
        role={hasDetail ? "button" : undefined}
        tabIndex={hasDetail ? 0 : undefined}
        aria-expanded={hasDetail ? expanded : undefined}
        onClick={hasDetail ? () => setExpanded((e) => !e) : undefined}
        onKeyDown={
          hasDetail
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setExpanded((ex) => !ex);
                }
              }
            : undefined
        }
        className={`${hasDetail ? "cursor-pointer" : ""}`}
      >
        <div className="flex items-start gap-3">
          <span className="text-xs text-[var(--accent)] font-mono shrink-0 mt-0.5">
            {number}
          </span>
          <div className="text-sm">
            <span>{summary}</span>
            {hasDetail && (
              <span className="ml-2 text-xs text-[var(--muted)] select-none">
                {expanded ? "−" : "+"}
              </span>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && detail && (
          <ExpandableDetail>
            <p>{detail}</p>
            {links && links.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </ExpandableDetail>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

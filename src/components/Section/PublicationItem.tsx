"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itemStagger } from "@/assets/animations";
import ExpandableDetail from "./ExpandableDetail";
import type { PublicationItem as PubData } from "@/data/publications";

export default function PublicationItem({ pub }: { pub: PubData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.li variants={itemStagger.item} className="list-none">
      <div
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onClick={() => setExpanded((e) => !e)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded((ex) => !ex);
          }
        }}
        className="cursor-pointer"
      >
        <div className="flex items-start gap-3">
          <span className="text-xs text-[var(--accent)] font-mono shrink-0 mt-0.5">
            {pub.number}
          </span>
          <div className="text-sm">
            {pub.href ? (
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                onClick={(e) => e.stopPropagation()}
              >
                {pub.title}
              </a>
            ) : (
              <span>{pub.title}</span>
            )}
            <span className="text-[var(--muted)]">
              {" "}@{" "}
              {pub.venueHref ? (
                <a
                  href={pub.venueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {pub.venue}
                </a>
              ) : (
                pub.venue
              )}
            </span>
            {pub.detail && (
              <span className="text-[var(--muted)] text-xs"> ({pub.detail})</span>
            )}
            <span className="ml-2 text-xs text-[var(--muted)] select-none">
              {expanded ? "−" : "+"}
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <ExpandableDetail>
            <p className="text-xs">
              {pub.authors.slice(0, 2).join(", ")}
              {pub.authors.length > 2 && `, ${pub.authors.slice(2).join(", ")}`}
            </p>
          </ExpandableDetail>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

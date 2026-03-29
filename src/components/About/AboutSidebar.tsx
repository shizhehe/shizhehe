"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sectionReveal, itemStagger } from "@/assets/animations";
import { personal } from "@/data/personal";

export default function AboutSidebar() {
  return (
    <motion.aside
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8 text-xs font-mono"
    >
      <div>
        <Image
          src="/profile.jpg"
          alt="Shizhe He"
          height={120}
          width={120}
          quality={85}
          priority={false}
          className="rounded-full grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="space-y-3">
        <p className="uppercase tracking-[0.2em] text-[var(--muted)]">
          Languages
        </p>
        <motion.ul
          variants={itemStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-1"
        >
          {personal.languages.map((lang) => (
            <motion.li key={lang} variants={itemStagger.item} className="text-[var(--foreground)] list-none">
              {lang}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="space-y-3">
        <p className="uppercase tracking-[0.2em] text-[var(--muted)]">
          Technical
        </p>
        <motion.ul
          variants={itemStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-1"
        >
          {personal.technicalSkills.map((skill) => (
            <motion.li key={skill} variants={itemStagger.item} className="text-[var(--foreground)] list-none">
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="space-y-2">
        <a
          href={`mailto:${personal.email}`}
          className="link text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          {personal.email}
        </a>
      </div>
    </motion.aside>
  );
}

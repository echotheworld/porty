"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const NOW_ITEMS = [
  {
    label: "Teaching",
    detail: "CS & IT courses at Cavite State University",
    icon: "🎓",
  },
  {
    label: "Studying",
    detail: "Master's in Information Technology at Southville International School",
    icon: "📚",
  },
  {
    label: "Building",
    detail: "AI-powered tools and automation systems for local businesses",
    icon: "⚙️",
  },
  {
    label: "Available",
    detail: "Open to freelance web development + AI automation projects",
    icon: "🌐",
  },
];

export default function Now() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="now"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Now</span>
          </motion.div>

          <motion.h2
            className="text-heading"
            style={{ color: "var(--ink)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Current <span style={{ color: "var(--ink-faint)" }}>Status.</span>
          </motion.h2>
        </div>

        <div className="md:pl-[calc(200px+4rem)]">
          <motion.div
            className="flex items-center gap-4 mb-8"
            {...anim(0.2)}
          >
            <p className="section-label" style={{ color: "var(--ink-muted)" }}>What&apos;s happening</p>
            <motion.div
              className="flex-1 h-px origin-left"
              style={{ background: "var(--border)" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {NOW_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                className="now-item group"
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden>{item.icon}</span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="section-label"
                      style={{ color: "var(--ink)" }}
                    >
                      Currently —
                    </span>
                    <span
                      className="section-label"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p
                    className="text-base md:text-lg font-medium leading-snug"
                    style={{ color: "var(--ink)" }}
                  >
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Last updated */}
            <motion.p
              className="mt-10 section-label"
              style={{ color: "var(--ink-faint)" }}
              {...anim(0.8)}
            >
              Last updated · May 2026
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

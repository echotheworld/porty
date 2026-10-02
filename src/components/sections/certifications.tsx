"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CERTS = [
  { title: "Canva Essentials", org: "Canva", category: "Design" },
  { title: "Design Essentials", org: "Canva", category: "Design" },
  { title: "Teacher Essentials", org: "Canva", category: "Design" },
  { title: "Content Marketing", org: "HubSpot", category: "Marketing" },
  { title: "Social Media Marketing", org: "HubSpot", category: "Marketing" },
  { title: "SEO Certified", org: "HubSpot", category: "Marketing" },
  { title: "Project Management", org: "Udemy", category: "Professional" },
  { title: "Social Media Strategy", org: "Udemy", category: "Marketing" },
  { title: "HCIA Cloud Computing", org: "Huawei / Credly", category: "Tech" },
  { title: "Web Development", org: "Udemy", category: "Tech" },
  { title: "UI/UX Design Fundamentals", org: "Udemy", category: "Design" },
  { title: "Digital Marketing Masterclass", org: "Udemy", category: "Marketing" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="certifications"
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
            <span className="section-label">Certifications</span>
          </motion.div>

          <motion.h2
            className="text-heading"
            style={{ color: "var(--ink)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Verified <span style={{ color: "var(--ink-faint)" }}>Expertise.</span>
          </motion.h2>
        </div>

        <div className="md:pl-[calc(200px+4rem)]">
          <motion.div
            className="flex items-center gap-4 mb-8"
            {...anim(0.2)}
          >
            <p className="section-label" style={{ color: "var(--ink-muted)" }}>
              {CERTS.length} Badges earned
            </p>
            <motion.div
              className="flex-1 h-px origin-left"
              style={{ background: "var(--border)" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CERTS.map((cert, i) => (
              <motion.div
                key={cert.title + i}
                className="cert-badge p-6"
                {...anim(0.3 + i * 0.04)}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs mb-3"
                  style={{ background: "var(--ink)", color: "var(--bg)" }}
                >
                  {cert.org[0]}
                </div>
                <p
                  className="text-xs font-extrabold text-center leading-tight mb-1"
                  style={{ color: "var(--ink)" }}
                >
                  {cert.title}
                </p>
                <p
                  className="section-label text-center"
                  style={{ color: "var(--ink-muted)", fontSize: "0.6rem" }}
                >
                  {cert.org}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, FileText } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */
const PROJECTS = [
  { title: "HygienexCare",        tag: "Web",       description: "Real-time inventory engine engineered for automated vending machine product tracking.",          live: "https://hygienexcare.xyz",         behance: "https://www.behance.net/gallery/214665793/HygienexCare-Website",            year: "2024" },
  { title: "Golden Dental Teeth", tag: "Web",       description: "Full-stack dental platform featuring an automated appointment system and secure admin-client portal.", live: "https://goldendental.xyz",         behance: "https://www.behance.net/gallery/214667651/Golden-Dental-Teeth-Website",       year: "2024" },
  { title: "Creative Design Portfolio", tag: "Design", description: "A comprehensive branding and motion design collection showcasing full-scale visual identity and creative direction.",        live: null,                               behance: "https://www.behance.net/gallery/218627199/Creative-Design-Portfolio",          year: "2025" },
  { title: "CVSUVerse",           tag: "App",       description: "A dedicated mobile ecosystem designed to connect the university student body.",        live: null,                               behance: "https://www.behance.net/gallery/214688921/CVSUVerse-App",                       year: "2024" },
  { title: "EventTimer",          tag: "Web",       description: "Live event timer application engineered for seamless programs and ceremonies.",                          live: "https://eventimerz.vercel.app",    behance: "https://www.behance.net/gallery/214670009/evenTimer-Website",                   year: "2024" },
  { title: "Go Further",          tag: "Web",       description: "Dynamic event platform architected for a major 17th-anniversary celebration, featuring integrated schedules and speaker profiles.",         live: null,                               behance: "https://www.behance.net/gallery/214932495/GoFurther-Website",                   year: "2024" },
  { title: "Why Self",            tag: "Web",       description: "An interactive digital experience built to drive self-growth, discovery, and personal development.",          live: null,                               behance: "https://www.behance.net/gallery/214687975/WhySelf-Website",                     year: "2024" },
  { title: "Akda PH",             tag: "Education", description: "An immersive educational platform architected to preserve and showcase historical literature and legacy.",                 live: null,                               behance: "https://www.behance.net/gallery/214686147/AkdaPH-Website",                      year: "2024" },
  { title: "TechScript",          tag: "Web",       description: "Automated script-generation engine designed to streamline live event programming and production.",                      live: null,                               behance: "https://www.behance.net/gallery/214683861/TechScript-Website",                  year: "2024" },
  { title: "CVSUpply",            tag: "Web",       description: "Full-scale e-commerce solution engineered exclusively for the university campus supply chain.",        live: null,                               behance: "https://www.behance.net/gallery/214676897/CVSUpply-Website",                    year: "2024" },
  { title: "AlumniSphere",        tag: "Web",       description: "A dedicated social networking platform built to scale professional connections across university alumni.",            live: null,                               behance: "https://www.behance.net/gallery/214690397/AlumniSphere-UIUX-FIgma",            year: "2024" },
  { title: "PaintTile",           tag: "Design",    description: "A global digital gallery and showcase platform designed to highlight artists and creative works.",              live: null,                               behance: "https://www.behance.net/gallery/214668707/Paintile-Website",                    year: "2024" },
];

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block"
        style={{
          fontSize: "clamp(8rem, 22vw, 18rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          color: "rgba(13,13,13,0.03)",
        }}
      >
        05
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-12">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Projects</span>
              <motion.div
                className="flex-1 h-px origin-left"
                style={{ background: "var(--border)", minWidth: 60 }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
            <motion.h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Selected Work.
            </motion.h2>
          </div>

        </div>

        {/* Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" layout>
          {/* Highlighted Project: Creative Design Portfolio */}
          {PROJECTS.filter(p => p.title === "Creative Design Portfolio").map((project) => (
            <motion.div
              key={project.title}
              layout
              className="project-card col-span-full p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center bg-[var(--surface)] border-2 border-[var(--ink)]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3 project-card-inner">
                  <span className="section-label project-card-muted">{project.year}</span>
                  <span className="section-label px-2 py-0.5" style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: 2 }}>Featured</span>
                </div>
                <h3 className="project-card-title font-extrabold" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  {project.title}
                </h3>
                <p className="project-card-inner text-lg leading-relaxed max-w-[50ch]" style={{ color: "var(--ink-muted)" }}>
                  {project.description}
                </p>
                <div className="flex items-center gap-6 pt-4 mt-auto project-card-inner">
                  {project.behance && (
                    <a href={project.behance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold transition-transform hover:translate-x-1">
                      View on Behance <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other Projects in 3-column grid */}
          {PROJECTS.filter(p => p.title !== "Creative Design Portfolio").map((project, i) => (
            <motion.div
              key={project.title}
              layout
              className="group p-6 flex flex-col gap-4 min-h-[180px] bg-white border border-[var(--border)] rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[var(--ink)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="section-label text-[var(--ink-faint)]">
                  {project.year}
                </span>
                <span className="section-label px-2 py-0.5 bg-[var(--surface)] text-[var(--ink-muted)] rounded-[4px]">
                  {project.tag}
                </span>
              </div>

              {/* Title with sliding arrow */}
              <div className="flex items-start justify-between gap-2">
                <h3
                  className="font-extrabold leading-tight text-[var(--ink)]"
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {project.title}
                </h3>
                <span className="text-xl leading-none text-[var(--ink-faint)] group-hover:text-[var(--ink)] group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                {project.description}
              </p>

              {/* Spacer to push links to bottom */}
              <div className="flex-1" />

              {/* Links */}
              <div className="flex items-center gap-4 pt-3 border-t border-[var(--border)]">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 section-label text-[var(--ink-muted)] transition-opacity hover:opacity-70"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={11} />
                    Live
                  </a>
                )}
                {project.behance && (
                  <a
                    href={project.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 section-label text-[var(--ink-muted)] transition-opacity hover:opacity-70"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FileText size={11} />
                    Behance
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

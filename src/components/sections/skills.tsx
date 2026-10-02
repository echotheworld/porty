"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";

const SKILLS = {
  Design: [
    { name: "Figma", logo: "/Skills/Figma.svg" },
    { name: "Photoshop", logo: "/Skills/Photoshop.svg" },
    { name: "Illustrator", logo: "/Skills/Illustrator.svg" },
    { name: "Premiere Pro", logo: "/Skills/AdobePremier.svg" },
    { name: "DaVinci Resolve", logo: "/Skills/DavinciResolve.svg" },
    { name: "Canva", logo: "/Skills/Canva.svg" },
    { name: "Affinity Suite", logo: "/Skills/AffinityPhoto.svg" },
    { name: "Framer", logo: "/Skills/Framer.svg" },
  ],
  Development: [
    { name: "HTML", logo: "/Skills/HTML.svg" },
    { name: "CSS", logo: "/Skills/CSS.svg" },
    { name: "JavaScript", logo: "/Skills/JavaScript.svg" },
    { name: "TypeScript", logo: "/Skills/TypeScript.svg" },
    { name: "Next.js", logo: "/Skills/NextJS.svg" },
    { name: "Python", logo: "/Skills/Python.svg" },
    { name: "PHP", logo: "/Skills/PHP.svg" },
    { name: "PostgreSQL", logo: "/Skills/Postgre.svg" },
    { name: "WordPress", logo: "/Skills/Wordpress.svg" },
    { name: "Webflow", logo: "/Skills/WebFlow.svg" },
    { name: "Wix", logo: "/Skills/Wix.svg" },
    { name: "REST API", logo: "/Skills/RestAPI.svg" },
    { name: "GitHub", logo: "/Skills/GitHub.svg" },
  ],
  Marketing: [
    { name: "Meta Business Suite", logo: "/Skills/MetaBusinessSuite.svg" },
    { name: "SEMrush", logo: "/Skills/SemRush.svg" },
    { name: "Ahrefs", logo: "/Skills/Ahref.svg" },
    { name: "MailChimp", logo: "/Skills/MailChimp.svg" },
    { name: "Google Workspace", logo: "/Skills/GoogleWorkSpace.svg" },
  ],
  "AI & Automation": [
    { name: "OpenAI", logo: "openai" }, 
    { name: "Anthropic", logo: "/Skills/Anthropic.svg" }, 
    { name: "n8n", logo: "/Skills/n8n.svg" }, 
    { name: "Vercel AI SDK", logo: "/Skills/Vercel.svg" }, 
    { name: "Neon", logo: "/Skills/neon.svg" }, 
    { name: "Supabase", logo: "/Skills/Supabase.svg" },
  ],
  "Project Management": [
    { name: "Notion", logo: "/Skills/Notion.svg" },
    { name: "Asana", logo: "/Skills/Asana.svg" },
    { name: "Monday.com", logo: "/Skills/Monday.com.svg" },
    { name: "Trello", logo: "/Skills/Trello.svg" },
    { name: "MS Teams", logo: "/Skills/MsTeams.svg" }, 
    { name: "Slack", logo: "/Skills/Slack.svg" },
  ],
};

type Category = keyof typeof SKILLS;
const CATEGORIES = Object.keys(SKILLS) as Category[];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block"
        style={{
          fontSize: "clamp(8rem, 22vw, 18rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          color: "rgba(13,13,13,0.02)",
        }}
      >
        04
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Skills &amp; Tools</span>
          </motion.div>

          <motion.h2
            className="text-heading"
            style={{ color: "var(--ink)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            What I <span style={{ color: "var(--ink-faint)" }}>build with.</span>
          </motion.h2>
        </div>

        <div className="md:pl-[calc(200px+4rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, catIdx) => {
              // Development spans 2 columns for better balance
              const isLarge = cat === "Development";
              
              return (
                <motion.div 
                  key={cat} 
                  className={`
                    relative p-10 rounded-[2.5rem] border bg-white/40 group
                    ${isLarge ? "lg:col-span-2" : "lg:col-span-1"}
                  `}
                  style={{ borderColor: "var(--border)" }}
                  {...anim(0.2 + catIdx * 0.1)}
                >
                  <div className="flex flex-col h-full">
                    {/* Header with perfect alignment */}
                    <div className="flex items-center justify-between mb-12 pb-5 border-b border-[var(--border)] border-dashed">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                        {cat}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-[var(--ink-faint)]">{SKILLS[cat].length} Tools</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--ink-faint)]" />
                      </div>
                    </div>
                    
                    {/* Structured Grid for icons - Larger scale */}
                    <div className={`grid gap-x-8 gap-y-10 ${isLarge ? "grid-cols-4 md:grid-cols-5 lg:grid-cols-6" : "grid-cols-3 md:grid-cols-3 lg:grid-cols-3"}`}>
                      {SKILLS[cat].map((skill, i) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center gap-4 group/skill"
                        >
                          <div className="relative w-14 h-14 flex items-center justify-center grayscale contrast-75 opacity-30 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover/skill:scale-110">
                            {skill.logo === "openai" ? (
                              <Icons.openai className="w-10 h-10 fill-current" />
                            ) : skill.logo ? (
                              <Image 
                                src={skill.logo} 
                                alt={skill.name} 
                                width={40} 
                                height={40} 
                                className="object-contain"
                                quality={100}
                              />
                            ) : (
                              <div className="w-10 h-10 bg-[var(--border)] rounded flex items-center justify-center text-xs font-bold text-[var(--ink-muted)]">
                                {skill.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink-faint)] group-hover:text-[var(--ink-muted)] transition-colors text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

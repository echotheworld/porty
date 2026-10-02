"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EXPERIENCE = [
  { 
    title: "College Instructor", 
    company: "Cavite State University", 
    logo: "/WorkEdu/CVSU.png",
    dates: "Sept 2025 – June 2026", 
    desc: "Engineering the next generation of developers by teaching undergraduate CS and IT — focusing on hands-on Java, Arduino, and Linux labs.", 
    current: false 
  },
  { 
    title: "Web Developer", 
    company: "MZN Power Enterprise", 
    logo: "/WorkEdu/mzn.png",
    dates: "Sept 2025 – Mar 2026", 
    desc: "Engineered the company's WordPress infrastructure and spearheaded digital content strategy across all platforms.", 
    current: false 
  },
  { 
    title: "Creative Director", 
    company: "Christ Life", 
    logo: "/WorkEdu/ChristLife.jpg",
    dates: "Aug 2019 – Sept 2025", 
    desc: "Built a 5.5K+ engaged following, launched 20+ high-impact campaigns, and architected a consistent, recognizable brand identity.", 
    current: false 
  },
  { 
    title: "Multimedia & Tech Intern", 
    company: "Church of God World Mission", 
    logo: "/WorkEdu/cog.png",
    dates: "Mar 2025 – May 2025", 
    desc: "Designed motion graphics and visual assets for a major national youth event using Photoshop & After Effects.", 
    current: false 
  },
  { 
    title: "Creative Design & Marketing Specialist", 
    company: "Freelance", 
    logo: "/WorkEdu/Upwork.svg",
    dates: "Jan 2020 – Mar 2025", 
    desc: "Delivered end-to-end branding, web design, and digital marketing solutions for a diverse roster of global clients.", 
    current: false 
  },
  { 
    title: "Graphic Designer", 
    company: "J3:16 Digital Printing", 
    logo: "/WorkEdu/J316.png",
    dates: "May 2016 – Aug 2019", 
    desc: "Led end-to-end design production — crafting everything from social media assets to web graphics and physical marketing materials.", 
    current: false 
  },
];

export default function Experience() {
  const ref    = useRef(null);
  const lineRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const lineInView = useInView(lineRef, { once: true, margin: "-40px" });

  return (
    <section
      id="experience"
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
        03
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Experience</span>
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
            10+ years of{" "}
            <span style={{ color: "var(--ink-faint)" }}>shipping real work.</span>
          </motion.h2>
        </div>

        <div className="md:pl-[calc(200px+4rem)]">
          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.title + item.company}
                className="relative"
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-6 items-start">
                  {/* Logo Container */}
                  <div 
                    className="w-14 h-14 rounded-full overflow-hidden border bg-white flex items-center justify-center p-0 flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Image 
                      src={item.logo} 
                      alt={item.company} 
                      width={80} 
                      height={80} 
                      quality={100}
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pt-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className="font-extrabold"
                        style={{
                          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                          letterSpacing: "-0.025em",
                          color: "var(--ink)",
                        }}
                      >
                        {item.title}
                      </span>
                      {item.current && (
                        <span
                          className="section-label px-2 py-0.5"
                          style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: 2 }}
                        >
                          Now
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2">
                      <span className="text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
                        {item.company}
                      </span>
                      <span style={{ color: "var(--ink-faint)" }}>·</span>
                      <span className="section-label" style={{ color: "var(--ink-faint)" }}>
                        {item.dates}
                      </span>
                    </div>

                    <p
                      className="text-sm leading-relaxed mt-2"
                      style={{ color: "var(--ink-muted)", maxWidth: "55ch" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

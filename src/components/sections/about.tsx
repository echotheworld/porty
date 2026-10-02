"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Icons } from "@/components/icons";

/* ─── Inverted (dark) About section ─────────────────────────── */
export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden section-dark"
      style={{ background: "var(--ink)" }}
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
          color: "rgba(248,248,248,0.03)",
        }}
      >
        01
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section label */}
        <motion.div className="flex items-center gap-4 mb-14" {...anim(0)}>
          <span
            className="section-label"
            style={{ color: "rgba(248,248,248,0.35)" }}
          >
            About
          </span>
          <motion.div
            className="flex-1 h-px origin-left"
            style={{ background: "rgba(248,248,248,0.1)" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20">
          {/* Left — narrative text */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                className="font-extrabold leading-none"
                style={{
                  fontSize: "clamp(1.8rem, 4.2vw, 3rem)",
                  letterSpacing: "-0.04em",
                  color: "var(--bg)",
                  lineHeight: 1.1,
                }}
                initial={{ y: "100%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                Most developers hate designing. Most designers can&apos;t write a line of code.
                <br />
                <span style={{ color: "rgba(248,248,248,0.35)" }}>
                  I do both, ensuring your digital products look premium and run flawlessly.
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="text-base md:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(248,248,248,0.5)", maxWidth: "56ch" }}
              {...anim(0.35)}
            >
              I&apos;ve spent 10+ years helping businesses in the Philippines and
              globally build their digital presence — websites, brands,
              automations, and everything in between. Whether it&apos;s a slick
              web app or a full brand identity, I bring both the technical depth
              and the creative eye.
            </motion.p>

            {/* Currently Block */}
            <motion.div 
              className="flex flex-col gap-5 pt-10 border-t"
              style={{ borderColor: "rgba(248,248,248,0.1)" }}
              {...anim(0.5)}
            >
              <span className="section-label" style={{ color: "rgba(248,248,248,0.3)" }}>Currently</span>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-sm md:text-base font-medium" style={{ color: "var(--bg)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Finishing my Master&apos;s Degree in IT at Southville International School and Colleges
                </li>
                <li className="flex items-center gap-3 text-sm md:text-base font-medium" style={{ color: "var(--bg)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Teaching CS/IT at Cavite State University
                </li>
                <li className="flex items-center gap-3 text-sm md:text-base font-medium" style={{ color: "var(--bg)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Mastering AI Automation & AI Engineering
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right — Socials */}
          <motion.div
            className="flex flex-col gap-5"
            {...anim(0.6)}
          >
            <p
              className="section-label"
              style={{ color: "rgba(248,248,248,0.3)" }}
            >
              Socials
            </p>

            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/jerichojanf", icon: Icons.linkedin, color: "#0077B5" },
              { label: "Behance", href: "https://www.behance.net/jerichojanf", icon: Icons.behance, color: "#1769ff" },
              { label: "GitHub", href: "https://github.com/echotheworld", icon: Icons.github, color: "#A855F7" },
              { label: "Medium", href: "https://medium.com/@jerichojanf", icon: Icons.medium, color: "#EAB308" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-t transition-all duration-300 group"
                style={{ borderColor: "rgba(248,248,248,0.07)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="w-5 h-5 flex items-center justify-center opacity-25 group-hover:opacity-100 transition-opacity duration-300" style={{ color: item.color }}>
                    <item.icon className="w-full h-full" />
                  </span>
                  <p className="text-sm font-medium transition-colors duration-500 text-[rgba(248,248,248,0.4)] group-hover:text-white">
                    {item.label}
                  </p>
                </div>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" style={{ color: "rgba(248,248,248,0.3)" }}>
                  ↗
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

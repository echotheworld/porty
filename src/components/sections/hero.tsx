"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NumberTicker from "@/components/magicui/number-ticker";
import { VisitorCounter } from "@/components/visitor-counter";

/* ─── Animation variants ────────────────────────────────────── */
const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};
const wordItem = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ─── Data ──────────────────────────────────────────────────── */
const HEADLINE_LINES = [
  ["I", "design."],
  ["I", "build."],
  ["I", "market."],
];

const STATS = [
  { value: 50, suffix: "+", label: "Clients" },
  { value: 20, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Years" },
  { value: "Magna", label: "Cum Laude" },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)", paddingTop: "4.5rem" }}
    >


      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT ────────────────────────────────────────── */}
          <motion.div className="flex flex-col gap-7 relative z-10" style={{ y: textY, opacity }}>

            {/* Availability badge & Visitor counter */}
            <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-4">
              <span className="availability-badge">
                <span className="availability-dot" />
                Available for projects
              </span>
              <VisitorCounter className="availability-badge" />
            </motion.div>

            {/* Headline — word-mask reveal */}
            <div>
              <motion.div
                variants={wordContainer}
                initial="hidden"
                animate="show"
                className="leading-none"
                style={{
                  fontSize: "clamp(3.2rem, 9.5vw, 8.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.93,
                }}
              >
                {HEADLINE_LINES.map((line, li) => (
                  <div
                    key={li}
                    className="relative flex flex-wrap gap-x-[0.2em]"
                    style={{ zIndex: HEADLINE_LINES.length - li }}
                  >
                    {line.map((word, wi) => (
                      <div key={wi} className="word-mask">
                        <motion.span
                          variants={wordItem}
                          className="word-inner"
                          style={{ color: "var(--ink)" }}
                        >
                          {word}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Subline */}
            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-[48ch]"
              style={{ color: "var(--ink-muted)" }}
              {...fadeUp(0.75)}
            >
              You need a <span className="font-bold" style={{ color: "var(--ink)" }}>designer</span>, a <span className="font-bold" style={{ color: "var(--ink)" }}>developer</span>, and a <span className="font-bold" style={{ color: "var(--ink)" }}>marketer</span>. I am all three.<br /> <span className="px-1.5 py-0.5 rounded bg-black/5 font-bold" style={{ color: "var(--ink)" }}>10+ years</span> of experience crafting solutions that others say are impossible. Trusted by <span className="px-1.5 py-0.5 rounded bg-black/5 font-bold" style={{ color: "var(--ink)" }}>50+ clients</span> across the Philippines and globally.
            </motion.p>



            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-3 pt-1" {...fadeUp(1.05)}>
              <motion.a
                href="https://studio.jerichofeolino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest"
                style={{
                  background: "var(--ink)",
                  color: "var(--bg)",
                  letterSpacing: "0.12em",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Hire Me →
              </motion.a>

              <motion.button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest border hover-underline"
                style={{
                  borderColor: "var(--ink)",
                  color: "var(--ink)",
                  letterSpacing: "0.12em",
                }}
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                See My Work
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 pt-6 border-t"
              style={{ borderColor: "var(--border)" }}
              {...fadeUp(1.2)}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-0.5"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="text-2xl md:text-3xl font-extrabold tracking-tight"
                    style={{ color: "var(--ink)", lineHeight: 1 }}
                  >
                    {typeof stat.value === "number" ? (
                      <>
                        <NumberTicker value={stat.value} delay={1.5 + i * 0.1} />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="section-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo ──────────────────────────────── */}
          <motion.div
            className="hidden lg:block relative z-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative overflow-hidden z-0"
              style={{ aspectRatio: "3/4", y: photoY }}
            >
              {/* Decorative frame lines */}
              <div
                className="absolute inset-0 border"
                style={{ borderColor: "var(--border)", zIndex: 2, pointerEvents: "none" }}
              />
              <motion.div
                className="absolute top-0 left-0 right-0 h-px origin-left"
                style={{ background: "var(--ink)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px origin-right"
                style={{ background: "var(--ink)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Photo */}
              <Image
                src="/me.png"
                alt="Jericho Feolino — Full-Stack Developer & AI Engineer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 0px, 420px"
              />

              {/* Gradient vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(248,248,248,0.2) 100%)",
                  zIndex: 1,
                }}
              />
            </motion.div>


          </motion.div>
        </div>
      </div>


    </section>
  );
}

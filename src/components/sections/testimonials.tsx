"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "Jericho is the definition of dedication and leadership. He always leads and motivates those around him to stay focused and perform at their best. His ability to connect with others and build strong relationships is unmatched, creating a sense of trust and collaboration within any team.",
    name: "Shermina F.",
    role: "IT Professional",
    initials: "SF",
  },
  {
    quote: "Every time Jericho works on a project or task, you can truly see the dedication and excellence he puts into ensuring quality and efficiency. Always eager to learn and improve, especially in hardware, troubleshooting, and system maintenance, he adapts well to new technologies and consistently delivers great results.",
    name: "Glenda B.",
    role: "IT Professional",
    initials: "GB",
  },
  {
    quote: "Jericho has a strong work ethic, and he goes the extra mile to ensure quality outcomes while managing his time effectively to deliver projects ahead of schedule.",
    name: "Karen A.",
    role: "Marketing Specialist",
    initials: "KA",
  },
  {
    quote: "Jericho demonstrates his dedication to being imaginative, creative, and modernizing the church by creating engaging presentations. He has the artistic ability to design posters and even come up with creative concepts for church events.",
    name: "Meriel R.",
    role: "Marketing Specialist",
    initials: "MR",
  },
  {
    quote: "Jericho was extremely professional from start to finish, and when he began working, his dedication was evident. His passion and heart for his work shine through in the quality of every project he creates. His work is impressive—he worked quickly, efficiently, and patiently.",
    name: "Brandy C.",
    role: "Eletrical Engineer",
    initials: "BC",
  },
  {
    quote: "He is very creative with the techniques he knows and is simple, yet excellent, in every design he creates, whether in PowerPoint, graphics, or web design.",
    name: "Ronnel C.",
    role: "Software Developer",
    initials: "RC",
  },
  {
    quote: "Jericho is one of the most creative and innovative individuals I've had the pleasure of working with. When he takes on digital projects, he consistently brings fresh ideas and a strong vision to the table. His attention to detail ensures that every project is a success.",
    name: "Marianne L.",
    role: "Educator",
    initials: "ML",
  },
];

import { Marquee } from "@/components/magicui/marquee";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        className="absolute left-0 bottom-0 pointer-events-none select-none hidden md:block"
        style={{
          fontSize: "clamp(8rem, 22vw, 18rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          color: "rgba(13,13,13,0.02)",
        }}
      >
        06
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 mb-16">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Testimonials</span>
          </motion.div>

          <motion.h2
            className="text-heading"
            style={{ color: "var(--ink)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Proof, not <span style={{ color: "var(--ink-faint)" }}>promises.</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative w-[350px] md:w-[450px] flex flex-col gap-6 p-8 mx-4 bg-white/40 border border-[var(--border)] rounded-[2rem] hover:border-[var(--ink)] transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              {/* Quote mark */}
              <div
                className="text-5xl leading-none select-none opacity-10 transition-opacity group-hover:opacity-30"
                style={{ color: "var(--ink)" }}
                aria-hidden
              >
                “
              </div>

              <blockquote
                className="text-base md:text-lg leading-relaxed font-medium"
                style={{ color: "var(--ink)" }}
              >
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: "var(--ink)", color: "var(--bg)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                    {t.name}
                  </p>
                  <p className="section-label" style={{ color: "var(--ink-muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--surface)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--surface)]" />
      </div>
    </section>
  );
}

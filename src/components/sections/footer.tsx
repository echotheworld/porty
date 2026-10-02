"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";

export default function Footer() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const year   = new Date().getFullYear();

  const anim = (delay = 0) => ({
    initial:  { opacity: 0, y: 32 },
    animate:  inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <footer
      id="connect"
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--ink)" }}
    >


      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          {...anim(0)}
        >
          <span className="section-label" style={{ color: "rgba(248,248,248,0.3)" }}>
            Connect
          </span>
          <motion.div
            className="flex-1 h-px origin-left"
            style={{ background: "rgba(248,248,248,0.08)" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Big headline */}
        <div className="overflow-visible mb-6 py-4">
          <motion.h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              color: "var(--bg)",
              zIndex: 20,
            }}
            initial={{ y: "40%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Let&apos;s build{" "}
            <span style={{ color: "rgba(248,248,248,0.25)" }}>something.</span>
          </motion.h2>
        </div>

        <motion.p
          className="text-base md:text-lg leading-relaxed mb-12 max-w-xl"
          style={{ color: "rgba(248,248,248,0.45)" }}
          {...anim(0.35)}
        >
          Available for freelance projects, collaborations, and speaking engagements.
          Let&apos;s make something great together.
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-wrap gap-3 mb-16" {...anim(0.5)}>
          {[
            {
              label: "Schedule a Call",
              href:  "https://calendly.com/jerichojanf/30min",
              icon:  <Calendar size={14} />,
              primary: true,
              onClick: (e: React.MouseEvent) => {
                e.preventDefault();
                if (typeof window !== "undefined" && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({ url: "https://calendly.com/jerichojanf/30min" });
                } else {
                  window.open("https://calendly.com/jerichojanf/30min", "_blank");
                }
              }
            },
            {
              label: "Send Email",
              href:  "mailto:jerichojanf@gmail.com",
              icon:  <Mail size={14} />,
              primary: false,
            },
            {
              label: "Visit Studio →",
              href:  "https://studio.jerichofeolino.com",
              icon:  null,
              primary: false,
            },
          ].map(({ label, href, icon, primary, onClick }) => (
            <motion.a
              key={label}
              href={href}
              onClick={onClick}
              target={href.startsWith("mailto") || onClick ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-extrabold uppercase tracking-widest border transition-all duration-200"
              style={
                primary
                  ? {
                      background: "var(--bg)",
                      color: "var(--ink)",
                      borderColor: "var(--bg)",
                      letterSpacing: "0.12em",
                    }
                  : {
                      background: "transparent",
                      color: "rgba(248,248,248,0.7)",
                      borderColor: "rgba(248,248,248,0.15)",
                      letterSpacing: "0.12em",
                    }
              }
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {icon}
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(248,248,248,0.07)", marginBottom: "2rem" }} />

        {/* Bottom row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          {...anim(0.65)}
        >
          <div className="flex items-center gap-6">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/jerichojanf" },
              { label: "Behance",  href: "https://www.behance.net/jerichojanf" },
              { label: "GitHub",   href: "https://github.com/echotheworld"      },
              { label: "Medium",   href: "https://medium.com/@jerichojanf"      },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline section-label"
                style={{ color: "rgba(248,248,248,0.35)" }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1">
            <p className="section-label" style={{ color: "rgba(248,248,248,0.2)" }}>
              © {year} Jericho Feolino
            </p>
            <a
              href="https://studio.jerichofeolino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline section-label"
              style={{ color: "rgba(248,248,248,0.3)" }}
            >
              Need a service? → studio.jerichofeolino.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

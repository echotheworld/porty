"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#about",       label: "About" },
  { href: "#experience",  label: "Experience" },
  { href: "#projects",    label: "Projects" },
  { href: "#skills",      label: "Skills" },
  { href: "#connect",     label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Scroll progress spring */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Active section highlight */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />

      {/* ── Navbar ── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[200]"
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="transition-all duration-500"
          style={{
            background: scrolled ? "rgba(248,248,248,0.92)" : "transparent",
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-[4.5rem] flex items-center justify-between">

            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNav(e, "#hero")}
              className="flex items-center gap-2.5 group"
            >
              <motion.div
                className="relative w-8 h-8 md:w-9 md:h-9"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Image
                  src="/logop.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span
                className="hidden sm:block text-sm font-bold tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                Jericho Feolino
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="hover-underline section-label transition-colors duration-200"
                  style={{
                    color: activeSection === link.href.slice(1)
                      ? "var(--ink)"
                      : "var(--ink-muted)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://studio.jerichofeolino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold uppercase tracking-widest"
                style={{
                  background: "var(--ink)",
                  color: "var(--bg)",
                  letterSpacing: "0.12em",
                }}
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Go to Studio →
              </motion.a>

              <button
                className="md:hidden p-1.5"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{ color: "var(--ink)" }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Fullscreen Menu ── */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-[199] flex flex-col"
          style={{ background: "var(--ink)" }}
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: "var(--bg)", letterSpacing: "-0.03em" }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://studio.jerichofeolino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-8 py-3.5 text-sm font-extrabold uppercase tracking-widest"
              style={{
                background: "var(--bg)",
                color: "var(--ink)",
                letterSpacing: "0.12em",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 + 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Go to Studio →
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const LOGOS = [
  "/Trusted/1.svg",
  "/Trusted/2.svg",
  "/Trusted/3.svg",
  "/Trusted/4.svg",
  "/Trusted/5.svg",
  "/Trusted/6.svg",
  "/Trusted/7.svg",
  "/Trusted/8.svg",
  "/Trusted/9.svg",
  "/Trusted/10.svg",
  "/Trusted/11.svg",
];

const GROUP_1 = LOGOS.slice(0, 6);
const GROUP_2 = LOGOS.slice(6, 11);

interface Props {
  dark?: boolean;
}

export default function MarqueeTicker({ dark = false }: Props) {
  const [index, setIndex] = useState(0);
  const bg = dark ? "var(--ink)" : "var(--white)";
  const borderC = dark ? "rgba(248,248,248,0.05)" : "var(--border)";
  const labelColor = dark ? "rgba(248,248,248,0.4)" : "var(--ink-muted)";

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentGroup = index === 0 ? GROUP_1 : GROUP_2;

  return (
    <section className="relative w-full py-12 md:py-16" style={{ background: bg }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Label */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="section-label !text-[10px] md:!text-xs tracking-[0.4em] mb-3" style={{ color: labelColor }}>
            TRUSTED BY INNOVATIVE STARTUPS & ENTREPRENEURS
          </span>
          <div className="h-px w-12" style={{ background: borderC }} />
        </div>

        {/* Logos Transition Area */}
        <div className="relative min-h-[140px] md:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(16px)", scale: 0.98 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(16px)", scale: 1.02 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 md:gap-x-24 md:gap-y-16 w-full"
            >
              {currentGroup.map((logo, i) => (
                <div
                  key={logo}
                  className="relative w-[140px] h-12 md:w-[220px] md:h-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt={`Client Logo ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Subtle bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px mx-auto max-w-[1200px]" style={{ background: borderC }} />
    </section>
  );
}


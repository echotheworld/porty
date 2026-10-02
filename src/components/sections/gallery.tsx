"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, src: "/Gallery/1.jpg" },
  { id: 2, src: "/Gallery/2.jpg" },
  { id: 3, src: "/Gallery/3.jpg" },
  { id: 4, src: "/Gallery/4.jpg" },
  { id: 5, src: "/Gallery/5.jpg" },
  { id: 6, src: "/Gallery/6.jpg" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);
  
  // Responsive items to show
  const itemsToShow = 4;
  const maxIndex = Math.max(0, GALLERY_ITEMS.length - itemsToShow);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        className="absolute right-0 top-0 pointer-events-none select-none hidden md:block"
        style={{
          fontSize: "clamp(8rem, 22vw, 18rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          color: "rgba(13,13,13,0.03)",
        }}
      >
        07
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Gallery</span>
            </motion.div>
            <motion.h2
              className="text-heading"
              style={{ color: "var(--ink)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Moments in <span style={{ color: "var(--ink-faint)" }}>Focus.</span>
            </motion.h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <motion.div 
            className="flex gap-3"
            animate={{ x: `calc(-${index * (100 / itemsToShow)}% - ${index * 0.75}rem)` }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative flex-shrink-0 w-[85%] sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.57rem)] aspect-[3/4] rounded-[2rem] overflow-hidden border border-[var(--border)] bg-white group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Image
                  src={item.src}
                  alt={`Gallery image ${item.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  quality={100}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

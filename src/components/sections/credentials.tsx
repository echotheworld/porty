"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EDUCATION = [
  {
    school: "Southville International School and Colleges",
    logo: "/WorkEdu/sisc.png",
    degree: "Master's Degree in Information Technology",
    years: "2025 – 2027",
    status: "Ongoing",
  },
  {
    school: "Cavite State University",
    logo: "/WorkEdu/CVSU.png",
    degree: "BS Information Technology",
    years: "2021 – 2025",
    status: "Magna Cum Laude",
  },
  {
    school: "AMA University",
    logo: "/WorkEdu/AMA.webp",
    degree: "TVL – ICT Computer Programming",
    years: "2019 – 2021",
    status: "With High Honors",
  },
];

const AWARDS = [
  {
    title: "Gemini Certified Educator",
    org: "Google",
    logo: "/Badge/GoogleEduc.png",
    link: "https://edu.google.accredible.com/ae825701-0419-45c1-9925-9913e25fe272#acc.N61mAXBf",
    highlight: true
  },
  {
    title: "Google Certified Educator Level 2",
    org: "Google",
    logo: "/Badge/GoogleEduc.png",
    link: "https://edu.google.accredible.com/81d84fb7-f6ac-4ed2-93b0-e5d44f87d4be#acc.Dj47ZsqC",
    highlight: false
  },
  {
    title: "Google Certified Educator Level 1",
    org: "Google",
    logo: "/Badge/GoogleEduc.png",
    link: "https://edu.google.accredible.com/18724915-b379-4435-a904-05381ccebe51#acc.NrTqVIk3",
    highlight: false
  },
  {
    title: "Adobe Creative Educator Level 2",
    org: "Adobe",
    logo: "/Badge/ACE2.png",
    link: "https://www.credly.com/badges/d71ea37b-77be-46ea-ba91-9dda7d3d8ebe",
    highlight: false
  },
  {
    title: "Adobe Creative Educator Level 1",
    org: "Adobe",
    logo: "/Badge/ACE1.png",
    link: "https://www.credly.com/badges/0a0f8e70-d90f-43d0-99bb-a73ba96d4106",
    highlight: false
  },

  {
    title: "Design Essentials",
    org: "Canva",
    logo: "/Badge/Design Essentials.png",
    link: "https://www.canva.com/designschool/certification-award/9e703514-e3ba-4e1c-9b2d-cefdc2687ca2",
    highlight: false
  },
  {
    title: "Teacher Essentials",
    org: "Canva",
    logo: "/Badge/Teacher Essentials.png",
    link: "https://www.canva.com/designschool/certification-award/6d0fa84a-c734-4f1e-bd0a-88011fa166fc",
    highlight: false
  },
  {
    title: "Microsoft Dynamics 365 Certifications",
    org: "Udemy",
    logo: "/Badge/Udemy.svg",
    link: "https://www.udemy.com/certificate/UC-7ec0245a-2918-4c1e-bd7b-f76d1d6eb98c/",
    highlight: false
  },

  {
    title: "Social Media Marketing Strategy",
    org: "Udemy",
    logo: "/Badge/Udemy.svg",
    link: "https://www.udemy.com/certificate/UC-8aa782e2-4a24-4920-994b-2e334bfb14c1/",
    highlight: false
  },
  {
    title: "Professional Diploma in Project Management",
    org: "Udemy",
    logo: "/Badge/Udemy.svg",
    link: "https://www.udemy.com/certificate/UC-5ab24dfa-2201-4405-89bd-78f00fcb5234/",
    highlight: false
  },

  {
    title: "Advanced Program in Marketing",
    org: "Udemy",
    logo: "/Badge/Udemy.svg",
    link: "https://www.udemy.com/certificate/UC-f15edff0-82b3-42fc-902c-b6e02002859d/",
    highlight: false
  },
  {
    title: "Content Marketing",
    org: "HubSpot Academy",
    logo: "/Badge/Hubspot.svg",
    link: "https://drive.google.com/file/d/1yPBVFlIlVX3MwXEpxKcOxr0jwZN9J_nQ/view?usp=sharing",
    credentialId: "662359038d0f4138aa2f8625df91177c",
    highlight: false
  },
  {
    title: "Social Media Marketing",
    org: "HubSpot Academy",
    logo: "/Badge/Hubspot.svg",
    link: "https://drive.google.com/file/d/1KUQSyTh4StXbSgTv-v7u9-lqZkFhD1Eo/view?usp=sharing",
    credentialId: "dda3c429e3ba427f883e95596a83e76f",
    highlight: false
  },
  {
    title: "SEO",
    org: "HubSpot Academy",
    logo: "/Badge/Hubspot.svg",
    link: "https://drive.google.com/file/d/1cv_FOdrbvwFYi1sKgnjwr01Cf1TnoXHI/view?usp=sharing",
    credentialId: "ddb64742e7404082b872be90db254172",
    highlight: false
  },
];

export default function Credentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="credentials"
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
        02
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Credentials</span>
          </motion.div>

          <motion.h2
            className="text-heading"
            style={{ color: "var(--ink)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Academic &amp; <span style={{ color: "var(--ink-faint)" }}>Honors.</span>
          </motion.h2>
        </div>

        <div className="md:pl-[calc(200px+4rem)] flex flex-col gap-16">
          {/* Education timeline */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              {...anim(0.2)}
            >
              <h3 className="section-label" style={{ color: "var(--ink)" }}>Education</h3>
              <motion.div
                className="flex-1 h-px origin-left"
                style={{ background: "var(--border)" }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>

            <div className="relative pl-8">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px origin-top"
                style={{ background: "var(--border)" }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  className="relative mb-10 last:mb-0"
                  {...anim(0.3 + i * 0.1)}
                >
                  <div className="flex gap-5 items-start">
                    {/* Logo Container */}
                    <div
                      className="w-14 h-14 rounded-2xl overflow-hidden border bg-white flex items-center justify-center p-2.5 flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <Image
                        src={edu.logo}
                        alt={edu.school}
                        width={80}
                        height={80}
                        quality={100}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col gap-1 pt-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-extrabold" style={{ fontSize: "1.15rem", color: "var(--ink)", letterSpacing: "-0.025em" }}>
                          {edu.school}
                        </span>
                        <span
                          className={`
                            text-[10px] uppercase tracking-wider font-bold px-4 py-1.5 rounded-full border border-white/10 
                            transition-all duration-300 ease-out hover:scale-105 cursor-default
                            ${["Magna Cum Laude", "With High Honors"].includes(edu.status) 
                              ? "bg-[#0d0d0d] text-white hover:bg-[#222]" 
                              : "bg-[var(--border)] text-[var(--ink-muted)] hover:bg-[var(--ink-faint)]"}
                          `}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-sm font-medium" style={{ color: "var(--ink-muted)" }}>
                        {edu.degree}
                      </p>
                      <p className="section-label" style={{ color: "var(--ink-faint)", fontSize: "11px" }}>
                        {edu.years}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Grid */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              {...anim(0.5)}
            >
              <h3 className="section-label" style={{ color: "var(--ink)" }}>Certificates</h3>
              <motion.div
                className="flex-1 h-px origin-left"
                style={{ background: "var(--border)" }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {AWARDS.map((award, i) => (
                <motion.a
                  key={award.title + i}
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-3 p-4 h-full group"
                  {...anim(0.6 + i * 0.04)}
                >
                  <div
                    className="relative w-14 h-14 rounded-full border bg-white flex items-center justify-center p-2.5 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {award.logo ? (
                      <Image
                        src={award.logo}
                        alt={award.org}
                        width={60}
                        height={60}
                        quality={100}
                        className="object-contain"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center font-bold text-base rounded-full"
                        style={{ background: "var(--ink)", color: "var(--bg)" }}
                      >
                        {award.org[0]}
                      </div>
                    )}
                    
                    {/* Verified badge small icon */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[var(--ink)] border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="font-extrabold leading-tight text-[var(--ink)]" style={{ fontSize: "0.75rem" }}>
                      {award.title}
                    </p>
                    <p className="section-label !text-[8px] !tracking-[0.1em]" style={{ color: "var(--ink-muted)" }}>
                      {award.org}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

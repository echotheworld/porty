import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jerichofeolino.com"),
  title: {
    default: "Jericho Feolino — Full-Stack Developer, AI Automation Engineer & Tech Entrepreneur | Magna Cum Laude, MIT",
    template: "%s | Jericho Feolino",
  },
  description:
    "Jericho Feolino is a Magna Cum Laude graduate (BS Information Technology, Cavite State University) who studied a Master's degree in Information Technology at Southville International School and Colleges. A Full-Stack Developer, AI Automation Engineer, Technical AI Engineer, and Tech Entrepreneur based in Cavite, Philippines — specializing in Web Development, AI-powered systems, digital marketing, and creative design with 10+ years of experience serving 50+ clients.",
  keywords: [
    // ── Identity & Credentials ──────────────────────────────
    "Jericho Feolino",
    "Jericho Feolino Philippines",
    "Jericho Feolino Cavite",
    "Magna Cum Laude IT Philippines",
    "Master Information Technology Philippines",
    "Cavite State University Magna Cum Laude",
    "Southville International School MIT",
    // ── Core Roles ──────────────────────────────────────────
    "Full-Stack Developer Philippines",
    "Full-Stack Web Developer Cavite",
    "AI Automation Engineer Philippines",
    "Technical AI Engineer Philippines",
    "Tech Entrepreneur Philippines",
    "Software Engineer Philippines",
    "Web Developer Philippines",
    "Web Developer Cavite",
    "Web Developer Manila",
    // ── AI & Automation ─────────────────────────────────────
    "AI Automation Philippines",
    "Artificial Intelligence Developer Philippines",
    "AI Engineer Cavite",
    "Machine Learning Philippines",
    "AI Solutions Philippines",
    "AI-Powered Web Development",
    "Automation Specialist Philippines",
    // ── Web Development ─────────────────────────────────────
    "Next.js Developer Philippines",
    "React Developer Philippines",
    "Node.js Developer Philippines",
    "WordPress Developer Philippines",
    "Full Stack Next.js Philippines",
    "Freelance Web Developer Philippines",
    // ── Digital Marketing ───────────────────────────────────
    "Digital Marketing Specialist Philippines",
    "SEO Expert Philippines",
    "SEO Specialist Cavite",
    "Digital Marketing Consultant Philippines",
    "Social Media Marketing Philippines",
    "Content Strategy Philippines",
    // ── Design ─────────────────────────────────────────────
    "Graphic Designer Philippines",
    "UI/UX Designer Philippines",
    "Brand Identity Designer Philippines",
    "Creative Director Philippines",
    "Adobe Creative Suite Expert",
    // ── Local SEO ───────────────────────────────────────────
    "Best Web Developer Cavite",
    "Best Full-Stack Developer Philippines",
    "Top AI Engineer Philippines",
    "Top Tech Entrepreneur Philippines",
    "IT Professional Cavite Philippines",
    "Hire Web Developer Philippines",
    "Hire AI Engineer Philippines",
  ],
  authors: [{ name: "Jericho Feolino", url: "https://www.jerichofeolino.com" }],
  creator: "Jericho Feolino",
  publisher: "Jericho Feolino",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
  ],
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    title: "Jericho Feolino — Full-Stack Developer, AI Automation Engineer & Tech Entrepreneur",
    description:
      "Magna Cum Laude graduate & MIT alumnus. Full-Stack Developer, AI Automation Engineer, and Tech Entrepreneur from Cavite, Philippines. 10+ years delivering web development, AI systems, digital marketing, and creative design to 50+ global clients.",
    url: "https://www.jerichofeolino.com",
    siteName: "Jericho Feolino — Portfolio",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://www.jerichofeolino.com/me.png",
        width: 1200,
        height: 630,
        alt: "Jericho Feolino — Full-Stack Developer, AI Automation Engineer & Tech Entrepreneur, Cavite Philippines",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 300,
      noimageindex: false,
      notranslate: false,
    },
  },
  twitter: {
    title: "Jericho Feolino — Full-Stack Developer & AI Engineer Philippines",
    description:
      "Magna Cum Laude & MIT alumnus. Full-Stack Developer, AI Automation Engineer & Tech Entrepreneur from Cavite, Philippines.",
    card: "summary_large_image",
    images: ["https://www.jerichofeolino.com/me.png"],
    creator: "@jerichojanf",
    site: "@jerichojanf",
  },
  alternates: {
    canonical: "https://www.jerichofeolino.com",
  },
  verification: {
    google: "d1e6a18f46b1984d",
    yandex: "",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased pb-[64px] md:pb-0",
          fontSans.variable
        )}
      >
        {/* ── JSON-LD: Person Schema ─────────────────────────────────────────
             Powers Google Knowledge Panel, rich search results, and AI
             citation entries for ChatGPT, Gemini, Perplexity, etc.
        ────────────────────────────────────────────────────────────────── */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jericho Feolino",
              "url": "https://www.jerichofeolino.com",
              "image": "https://www.jerichofeolino.com/me.png",
              "jobTitle": [
                "Full-Stack Developer",
                "AI Automation Engineer",
                "Technical AI Engineer",
                "Tech Entrepreneur",
                "Digital Marketing Specialist",
                "Graphic Designer"
              ],
              "description": "Jericho Feolino is a Magna Cum Laude graduate (BS Information Technology, Cavite State University) who studied a Master's degree in Information Technology at Southville International School and Colleges. He is a Full-Stack Developer, AI Automation Engineer, Technical AI Engineer, and Tech Entrepreneur based in Cavite, Philippines, with 10+ years of experience in web development, AI-powered systems, digital marketing, and creative design.",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Cavite State University",
                  "url": "https://cvsu.edu.ph",
                  "description": "Bachelor of Science in Information Technology — Magna Cum Laude"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Southville International School and Colleges",
                  "url": "https://southville.edu.ph",
                  "description": "Master in Information Technology"
                }
              ],
              "knowsAbout": [
                "Full-Stack Web Development",
                "AI Automation",
                "Artificial Intelligence Engineering",
                "Next.js",
                "React",
                "Node.js",
                "Digital Marketing",
                "SEO",
                "Graphic Design",
                "UI/UX Design",
                "Adobe Creative Suite",
                "Tech Entrepreneurship",
                "Python",
                "Machine Learning"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cavite",
                "addressRegion": "Calabarzon",
                "addressCountry": "PH"
              },
              "email": "mailto:jerichojanf@gmail.com",
              "sameAs": [
                "https://github.com/jerichofeoworld",
                "https://linkedin.com/in/jerichojanf",
                "https://x.com/jerichojanf",
                "https://youtube.com/jerichojanf",
                "https://www.behance.net/jerichofeolino"
              ],
              "nationality": {
                "@type": "Country",
                "name": "Philippines"
              },
              "award": "Magna Cum Laude — Bachelor of Science in Information Technology, Cavite State University"
            })
          }}
        />
        {/* ── JSON-LD: WebSite Schema ───────────────────────────────────────
             Enables Google Sitelinks Searchbox and brand entity
        ────────────────────────────────────────────────────────────────── */}
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jericho Feolino",
              "url": "https://www.jerichofeolino.com",
              "description": "Official portfolio of Jericho Feolino — Full-Stack Developer, AI Automation Engineer, Technical AI Engineer, Tech Entrepreneur, and Digital Marketing Specialist from Cavite, Philippines.",
              "author": {
                "@type": "Person",
                "name": "Jericho Feolino"
              },
              "inLanguage": "en-PH",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.jerichofeolino.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

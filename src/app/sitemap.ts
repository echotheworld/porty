import { MetadataRoute } from "next";

/**
 * Next.js 14 App Router — Dynamic Sitemap
 * Served at: /sitemap.xml
 *
 * Optimized for SEO, AEO, and GEO
 * Domain: https://www.jerichofeolino.com
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jerichofeolino.com";
  const lastModified = new Date("2026-05-05");

  return [
    {
      // HOME — Priority entity page for "Jericho Feolino" searches
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      // ABOUT ME — Answers "Who is Jericho Feolino?" (AEO/GEO)
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      // CASE STUDIES — Portfolio evidence for AI trust signals
      url: `${baseUrl}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      // SERVICE — Answers "What services does Jericho Feolino offer?"
      url: `${baseUrl}/service`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      // CONTACT — Answers "How do I contact Jericho Feolino?"
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

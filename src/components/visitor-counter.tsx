"use client";

import { useEffect, useState } from "react";
import { incrementViews, getViews } from "@/lib/firebase";

export function VisitorCounter({ className }: { className?: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const initViews = async () => {
      try {
        // First increment the view if needed
        await incrementViews();
        // Then get the total count
        const totalViews = await getViews();
        if (mounted && totalViews !== null) {
          setViews(totalViews);
        }
      } catch (error) {
        console.error("Failed to load visitor count:", error);
      }
    };

    initViews();

    return () => {
      mounted = false;
    };
  }, []);

  if (views === null) return null;

  return (
    <div className={className} title="Total Website Visitors">
      <span>Visitors: {views.toLocaleString()}</span>
    </div>
  );
}

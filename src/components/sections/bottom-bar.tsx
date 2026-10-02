"use client";

import { Calendar, Mail } from "lucide-react";

export default function BottomBar() {
  return (
    <div
      className="bottom-bar md:hidden"
      style={{ 
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        background: "var(--ink)",
        borderTop: "1px solid rgba(248,248,248,0.1)"
      }}
    >
      <a
        href="https://calendly.com/jerichojanf/30min"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window !== "undefined" && (window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: "https://calendly.com/jerichojanf/30min" });
          } else {
            window.open("https://calendly.com/jerichojanf/30min", "_blank");
          }
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-extrabold uppercase tracking-widest"
        style={{
          background: "var(--bg)",
          color: "var(--ink)",
          letterSpacing: "0.12em",
        }}
      >
        <Calendar size={13} />
        Book a Call
      </a>

      <a
        href="mailto:jerichojanf@gmail.com"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-extrabold uppercase tracking-widest"
        style={{
          background: "transparent",
          color: "rgba(248,248,248,0.8)",
          letterSpacing: "0.12em",
        }}
      >
        <Mail size={13} />
        Email Me
      </a>
    </div>
  );
}

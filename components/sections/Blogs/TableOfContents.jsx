"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!headings?.length) return;

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings?.length) return null;

  return (
    <div className="mb-12">
      <span className="text-[14px] font-bold text-zinc-300 uppercase mb-8 block flex items-center gap-3 tracking-wider">
        <span className="w-6 h-[1px] bg-primary" />
        TABLE OF CONTENTS
      </span>
      <nav className="space-y-3 border-l border-zinc-900">
        {headings.map((heading, index) => {
          const isActive = activeId === heading.id;
          const isH3 = heading.level === "h3";

          return (
            <a
              key={heading.key || `${heading.id}-${index}`}
              href={`#${heading.id}`}
              className={`block text-[12px] font-bold uppercase leading-snug transition-colors border-l-2 -ml-px pl-4 ${
                isH3 ? "pl-7" : ""
              } ${
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-zinc-500 hover:text-white"
              }`}
            >
              {heading.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

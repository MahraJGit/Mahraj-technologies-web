import React from "react";
interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 md:mb-14 max-w-3xl ${alignClass} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

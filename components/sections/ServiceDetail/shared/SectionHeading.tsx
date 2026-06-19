import React from "react";
interface SectionHeadingProps {
  title: string;
  titleLine2?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  title,
  titleLine2,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 md:mb-14 max-w-3xl ${alignClass} ${className}`}>
      <h2
        className={`text-3xl md:text-5xl font-bold text-white mb-4 uppercase leading-tight ${
          titleLine2 ? "flex flex-col gap-1" : ""
        } ${align === "center" && titleLine2 ? "items-center" : ""}`}
      >
        {titleLine2 ? (
          <>
            <span className="whitespace-nowrap">{title}</span>
            <span>{titleLine2}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

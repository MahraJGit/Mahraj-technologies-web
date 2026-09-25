function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

/** Returns unique slug ids for repeated heading text (e.g. title, title-2). */
export function createHeadingIdGenerator() {
  const counts = Object.create(null);

  return (text) => {
    const base = slugify(text) || "section";
    counts[base] = (counts[base] || 0) + 1;
    return counts[base] === 1 ? base : `${base}-${counts[base]}`;
  };
}

export function extractHeadings(content) {
  if (!content?.length) return [];

  const nextId = createHeadingIdGenerator();

  return content
    .filter(
      (block) =>
        block._type === "block" &&
        (block.style === "h2" || block.style === "h3")
    )
    .map((block) => {
      const text = block.children?.map((child) => child.text).join("") || "";
      return {
        key: block._key,
        id: nextId(text),
        text,
        level: block.style,
      };
    })
    .filter((heading) => heading.text.trim().length > 0);
}

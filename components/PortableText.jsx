import { PortableText as BasePortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

const components = {
  block: {
    h2: ({ children, value }) => {
      const text = value?.children?.map(child => child.text).join('') || '';
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return (
        <h2 id={id} className="text-white text-3xl mt-16 mb-8 scroll-mt-32">
          {children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const text = value?.children?.map(child => child.text).join('') || '';
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return (
        <h3 id={id} className="text-white text-2xl mt-12 mb-6 scroll-mt-32">
          {children}
        </h3>
      );
    },
    normal: ({ children }) => (
      <p className="text-zinc-300 text-lg leading-relaxed mb-8">
        {children}
      </p>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="relative aspect-video w-full my-12 overflow-hidden rounded-sm border border-white/10">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Content Image'}
          title={value.originalFilename || value.alt || 'Content Image'}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
        />
      </div>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-primary hover:underline transition-all">
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-10 space-y-4 mb-8 marker:text-primary">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-10 space-y-4 mb-8 marker:text-primary">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-zinc-300 text-lg leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="text-zinc-300 text-lg leading-relaxed">{children}</li>,
    table: ({ value }) => {
      return (
        <table>
          <style>{`
            table {
              border-collapse: collapse;
              width: 100%;
              border: 1px solid #f97316;
            }

            td {
              border: 1px solid #3f3f46;
              padding: 12px;
              color: white;
              font-size: 1rem;
            }
          `}</style>
          <tbody>
            {value.rows.map((row, i) => (
              <tr key={i}>
                {row.cells.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
  },
};

export default function PortableText({ value }) {
  if (!value) return null;
  return <BasePortableText value={value} components={components} />;
}

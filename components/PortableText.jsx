import { PortableText as BasePortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

const components = {
  block: {
    h2: ({ children }) => {
      const id = children[0]?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return (
        <h2 id={id} className="text-white text-3xl font-black uppercase tracking-tight mt-16 mb-8 border-l-2 border-primary pl-6 scroll-mt-32">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children[0]?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return (
        <h3 id={id} className="text-white text-2xl font-black uppercase tracking-tight mt-12 mb-6 scroll-mt-32">
          {children}
        </h3>
      );
    },
    normal: ({ children }) => (
      <p className="text-zinc-400 text-lg leading-relaxed mb-8">
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
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 100vw, 1200px"
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
};

export default function PortableText({ value }) {
  if (!value) return null;
  return <BasePortableText value={value} components={components} />;
}

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ReactNode } from "react";

type Props = {
  value: Array<Record<string, unknown>>;
};

const components: PortableTextComponents = {
  block: {
    lead: ({ children }) => <p className="article-lead">{children}</p>,
    h2: ({ children }) => <h2 id={toAnchor(children)}>{children}</h2>,
    h3: ({ children }) => <h3 id={toAnchor(children)}>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

function toAnchor(children: ReactNode) {
  const text = Array.isArray(children) ? children.join(" ") : String(children || "");

  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function PortableArticle({ value }: Props) {
  return <PortableText value={value} components={components} />;
}

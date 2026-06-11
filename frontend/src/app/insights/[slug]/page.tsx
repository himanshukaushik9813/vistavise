import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortableArticle from "@/components/insights/PortableArticle";
import { ArrowRightIcon } from "@/components/icons";
import ParallaxImage from "@/components/motion/ParallaxImage";
import RevealSection from "@/components/motion/RevealSection";
import RevealText from "@/components/motion/RevealText";
import TiltCard from "@/components/motion/TiltCard";
import { fallbackArticles, formatDate } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { getAllArticles, getArticleBySlug } from "@/sanity/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

function textFromBlock(block: Record<string, unknown>) {
  const children = block.children;
  if (!Array.isArray(children)) return "";

  return children
    .map((child) => {
      if (typeof child === "object" && child && "text" in child) {
        return String(child.text || "");
      }

      return "";
    })
    .join("");
}

function toAnchor(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getToc(body: Array<Record<string, unknown>>) {
  return body
    .filter((block) => block.style === "h2" || block.style === "h3")
    .map((block) => {
      const title = textFromBlock(block);
      return {
        title,
        anchor: toAnchor(title),
        level: block.style === "h3" ? 3 : 2,
      };
    })
    .filter((item) => item.title);
}

export async function generateStaticParams() {
  return fallbackArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const title = article.seo?.title || `${article.title} | VistaVise Consulting`;
  const description = article.seo?.description || article.summary;
  const url = `${siteConfig.url}/insights/${article.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: article.image ? [{ url: article.image }] : [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.image || siteConfig.ogImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = await getAllArticles();
  const related = allArticles
    .filter((item) => item.slug !== article.slug && item.category.slug === article.category.slug)
    .concat(allArticles.filter((item) => item.slug !== article.slug && item.category.slug !== article.category.slug))
    .slice(0, 3);
  const toc = getToc(article.body);
  const articleUrl = `${siteConfig.url}/insights/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: article.image || siteConfig.ogImage,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.ogImage,
      },
    },
    mainEntityOfPage: articleUrl,
  };

  return (
    <>
      <Navbar />
      <main>
        <article className="article-page">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <header className="article-hero">
            <div className="container-custom article-hero-grid">
              <RevealSection>
                <div className="article-meta-line">
                  <span>{article.category.title}</span>
                  <span>{article.readingTime} min read</span>
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <RevealText as="h1" text={article.title} />
                <p>{article.subtitle}</p>
              </RevealSection>

              <TiltCard as="div" className="article-author-card premium-tilt-card" maxTilt={2}>
                <span className="eyebrow">Author</span>
                <h2>{article.author.name}</h2>
                <p>{article.author.role}</p>
                {article.author.bio ? <p>{article.author.bio}</p> : null}
              </TiltCard>
            </div>
          </header>

          {article.image ? (
            <RevealSection className="container-custom article-image-wrap">
              <ParallaxImage
                src={article.image}
                alt={`${article.title} hero image`}
                fill
                priority
                sizes="100vw"
                wrapperClassName="article-image-layer"
                className="article-image"
                unoptimized={article.image.startsWith("http")}
              />
            </RevealSection>
          ) : null}

          <div className="container-custom article-layout">
            <RevealSection className="article-toc" delay={0.08}>
              <p className="eyebrow">In This Guide</p>
              {toc.length ? (
                <nav aria-label="Table of contents">
                  {toc.map((item) => (
                    <a key={item.anchor} href={`#${item.anchor}`} className={item.level === 3 ? "is-child" : ""}>
                      {item.title}
                    </a>
                  ))}
                </nav>
              ) : (
                <p>Structured guidance, practical context, and recommended next steps.</p>
              )}
            </RevealSection>

            <div className="article-content">
              {article.pullQuote ? (
                <RevealSection>
                  <blockquote className="article-pull">{article.pullQuote}</blockquote>
                </RevealSection>
              ) : null}

              {article.callout ? (
                <TiltCard as="div" className="article-callout premium-tilt-card" maxTilt={2}>
                  <span className="eyebrow">Framework</span>
                  <h2>{article.callout.title}</h2>
                  <p>{article.callout.body}</p>
                </TiltCard>
              ) : null}

              <PortableArticle value={article.body} />

              <TiltCard as="div" className="article-contact-cta premium-tilt-card" maxTilt={2}>
                <span className="eyebrow">Need Guidance?</span>
                <h2>Turn this insight into a practical next step.</h2>
                <p>
                  VistaVise helps businesses, professionals, students, and migrants move from
                  uncertainty to structured action.
                </p>
                <Link href="/#contact" className="btn-primary">
                  Book a Consultation
                  <ArrowRightIcon size={14} />
                </Link>
              </TiltCard>
            </div>
          </div>

          <section className="related-articles-section">
            <div className="container-custom">
              <RevealSection className="related-head">
                <p className="eyebrow">Related Articles</p>
                <RevealText as="h2" text="Continue exploring this topic." />
              </RevealSection>
              <div className="related-grid">
                {related.map((item) => (
                  <TiltCard
                    key={item.slug}
                    as="a"
                    href={`/insights/${item.slug}`}
                    className="related-card premium-tilt-card"
                    maxTilt={2}
                  >
                    <span>{item.category.title}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />

      <style>{`
        .article-hero {
          padding: var(--space-128) 0 var(--space-64);
        }

        .article-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.68fr) minmax(300px, 0.32fr);
          gap: var(--space-64);
          align-items: end;
        }

        .article-meta-line {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .article-hero h1 {
          margin: var(--space-24) 0 0;
          max-width: 980px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.25rem, 6vw, 6.4rem);
          line-height: 0.9;
          letter-spacing: -0.085em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .article-hero p {
          margin: var(--space-24) 0 0;
          max-width: 720px;
          color: var(--text-secondary);
          font-size: 1.12rem;
          line-height: 1.8;
        }

        .article-author-card {
          padding: var(--space-24);
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--shadow-soft);
        }

        .article-author-card h2 {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.45rem;
          letter-spacing: -0.045em;
        }

        .article-author-card p {
          margin-top: 12px;
          font-size: 0.94rem;
          line-height: 1.7;
        }

        .article-image-wrap {
          position: relative;
          min-height: min(620px, 48vw);
          overflow: hidden;
          border-radius: 40px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          box-shadow: var(--shadow-panel);
        }

        .article-image-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .article-image {
          object-fit: cover;
          filter: saturate(0.82);
        }

        .article-layout {
          display: grid;
          grid-template-columns: minmax(220px, 0.28fr) minmax(0, 0.72fr);
          gap: var(--space-64);
          padding-block: var(--space-64);
          align-items: start;
        }

        .article-toc {
          position: sticky;
          top: var(--space-96);
          padding: var(--space-24);
          border-radius: 28px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.78);
          box-shadow: var(--shadow-soft);
        }

        .article-toc nav {
          display: grid;
          gap: 14px;
          margin-top: var(--space-24);
        }

        .article-toc a,
        .article-toc p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.55;
          text-decoration: none;
        }

        .article-toc a.is-child {
          padding-left: 14px;
          color: var(--text-muted);
        }

        .article-content {
          max-width: 820px;
          color: var(--text-secondary);
        }

        .article-content p,
        .article-content li {
          font-size: 1.04rem;
          line-height: 1.88;
        }

        .article-content h2 {
          margin: var(--space-64) 0 var(--space-24);
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1;
          letter-spacing: -0.06em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .article-content h3 {
          margin: var(--space-40) 0 16px;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.55rem;
          letter-spacing: -0.045em;
          color: var(--text-primary);
        }

        .article-lead {
          color: var(--text-primary);
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.35rem, 2.1vw, 1.8rem) !important;
          line-height: 1.45 !important;
          letter-spacing: -0.045em;
        }

        .article-pull {
          margin: 0 0 var(--space-40);
          padding: var(--space-40);
          border-radius: 32px;
          background: #111;
          color: #fff;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.7rem, 3vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.06em;
        }

        .article-callout,
        .article-contact-cta {
          margin: var(--space-40) 0;
          padding: var(--space-40);
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.84);
          box-shadow: var(--shadow-soft);
        }

        .article-callout h2,
        .article-contact-cta h2 {
          margin-top: var(--space-24);
        }

        .related-articles-section {
          padding: var(--space-64) 0 var(--space-96);
        }

        .related-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: var(--space-40);
          margin-bottom: var(--space-40);
        }

        .related-head h2 {
          margin: 0;
          max-width: 560px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2rem, 3vw, 3.6rem);
          line-height: 1;
          letter-spacing: -0.065em;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .related-card {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          padding: var(--space-24);
          border-radius: 28px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--shadow-soft);
          text-decoration: none;
        }

        .related-card span {
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .related-card h3 {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.35rem;
          line-height: 1.08;
          letter-spacing: -0.045em;
        }

        .related-card p {
          margin: 16px 0 0;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .article-hero-grid,
          .article-layout,
          .related-grid {
            grid-template-columns: 1fr;
          }

          .article-toc {
            position: static;
          }
        }
      `}</style>
    </>
  );
}

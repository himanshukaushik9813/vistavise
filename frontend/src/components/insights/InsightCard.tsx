import Link from "next/link";
import type { Article } from "@/lib/content";
import { formatDate } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TiltCard from "@/components/motion/TiltCard";

type Props = {
  article: Article;
  featured?: boolean;
};

export default function InsightCard({ article, featured = false }: Props) {
  return (
    <TiltCard as="article" className={`${featured ? "insight-card is-featured" : "insight-card"} premium-tilt-card`} maxTilt={2.2}>
      {article.image ? (
        <Link
          href={`/insights/${article.slug}`}
          className="insight-card-media"
          aria-label={article.title}
        >
          <ParallaxImage
            src={article.image}
            alt={`${article.title} editorial image`}
            fill
            priority={featured}
            loading={featured ? "eager" : "lazy"}
            sizes={featured ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 33vw"}
            wrapperClassName="insight-card-media-layer"
            className="insight-card-image"
            unoptimized={article.image.startsWith("http")}
          />
        </Link>
      ) : null}

      <div className="insight-card-body">
        <div className="insight-card-meta">
          <span>{article.category.title}</span>
          <span>{article.readingTime} min read</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>

        <h3>
          <Link href={`/insights/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.summary}</p>

        <Link href={`/insights/${article.slug}`} className="insight-read-link">
          Read article
          <ArrowRightIcon size={14} />
        </Link>
      </div>

    </TiltCard>
  );
}

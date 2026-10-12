import RevealText from "./motion/RevealText";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/**
 * Shared page header used by inner pages (About, Services, Contact, ...)
 * so headings share one font, size, and alignment across the site.
 */
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container-custom page-header-inner">
        <p className="eyebrow">{eyebrow}</p>
        <RevealText as="h1" className="page-header-title" text={title} variant="premiumHeading" float />
        {subtitle ? <p className="page-header-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}

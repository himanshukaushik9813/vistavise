"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "./icons";
import { calendlyUrl } from "@/lib/vistavise-data";

const logoUrl =
  "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/insights" },
  { label: "Meet Ajay", href: "/about#meet-ajay" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Business Analysis Mentorship", href: "/services/business-analysis-mentorship" },
  { label: "Career Coaching", href: "/services/one-to-one-mentoring" },
  { label: "Interview Preparation", href: "/services/interview-preparation" },
  { label: "Resume & Portfolio Review", href: "/services/resume-building" },
  { label: "Migration Guidance", href: "/services/ba-community" },
  { label: "Strategic Consulting", href: "/services/templates-and-resources" },
];

const resourceLinks = [
  { label: "Articles", href: "/insights" },
  { label: "Templates", href: "/services/templates-and-resources" },
  { label: "Podcasts", href: "/podcast" },
  { label: "Case Studies", href: "/insights/calm-framework-business-analysis-decisions" },
  { label: "Community", href: "/services/ba-community" },
  { label: "FAQ", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

function MediumIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 12a6.7 6.7 0 0 1-6.3 7c-3.5 0-6.3-3.1-6.3-7s2.8-7 6.3-7a6.7 6.7 0 0 1 6.3 7Zm6.9 0c0 3.4-1.4 6.1-3.1 6.1s-3.1-2.7-3.1-6.1 1.4-6.1 3.1-6.1 3.1 2.7 3.1 6.1Zm2.8 0c0 3-.5 5.4-1.2 5.4s-1.2-2.4-1.2-5.4.5-5.4 1.2-5.4 1.2 2.4 1.2 5.4Z" />
    </svg>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.8-1.2-4.8-5A3.9 3.9 0 0 1 6.6 8c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1A9.8 9.8 0 0 1 12 6a9.8 9.8 0 0 1 2.6.4c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.8-4.8 5 .4.3.7.9.7 1.8V21c0 .3.2.6.8.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "https://www.vistavise.com.au/linkedin", icon: LinkedInIcon },
  { label: "YouTube", href: "https://www.youtube.com/@analystperspectives", icon: YouTubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/analystperspectives/", icon: InstagramIcon },
  { label: "Medium", href: "https://medium.com", icon: MediumIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
];

function FooterWordmark() {
  return (
    <span className="footer-wordmark" aria-label="VistaVise Consulting">
      <span>
        <strong>Vista</strong>
        <em>Vise</em>
      </span>
      <small>Consulting</small>
    </span>
  );
}

function FooterLineArt() {
  return (
    <div className="footer-line-art" aria-hidden="true">
      <svg viewBox="0 0 1200 460" preserveAspectRatio="none">
        <g className="footer-art-layer footer-art-layer-one">
          <rect x="54" y="74" width="180" height="92" rx="12" />
          <rect x="284" y="74" width="180" height="92" rx="12" />
          <rect x="514" y="74" width="180" height="92" rx="12" />
          <path d="M234 120h50M464 120h50" />
          <path d="M84 220h220v130H84zM124 260h140M124 292h96M124 324h116" />
          <path d="M840 72h230v128H840zM872 112h84M872 144h148M872 176h112" />
        </g>
        <g className="footer-art-layer footer-art-layer-two">
          <path d="M408 296c86-68 172-68 258 0s172 68 258 0" />
          <circle cx="408" cy="296" r="14" />
          <circle cx="666" cy="296" r="14" />
          <circle cx="924" cy="296" r="14" />
          <path d="M516 242h96v46h-96zM714 242h96v46h-96z" />
          <path d="M1020 272h88v46h-88zM1108 295h48" />
        </g>
      </svg>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <div className="footer-links">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="footer-link">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="footer-shell">
      <FooterLineArt />
      <span className="footer-gradient footer-gradient-one" aria-hidden="true" />
      <span className="footer-gradient footer-gradient-two" aria-hidden="true" />
      <span className="footer-gradient footer-gradient-three" aria-hidden="true" />

      <div className="container-custom footer-container">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="footer-cta-panel"
        >
          <div>
            <p className="footer-kicker">Book Free Consultation</p>
            <h2>Ready to Build Your Business Analysis Career?</h2>
            <p>
              Join hundreds of students and professionals building practical Business Analysis
              skills through mentorship, consulting and real-world projects.
            </p>
          </div>

          <div className="footer-cta-actions">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="footer-button footer-button-primary">
              Book Free Consultation
              <ArrowRightIcon size={15} />
            </a>
            <Link href="/services" className="footer-button footer-button-secondary">
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="footer-main"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="footer-brand-column"
          >
            <Link href="/" className="footer-brand-link">
              <span className="footer-logo">
                <Image
                  src={logoUrl}
                  alt="VistaVise logo"
                  fill
                  sizes="48px"
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </span>
              <FooterWordmark />
            </Link>

            <p className="footer-copy">
              Helping students and professionals build practical Business Analysis careers through
              mentorship, consulting and real-world experience.
            </p>

            <div className="footer-social-row" aria-label="VistaVise social links">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, rotate: 4 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="footer-social"
                    title={social.label}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {[
            { title: "Navigation", links: navigationLinks },
            { title: "Services", links: serviceLinks },
            { title: "Resources", links: resourceLinks },
          ].map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.58, delay: 0.22 + index * 0.07 }}
            >
              <FooterColumn title={column.title} links={column.links} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.58, delay: 0.42 }}
          className="footer-bottom"
        >
          <p>© {year} VistaVise Consulting.</p>
          <div className="footer-legal">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link footer-legal-link">
                {link.label}
              </Link>
            ))}
            <span>Made with care in Melbourne</span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .footer-shell {
          --footer-text: #10233f;
          --footer-muted: #536170;
          --footer-soft: #667085;
          position: relative;
          overflow: hidden;
          margin-top: 0;
          padding: 140px 0 100px;
          background:
            radial-gradient(circle at 18% 8%, rgba(220, 234, 247, 0.62), transparent 31%),
            radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.86), transparent 34%),
            radial-gradient(circle at 62% 92%, rgba(247, 243, 234, 0.78), transparent 30%),
            linear-gradient(180deg, #f8fafc 0%, #f4f8fb 54%, #f7f3ea 100%);
          color: var(--footer-text);
          isolation: isolate;
        }

        .footer-gradient {
          position: absolute;
          z-index: 0;
          display: block;
          border-radius: 999px;
          filter: blur(46px);
          pointer-events: none;
          will-change: transform;
          animation: footerGradientDrift 28s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;
        }

        .footer-gradient-one {
          top: -12%;
          left: 8%;
          width: min(520px, 44vw);
          height: min(520px, 44vw);
          background: rgba(220, 234, 247, 0.48);
        }

        .footer-gradient-two {
          right: -8%;
          top: 20%;
          width: min(640px, 48vw);
          height: min(640px, 48vw);
          background: rgba(207, 225, 242, 0.46);
          animation-delay: -8s;
        }

        .footer-gradient-three {
          left: 30%;
          bottom: -22%;
          width: min(720px, 54vw);
          height: min(720px, 54vw);
          background: rgba(255, 255, 255, 0.64);
          animation-delay: -14s;
        }

        .footer-line-art {
          position: absolute;
          inset: 5% 0 auto;
          z-index: 0;
          height: 70%;
          color: rgba(30, 42, 56, 0.045);
          pointer-events: none;
          transform: translate3d(0, 0, 0);
          will-change: transform;
          animation: footerLineDrift 42s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;
        }

        .footer-line-art svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .footer-line-art rect,
        .footer-line-art path,
        .footer-line-art circle {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.4;
        }

        .footer-art-layer-two {
          opacity: 0.72;
          transform: translate3d(0, 14px, 0);
        }

        .footer-container {
          position: relative;
          z-index: 1;
        }

        .footer-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: clamp(28px, 5vw, 74px);
          align-items: end;
          margin-bottom: clamp(72px, 8vw, 104px);
          padding-bottom: clamp(48px, 5vw, 72px);
          border-bottom: 1px solid rgba(30, 42, 56, 0.08);
        }

        .footer-kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: var(--footer-soft);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .footer-kicker::after {
          content: "";
          width: 88px;
          height: 1px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.26), transparent);
        }

        .footer-cta-panel h2 {
          max-width: 850px;
          margin: 22px 0 0;
          color: var(--footer-text);
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.85rem, 5vw, 5.9rem);
          font-weight: 850;
          line-height: 0.98;
          letter-spacing: -0.045em;
          word-spacing: 0.08em;
          text-wrap: balance;
        }

        .footer-cta-panel p:not(.footer-kicker) {
          max-width: 720px;
          margin: 24px 0 0;
          color: var(--footer-muted);
          font-size: clamp(1rem, 1.1vw, 1.14rem);
          line-height: 1.78;
        }

        .footer-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 12px;
        }

        .footer-button {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 22px;
          border-radius: 999px;
          font-family: var(--font-heading), sans-serif;
          font-weight: 850;
          letter-spacing: -0.02em;
          text-decoration: none;
          transition:
            transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 360ms cubic-bezier(0.22, 1, 0.36, 1),
            background 360ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .footer-button:hover {
          transform: translateY(-2px);
        }

        .footer-button-primary {
          border: 1px solid rgba(220, 234, 247, 0.92);
          background: #dceaf7;
          color: #102235;
          box-shadow:
            0 18px 46px rgba(15, 23, 42, 0.08),
            0 0 42px rgba(220, 234, 247, 0.28);
        }

        .footer-button-primary:hover {
          background: #edf6ff;
          box-shadow:
            0 22px 58px rgba(15, 23, 42, 0.12),
            0 0 58px rgba(220, 234, 247, 0.36);
        }

        .footer-button-secondary {
          border: 1px solid rgba(30, 42, 56, 0.1);
          background: rgba(255, 255, 255, 0.62);
          color: var(--footer-text);
        }

        .footer-button-secondary:hover {
          border-color: rgba(30, 42, 56, 0.18);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
        }

        .footer-main {
          display: grid;
          grid-template-columns: minmax(280px, 1.15fr) repeat(3, minmax(0, 0.72fr));
          gap: clamp(32px, 4vw, 74px);
          align-items: start;
        }

        .footer-brand-column {
          display: grid;
          gap: 24px;
          max-width: 430px;
        }

        .footer-brand-link {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }

        .footer-logo {
          position: relative;
          width: 48px;
          height: 48px;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(30, 42, 56, 0.08);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
        }

        .footer-wordmark {
          display: inline-flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer-wordmark span {
          display: inline-flex;
          align-items: baseline;
          gap: 1px;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.7rem;
          font-weight: 850;
          letter-spacing: -0.055em;
        }

        .footer-wordmark strong {
          color: #0f172a;
          font-weight: 760;
        }

        .footer-wordmark em {
          color: #1d4ed8;
          font-style: normal;
          font-weight: 900;
        }

        .footer-wordmark small {
          margin-top: 6px;
          color: #64748b;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .footer-copy {
          margin: 0;
          color: var(--footer-muted);
          font-size: 0.98rem;
          line-height: 1.8;
        }

        .footer-social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-social {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.08);
          background: rgba(255, 255, 255, 0.64);
          color: #1e2a38;
          text-decoration: none;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          transition:
            background 360ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 360ms cubic-bezier(0.22, 1, 0.36, 1),
            color 360ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .footer-social:hover {
          border-color: rgba(29, 78, 216, 0.18);
          background: rgba(220, 234, 247, 0.72);
          color: #1d4ed8;
        }

        .footer-column h4 {
          margin: 0 0 18px;
          color: var(--footer-text);
          font-size: 0.92rem;
          font-weight: 900;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .footer-links {
          display: grid;
          gap: 12px;
        }

        .footer-link {
          width: fit-content;
          color: var(--footer-muted);
          font-size: 0.98rem;
          line-height: 1.35;
          text-decoration: none;
          transition:
            color 320ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .footer-link:hover {
          color: #1d4ed8;
          transform: translateX(4px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: clamp(64px, 7vw, 96px);
          padding-top: 28px;
          border-top: 1px solid rgba(30, 42, 56, 0.08);
        }

        .footer-bottom p,
        .footer-legal span {
          margin: 0;
          color: var(--footer-soft);
          font-size: 0.88rem;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-legal-link {
          font-size: 0.88rem;
        }

        @keyframes footerGradientDrift {
          from {
            transform: translate3d(-14px, -10px, 0) scale(1);
          }
          to {
            transform: translate3d(18px, 12px, 0) scale(1.05);
          }
        }

        @keyframes footerLineDrift {
          from {
            transform: translate3d(-18px, 0, 0);
          }
          to {
            transform: translate3d(18px, -10px, 0);
          }
        }

        @media (max-width: 1100px) {
          .footer-cta-panel {
            grid-template-columns: 1fr;
            align-items: start;
          }

          .footer-cta-actions {
            justify-content: flex-start;
          }

          .footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .footer-shell {
            padding: 96px 0 72px;
          }

          .footer-cta-panel h2 {
            font-size: clamp(2.35rem, 11vw, 3.35rem);
          }

          .footer-cta-actions,
          .footer-button {
            width: 100%;
          }

          .footer-main {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-brand-column,
          .footer-brand-link,
          .footer-social-row,
          .footer-link {
            margin-inline: auto;
          }

          .footer-bottom,
          .footer-legal {
            justify-content: center;
            text-align: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-gradient,
          .footer-line-art {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}

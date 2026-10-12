"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";
import { calendlyUrl } from "@/lib/vistavise-data";
import BrandLogo from "./BrandLogo";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "BA Catalyst", href: "/insights" },
  { label: "Meet Ajay", href: "/about#meet-ajay" },
  { label: "Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "BA Mastery & Career Mentorship", href: "/services/business-analysis-mentorship" },
  { label: "1:1 Executive Coaching", href: "/services/one-to-one-mentoring" },
  { label: "Interview Mastery", href: "/services/interview-preparation" },
  { label: "Resume & LinkedIn Positioning", href: "/services/resume-building" },
  { label: "Enterprise BA Toolkit", href: "/services/templates-and-resources" },
  { label: "The VistaVise BA Network", href: "/services/ba-community" },
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

const socialLinks = [
  { label: "LinkedIn", href: "https://www.vistavise.com.au/linkedin", icon: LinkedInIcon },
  { label: "YouTube", href: "https://www.youtube.com/@analystperspectives", icon: YouTubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/analystperspectives/", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61581025906735", icon: FacebookIcon },
  { label: "X", href: "https://x.com/Vistavise", icon: XIcon },
];

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
          <span className="footer-cta-glow" aria-hidden="true" />
          <p className="footer-kicker">Book Free Consultation</p>
          <h2>Ready to Build Your Business Analysis Career?</h2>

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
<BrandLogo height={64} className="footer-brand-logo" />
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
            radial-gradient(circle at 18% 8%, rgba(234, 217, 189, 0.46), transparent 31%),
            radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.86), transparent 34%),
            radial-gradient(circle at 62% 92%, rgba(247, 243, 234, 0.78), transparent 30%),
            linear-gradient(180deg, #fbf8f2 0%, #f8f2e8 54%, #f7f3ea 100%);
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
          background: rgba(234, 217, 189, 0.36);
        }

        .footer-gradient-two {
          right: -8%;
          top: 20%;
          width: min(640px, 48vw);
          height: min(640px, 48vw);
          background: rgba(240, 223, 197, 0.46);
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
          position: relative;
          display: grid;
          justify-items: start;
          gap: 0;
          margin-bottom: clamp(72px, 8vw, 104px);
          padding: clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px);
          overflow: hidden;
          border-radius: 36px;
          text-align: left;
          border: 1px solid rgba(234, 217, 189, 0.14);
          background:
            radial-gradient(120% 140% at 0% 0%, #26364a 0%, transparent 55%),
            linear-gradient(135deg, #1b2737 0%, #0f1724 100%);
          box-shadow:
            0 34px 90px rgba(15, 23, 42, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .footer-cta-glow {
          position: absolute;
          inset: -40% 30% auto;
          height: 320px;
          border-radius: 999px;
          display: none;
          background: transparent;
          filter: blur(60px);
          pointer-events: none;
        }

        .footer-kicker {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: rgba(234, 217, 189, 0.58);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .footer-cta-panel h2 {
          position: relative;
          margin: 18px 0 0;
          color: #ffffff;
          font-family: var(--font-heading), sans-serif;
          font-size: var(--fs-feature-title);
          font-weight: var(--heading-weight);
          line-height: var(--heading-line-height);
          letter-spacing: var(--heading-tracking);
          text-wrap: balance;
        }

        @media (min-width: 900px) {
          .footer-cta-panel h2 {
            white-space: nowrap;
          }
        }

        .footer-cta-actions {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 12px;
          margin-top: 30px;
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
          border: 1px solid rgba(234, 217, 189, 0.69);
          background: var(--cream-button);
          color: #102235;
          box-shadow:
            0 18px 46px rgba(15, 23, 42, 0.08),
            0 0 42px rgba(234, 217, 189, 0.21);
        }

        .footer-button-primary:hover {
          background: var(--cream-button-hover);
          box-shadow:
            0 22px 58px rgba(15, 23, 42, 0.12),
            0 0 58px rgba(234, 217, 189, 0.27);
        }

        .footer-button-secondary {
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .footer-button-secondary:hover {
          border-color: rgba(255, 255, 255, 0.34);
          background: rgba(255, 255, 255, 0.14);
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
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

        .footer-brand-logo {
          display: block;
          width: auto;
          height: 64px;
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
          border-color: rgba(138, 106, 63, 0.22);
          background: rgba(234, 217, 189, 0.5);
          color: var(--accent-warm);
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
          color: var(--accent-warm);
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
          .footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .footer-shell {
            padding: 96px 0 72px;
          }

          .footer-cta-panel h2 {
            font-size: var(--fs-feature-title);
          }

          .footer-cta-actions,
          .footer-button {
            width: 100%;
          }

          .footer-main {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .footer-bottom,
          .footer-legal {
            justify-content: flex-start;
            text-align: left;
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

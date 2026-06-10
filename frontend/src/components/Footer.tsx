"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";
import BrandWordmark from "./BrandWordmark";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Insights", href: "/insights" },
  { label: "Podcast", href: "/#podcast" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const focusLinks = [
  { label: "Business Analysis", href: "/insights?category=business-analysis" },
  { label: "Strategic Consulting", href: "/insights?category=strategic-consulting" },
  { label: "Project Delivery", href: "/insights?category=project-delivery" },
  { label: "Student & Migrant Guidance", href: "/#support" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61581025906735", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/analystperspectives/", icon: InstagramIcon },
  { label: "X", href: "https://x.com/Vistavise", icon: XIcon },
  { label: "LinkedIn", href: "https://www.vistavise.com.au/linkedin", icon: LinkedInIcon },
  { label: "YouTube", href: "https://www.youtube.com/@analystperspectives", icon: YouTubeIcon },
];

const logoUrl =
  "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container-custom">
        <div className="footer-panel">
          <span className="footer-background-word" aria-hidden="true">
            VistaVise
          </span>

          <div className="footer-grid">
            <div className="footer-brand-column">
              <Link href="/" className="footer-brand-link">
                <span className="footer-logo">
                  <Image
                    src={logoUrl}
                    alt="VistaVise Consulting logo"
                    fill
                    sizes="42px"
                    unoptimized
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <BrandWordmark mainSize="1.48rem" subSize="0.6rem" />
              </Link>

              <p className="footer-copy">
                Premium consulting for business clarity, project delivery, mentoring, and confident
                Australia transitions.
              </p>

              <Link href="/#contact" className="btn-primary">
                Book a Consultation
              </Link>
            </div>

            <div>
              <h4 className="footer-title">Navigate</h4>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer-title">Focus Areas</h4>
              <div className="footer-links">
                {focusLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer-title">Contact</h4>
              <div className="footer-links">
                <a href="mailto:info@vistavise.com.au" className="footer-link">
                  info@vistavise.com.au
                </a>
                <a href="tel:+61470259366" className="footer-link">
                  +61 470 259 366
                </a>
                <span className="footer-link">Melbourne, Australia</span>
                <a
                  href="https://www.youtube.com/@analystperspectives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link with-icon"
                >
                  <YouTubeIcon size={14} />
                  YouTube
                </a>
                {/* TODO: Replace with the final public Spotify podcast profile URL. */}
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="footer-link with-icon">
                  <SpotifyIcon size={14} />
                  Spotify
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} VistaVise Consulting. All rights reserved.</p>

            <div className="social-row">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="footer-social"
                    title={social.label}
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-shell {
          padding: var(--space-24);
        }

        .footer-panel {
          position: relative;
          overflow: hidden;
          padding: var(--space-40) var(--space-40) var(--space-24);
          border-radius: 40px 40px 30px 30px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: linear-gradient(180deg, rgba(244, 244, 240, 0.98), rgba(236, 238, 237, 0.98));
          box-shadow: var(--shadow-soft);
        }

        .footer-background-word {
          position: absolute;
          top: 12px;
          right: 22px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(4rem, 16vw, 11rem);
          line-height: 0.9;
          letter-spacing: -0.08em;
          color: rgba(17, 18, 20, 0.04);
          pointer-events: none;
        }

        .footer-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) repeat(3, minmax(0, 0.7fr));
          gap: var(--space-40);
        }

        .footer-brand-column {
          display: grid;
          align-content: start;
          gap: var(--space-24);
        }

        .footer-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .footer-logo {
          position: relative;
          width: 42px;
          height: 42px;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          flex-shrink: 0;
        }

        .footer-copy {
          margin: 0;
          max-width: 360px;
          color: var(--text-secondary);
          line-height: 1.84;
          font-size: 0.96rem;
        }

        .footer-title {
          margin: 0 0 14px;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--secondary);
        }

        .footer-links {
          display: grid;
          gap: 10px;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.92rem;
        }

        .with-icon {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: var(--space-40);
          padding-top: var(--space-24);
          border-top: 1px solid rgba(17, 18, 20, 0.08);
        }

        .footer-bottom p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.84rem;
        }

        .social-row {
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
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          color: var(--secondary);
          text-decoration: none;
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .footer-shell {
            padding-inline: 16px;
          }

          .footer-panel {
            padding: var(--space-24);
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

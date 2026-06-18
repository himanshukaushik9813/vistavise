"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BrandWordmark from "./BrandWordmark";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "./icons";
import { siteConfig } from "@/lib/site";
import { calendlyUrl, primaryNavLinks } from "@/lib/vistavise-data";

const logoUrl =
  "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg";

const supportLinks = [
  { label: "Business Analysis Mentorship", href: "/services/business-analysis-mentorship" },
  { label: "Mentoring & Coaching", href: "/services/mentoring-and-coaching" },
  { label: "Migrant Support", href: "/services/migrant-support" },
  { label: "Latest Insights", href: "/insights" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61581025906735", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/analystperspectives/", icon: InstagramIcon },
  { label: "X", href: "https://x.com/Vistavise", icon: XIcon },
  { label: "LinkedIn", href: "https://www.vistavise.com.au/linkedin", icon: LinkedInIcon },
  { label: "YouTube", href: "https://www.youtube.com/@analystperspectives", icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container-custom">
        <div className="footer-panel">
          <div className="footer-grid">
            <div className="footer-brand-column">
              <Link href="/" className="footer-brand-link">
                <span className="footer-logo">
                  <Image
                    src={logoUrl}
                    alt="VistaVise logo"
                    fill
                    sizes="42px"
                    unoptimized
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <BrandWordmark mainSize="1.6rem" subSize="0.6rem" />
              </Link>

              <p className="footer-copy">
                Practical business analysis mentorship, career support, and community-driven guidance for people building their future with more confidence.
              </p>

              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary footer-cta">
                Book a Consultation
              </a>
            </div>

            <div>
              <h4 className="footer-title">Navigate</h4>
              <div className="footer-links">
                {primaryNavLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer-title">Programs</h4>
              <div className="footer-links">
                {supportLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer-title">Contact</h4>
              <div className="footer-links">
                <a href={`mailto:${siteConfig.email}`} className="footer-link">
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="footer-link">
                  {siteConfig.phone}
                </a>
                <span className="footer-link">{siteConfig.location}</span>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
                  Calendly Booking
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} VistaVise. All rights reserved.</p>
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
          padding: 0 0 24px;
        }

        .footer-panel {
          padding: 36px;
          border-radius: 36px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: var(--shadow-panel);
          backdrop-filter: blur(18px);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) repeat(3, minmax(0, 0.7fr));
          gap: 32px;
        }

        .footer-brand-column {
          display: grid;
          gap: 22px;
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
          border: 1px solid rgba(43, 45, 66, 0.1);
        }

        .footer-copy {
          margin: 0;
          max-width: 360px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .footer-title {
          margin: 0 0 14px;
          color: var(--secondary);
          font-size: 1rem;
          font-weight: 800;
        }

        .footer-links {
          display: grid;
          gap: 10px;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 220ms ease;
        }

        .footer-link:hover {
          color: var(--secondary);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(43, 45, 66, 0.08);
        }

        .footer-bottom p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .social-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-social {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.1);
          background: rgba(255, 255, 255, 0.8);
          color: var(--secondary);
        }

        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-panel {
            padding: 28px 22px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

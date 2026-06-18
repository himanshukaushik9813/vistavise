"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandWordmark from "./BrandWordmark";
import { primaryNavLinks, calendlyUrl } from "@/lib/vistavise-data";

const logoUrl =
  "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="nav-wrap"
      >
        <div className="container-custom">
          <div className={`nav-panel ${scrolled ? "is-scrolled" : ""}`}>
            <Link href="/" className="brand-link" onClick={() => setMobileOpen(false)}>
              <span className="brand-mark">
                <Image
                  src={logoUrl}
                  alt="VistaVise logo"
                  fill
                  sizes="44px"
                  priority
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </span>
              <BrandWordmark mainSize="1.46rem" subSize="0.58rem" />
            </Link>

            <div className="nav-center">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${isActiveLink(link.href) ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary nav-cta">
                Book a Consultation
              </a>
              <button
                type="button"
                className="nav-menu-btn"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((value) => !value)}
              >
                <span className={mobileOpen ? "bar open-1" : "bar"} />
                <span className={mobileOpen ? "bar open-2" : "bar"} />
                <span className={mobileOpen ? "bar open-3" : "bar"} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24 }}
            className="mobile-sheet"
          >
            <div className="mobile-sheet-inner surface-card-strong">
              <span className="eyebrow">Navigate</span>
              <div className="mobile-links">
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`mobile-link ${isActiveLink(link.href) ? "is-active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-link-dot" />
                  </Link>
                ))}
              </div>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <style jsx global>{`
        .nav-wrap {
          position: sticky;
          top: 0;
          z-index: 240;
          padding: 18px 0 0;
        }

        .nav-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 14px 18px;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 12px 30px rgba(43, 45, 66, 0.04);
          backdrop-filter: blur(18px);
          transition:
            background 260ms ease,
            border-color 260ms ease,
            box-shadow 260ms ease,
            transform 260ms ease;
        }

        .nav-panel.is-scrolled {
          background: rgba(255, 255, 255, 0.84);
          border-color: rgba(43, 45, 66, 0.12);
          box-shadow: 0 18px 42px rgba(43, 45, 66, 0.08);
          transform: translateY(2px);
        }

        .brand-link {
          min-width: 226px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-mark {
          position: relative;
          width: 44px;
          height: 44px;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid rgba(43, 45, 66, 0.1);
          flex-shrink: 0;
        }

        .nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 26px;
          flex: 1;
        }

        .nav-link {
          position: relative;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          transition:
            color 240ms ease,
            letter-spacing 0.35s var(--ease-premium);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(30, 42, 56, 0.78), rgba(30, 42, 56, 0.28));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 240ms ease;
        }

        .nav-link:hover,
        .nav-link.is-active {
          color: var(--secondary);
          letter-spacing: 0.02em;
        }

        .nav-link:hover::after,
        .nav-link.is-active::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-cta {
          white-space: nowrap;
          padding-inline: 1.3rem;
        }

        .nav-menu-btn {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.12);
          background: rgba(255, 255, 255, 0.78);
        }

        .bar {
          display: block;
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: var(--secondary);
          transition: transform 220ms ease, opacity 220ms ease;
        }

        .nav-menu-btn .bar + .bar {
          margin-top: 4px;
        }

        .open-1 {
          transform: translateY(6px) rotate(45deg);
        }

        .open-2 {
          opacity: 0;
        }

        .open-3 {
          transform: translateY(-6px) rotate(-45deg);
        }

        .mobile-sheet {
          position: fixed;
          inset: 88px 14px auto;
          z-index: 230;
        }

        .mobile-sheet-inner {
          display: grid;
          gap: 18px;
          padding: 24px;
        }

        .mobile-links {
          display: grid;
          gap: 10px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 18px;
          border-radius: 18px;
          text-decoration: none;
          color: var(--secondary);
          background: rgba(255, 255, 255, 0.66);
          border: 1px solid rgba(43, 45, 66, 0.08);
        }

        .mobile-link.is-active {
          border-color: rgba(30, 42, 56, 0.18);
          background: rgba(220, 234, 247, 0.48);
        }

        .mobile-link-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(30, 42, 56, 0.42);
        }

        .mobile-cta {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .nav-center,
          .nav-cta {
            display: none;
          }

          .nav-menu-btn {
            display: inline-flex;
            flex-direction: column;
          }

          .brand-link {
            min-width: 0;
          }
        }
      `}</style>
    </>
  );
}

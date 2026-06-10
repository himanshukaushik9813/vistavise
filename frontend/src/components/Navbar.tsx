"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BrandWordmark from "./BrandWordmark";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Insights", href: "/insights" },
  { label: "Podcast", href: "/#podcast" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const logoUrl =
  "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

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

  return (
    <>
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="nav-wrap"
      >
        <div className="container-custom">
          <div className={`nav-panel ${scrolled ? "is-scrolled" : ""}`}>
            <Link href="/" className="brand-link" onClick={() => setMobileOpen(false)}>
              <span className="brand-mark">
                <Image
                  src={logoUrl}
                  alt="VistaVise Consulting logo"
                  fill
                  sizes="44px"
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </span>
              <BrandWordmark mainSize="1.36rem" subSize="0.58rem" />
            </Link>

            <div className="nav-center">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <Link href="/#contact" className="btn-primary nav-cta">
                Book a Consultation
              </Link>

              <button
                type="button"
                className="nav-menu-btn"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
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
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.26 }}
            className="mobile-sheet"
          >
            <div className="mobile-sheet-inner">
              <span className="eyebrow">Navigate</span>
              <div className="mobile-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-link-dot" />
                  </Link>
                ))}
              </div>
              <Link href="/#contact" className="btn-primary mobile-cta" onClick={() => setMobileOpen(false)}>
                Book a Consultation
              </Link>
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
          padding: 13px 18px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.06);
          background: rgba(248, 248, 245, 0.88);
          box-shadow: 0 14px 32px rgba(17, 18, 20, 0.04);
          transition:
            background 260ms ease,
            border-color 260ms ease,
            box-shadow 260ms ease;
        }

        .is-scrolled {
          border-color: rgba(17, 18, 20, 0.08);
          background: rgba(248, 248, 245, 0.96);
          box-shadow: 0 18px 36px rgba(17, 18, 20, 0.06);
        }

        .brand-link {
          min-width: 220px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-mark {
          position: relative;
          width: 40px;
          height: 40px;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          flex-shrink: 0;
        }

        .nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex: 1;
          max-width: 520px;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 240ms ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 1px;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.7);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 240ms ease;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-cta {
          white-space: nowrap;
          padding-inline: 18px;
        }

        .nav-menu-btn {
          width: 46px;
          height: 46px;
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.1);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 12px 24px rgba(17, 18, 20, 0.05);
        }

        .bar {
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: var(--secondary);
          transition: transform 220ms ease, opacity 220ms ease;
        }

        .open-1 {
          transform: translateY(7px) rotate(45deg);
        }

        .open-2 {
          opacity: 0;
        }

        .open-3 {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-sheet {
          position: fixed;
          inset: 90px 16px auto;
          z-index: 230;
        }

        .mobile-sheet-inner {
          padding: 26px;
          border-radius: 30px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(248, 248, 245, 0.98);
          box-shadow: var(--shadow-panel);
        }

        .mobile-links {
          display: grid;
          gap: 6px;
          margin-top: 22px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(17, 18, 20, 0.08);
          color: var(--text-primary);
          text-decoration: none;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: -0.03em;
        }

        .mobile-link-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.08);
          border: 1px solid rgba(17, 18, 20, 0.12);
          flex-shrink: 0;
        }

        .mobile-cta {
          width: 100%;
          margin-top: 20px;
        }

        @media (max-width: 1080px) {
          .nav-center,
          .nav-cta {
            display: none;
          }

          .brand-link {
            min-width: auto;
          }

          .nav-menu-btn {
            display: inline-flex;
          }
        }

        @media (max-width: 640px) {
          .nav-panel {
            padding: 12px 14px;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { primaryNavLinks, calendlyUrl } from "@/lib/vistavise-data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Compact mode: while scrolling down the page, the full bar folds into a small
  // "V" menu chip (left) and a compact booking button (right) so it stops covering content.
  const [compact, setCompact] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y < 140) {
        setCompact(false);
      } else if (y > lastY.current + 8) {
        setCompact(true);
      } else if (y < lastY.current - 8) {
        setCompact(false);
      }
      if (Math.abs(y - lastY.current) > 8 || y < 140) lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    // Lock scrolling on <html>, not <body>: making <body> a scroll container breaks the sticky navbar.
    const root = document.documentElement;
    root.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      root.style.overflow = "";
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
        className={`nav-wrap ${compact ? "is-compact" : ""}`}
      >
        <div className="container-custom">
          <div
            className={["nav-panel", scrolled ? "is-scrolled" : "", compact ? "is-compact" : "", mobileOpen ? "is-menu-open" : ""]
              .filter(Boolean)
              .join(" ")}
          >
            <button
              type="button"
              className="nav-compact-chip"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
            >
              <BrandLogo variant="icon" height={34} className="nav-compact-icon" />
              <span className="nav-compact-bars" aria-hidden="true">
                <span className={mobileOpen ? "bar open-1" : "bar"} />
                <span className={mobileOpen ? "bar open-2" : "bar"} />
                <span className={mobileOpen ? "bar open-3" : "bar"} />
              </span>
            </button>

            <Link href="/" className="brand-link" onClick={() => setMobileOpen(false)}>
              <BrandLogo height={52} priority className="nav-brand-logo" />
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
                <span className="nav-cta-full">Book Free Consultation</span>
                <span className="nav-cta-short">Book a Call</span>
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
                Book Free Consultation
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
          height: 100px;
          padding: 18px 0 0;
          /* Space between the content column and the screen edge; compact pieces move out into it */
          --nav-gutter: calc((100vw - min(calc(100vw - 40px), var(--container-max))) / 2);
          --nav-corner-shift: max(0px, calc(var(--nav-gutter) - 24px));
          /* Fixed height: the compact state never shifts the page. Empty areas let clicks through. */
          pointer-events: none;
        }

        .nav-wrap .container-custom {
          pointer-events: none;
        }

        /* Soft blur at the top edge while folded, so content melts away behind the floating buttons
           instead of meeting them with a hard edge. Works on both dark and light sections. */
        .nav-wrap::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 96px;
          pointer-events: none;
          backdrop-filter: blur(10px);
          mask-image: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.75) 45%, transparent 100%);
          opacity: 0;
          transition: opacity 420ms var(--ease-premium, ease);
        }

        .nav-wrap.is-compact::before {
          opacity: 1;
        }

        .nav-panel {
          position: relative;
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 14px 18px;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 18px 48px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(22px) saturate(1.08);
          transition:
            background 420ms var(--ease-premium, ease),
            border-color 420ms var(--ease-premium, ease),
            box-shadow 420ms var(--ease-premium, ease),
            backdrop-filter 420ms var(--ease-premium, ease),
            transform 420ms var(--ease-premium, ease);
        }

        .brand-link,
        .nav-center,
        .nav-menu-btn {
          transition:
            opacity 320ms var(--ease-premium, ease),
            transform 420ms var(--ease-premium, ease),
            visibility 0s linear 0s;
        }

        .nav-actions {
          transition: transform 420ms var(--ease-premium, ease);
        }

        /* ---------- Compact (scrolling down) ---------- */
        .nav-compact-chip {
          position: absolute;
          left: 0;
          top: 50%;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 56px;
          padding: 0 16px 0 10px;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.1);
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
          backdrop-filter: blur(22px) saturate(1.08);
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateX(calc(-1 * var(--nav-corner-shift))) translateY(-50%) scale(0.86);
          transform-origin: left center;
          transition:
            opacity 320ms var(--ease-premium, ease),
            transform 420ms var(--ease-premium, ease),
            box-shadow 240ms ease,
            visibility 0s linear 420ms;
        }

        .nav-compact-chip:hover {
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.22);
        }

        .nav-compact-chip:focus-visible {
          outline: 2px solid #286bcb;
          outline-offset: 3px;
        }

        .nav-compact-icon {
          display: block;
          width: 34px;
          height: 34px;
        }

        .nav-compact-bars {
          display: inline-flex;
          flex-direction: column;
          padding-left: 10px;
          border-left: 1px solid rgba(43, 45, 66, 0.14);
        }

        .nav-compact-bars .bar + .bar {
          margin-top: 4px;
        }

        .nav-cta-short {
          display: none;
        }

        .nav-wrap .nav-panel.is-compact {
          background: transparent;
          border-color: transparent;
          box-shadow: none;
          backdrop-filter: none;
          transform: translateY(-14px);
          pointer-events: none;
        }

        .nav-panel.is-compact .brand-link,
        .nav-panel.is-compact .nav-center,
        .nav-panel.is-compact .nav-menu-btn {
          opacity: 0;
          visibility: hidden;
          transform: scale(0.96);
          transition:
            opacity 260ms var(--ease-premium, ease),
            transform 420ms var(--ease-premium, ease),
            visibility 0s linear 260ms;
        }

        .nav-panel.is-compact .nav-compact-chip {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(calc(-1 * var(--nav-corner-shift))) translateY(-50%) scale(1);
          transition:
            opacity 320ms var(--ease-premium, ease) 80ms,
            transform 420ms var(--ease-premium, ease) 40ms,
            box-shadow 240ms ease,
            visibility 0s linear 0s;
        }

        .nav-panel.is-compact .nav-actions {
          pointer-events: auto;
          transform: translateX(calc(18px + var(--nav-corner-shift)));
        }

        .nav-panel.is-compact .nav-cta {
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);
        }

        .nav-panel.is-scrolled {
          background: rgba(255, 255, 255, 0.94);
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

        .nav-brand-logo {
          display: block;
          width: auto;
          height: 52px;
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

        /* On desktop the menu only opens from the compact V chip, so show it as a small panel under the chip */
        @media (min-width: 1025px) {
          .mobile-sheet {
            top: 84px;
            right: auto;
            left: min(24px, calc((100vw - min(100vw - 40px, var(--container-max))) / 2));
            width: 340px;
          }
        }

        .mobile-sheet-inner {
          display: grid;
          gap: 18px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(24px) saturate(1.1);
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.22);
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
          background: rgba(234, 217, 189, 0.36);
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

          /* Compact on tablet/phone: V chip on the left, short booking button on the right */
          .nav-panel.is-compact .nav-menu-btn {
            display: none;
          }

          .nav-panel.is-compact .nav-cta {
            display: inline-flex;
          }

          .nav-panel.is-compact .nav-cta-full {
            display: none;
          }

          .nav-panel.is-compact .nav-cta-short {
            display: inline;
          }
        }

        @media (max-width: 640px) {
          .nav-wrap {
            height: 92px;
          }

          .nav-brand-logo {
            height: 44px;
          }

          .nav-compact-chip {
            height: 50px;
          }

          .nav-panel.is-compact .nav-cta {
            min-height: 46px;
            padding-inline: 1.05rem;
            font-size: 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-panel,
          .brand-link,
          .nav-center,
          .nav-menu-btn,
          .nav-actions,
          .nav-compact-chip {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

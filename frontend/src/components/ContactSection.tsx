"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";
import BrandWordmark from "./BrandWordmark";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581025906735",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/analystperspectives/",
    icon: InstagramIcon,
  },
  { label: "X", href: "https://x.com/Vistavise", icon: XIcon },
  {
    label: "LinkedIn",
    href: "https://www.vistavise.com.au/linkedin",
    icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@analystperspectives",
    icon: YouTubeIcon,
  },
];

const logoUrl =
  "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const resetTimerRef = useRef<number | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    setSubmitState("submitting");
    setSubmitError("");
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 9000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", message: "" });
      resetTimerRef.current = window.setTimeout(() => setSubmitState("idle"), 3000);
    } catch {
      setSubmitState("error");
      setSubmitError("Could not send your message. Please try again.");
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <section ref={ref} id="contact" className="section-padding contact-section">
      <div className="container-custom">
        <div className="contact-shell">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.58 }}
            className="contact-copy"
          >
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s plan the next confident move."
              subtitle="Whether you need strategic consulting, project clarity, mentoring, or guidance through an Australia transition, VistaVise is designed to be a thoughtful starting point."
              align="left"
              maxWidth={620}
            />

            <div className="contact-brand-card">
              <div className="contact-brand-row">
                <span className="contact-logo-wrap">
                  <Image
                    src={logoUrl}
                    alt="VistaVise Consulting logo"
                    fill
                    sizes="60px"
                    unoptimized
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <div>
                  <BrandWordmark mainSize="1.24rem" subSize="0.56rem" />
                  <p className="contact-role">Strategic consulting with a human-centered approach</p>
                </div>
              </div>

              <div className="contact-meta-list">
                <a href="tel:+61470259366" className="contact-meta-item">
                  <PhoneIcon size={16} />
                  +61 470 259 366
                </a>
                <a href="mailto:info@vistavise.com.au" className="contact-meta-item">
                  <MailIcon size={16} />
                  info@vistavise.com.au
                </a>
                <span className="contact-meta-item">
                  <MapPinIcon size={16} />
                  Melbourne, Australia
                </span>
              </div>
            </div>

            <div className="contact-note-card">
              <span className="contact-note-kicker">What to expect</span>
              <p>
                Reach out with your goals, current challenge, or the transition you are navigating.
                VistaVise will respond with a thoughtful next step rather than a generic reply.
              </p>
            </div>

            {/* TODO: Replace with the final VistaVise booking link once confirmed. */}
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <CalendarIcon size={16} />
              Book a Consultation
            </a>

            <div className="social-row">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="social-link"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 46 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.62, delay: 0.08 }}
            className="contact-form-card"
          >
            <div className="form-header">
              <p className="form-kicker">Send a message</p>
              <h3>Tell us what you&apos;re planning or working through.</h3>
            </div>

            <label className="field-label" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={120}
              className="field-input"
              placeholder="Your name"
            />

            <label className="field-label" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              maxLength={254}
              className="field-input"
              placeholder="your@email.com"
            />

            <label className="field-label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              maxLength={4000}
              rows={6}
              className="field-input field-textarea"
              placeholder="Share a few details about your business, project, career question, or transition plans..."
            />

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="btn-primary form-submit"
              disabled={submitState === "submitting"}
            >
              {submitState === "submitting" ? (
                "Sending..."
              ) : submitState === "success" ? (
                <>
                  <CheckCircleIcon size={16} />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRightIcon size={16} />
                </>
              )}
            </motion.button>

            <div aria-live="polite" className="form-status">
              {submitState === "success" ? (
                <p className="success-text">Thanks. Your message has been sent successfully.</p>
              ) : null}
              {submitState === "error" ? <p className="error-text">{submitError}</p> : null}
            </div>
          </motion.form>
        </div>
      </div>

      <style jsx global>{`
        .contact-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: var(--space-40);
          align-items: start;
        }

        .contact-copy {
          display: grid;
          gap: var(--space-24);
        }

        .contact-brand-card,
        .contact-note-card,
        .contact-form-card {
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.84);
          box-shadow: var(--shadow-soft);
        }

        .contact-brand-card {
          padding: 24px;
        }

        .contact-brand-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .contact-logo-wrap {
          position: relative;
          width: 60px;
          height: 60px;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          flex-shrink: 0;
        }

        .contact-role {
          margin: 8px 0 0;
          color: var(--text-secondary);
          font-size: 0.88rem;
        }

        .contact-meta-list {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .contact-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
        }

        .contact-meta-item svg {
          color: var(--text-primary);
        }

        .contact-note-card {
          padding: 22px 24px;
        }

        .contact-note-kicker,
        .form-kicker {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .contact-note-card p {
          margin: 12px 0 0;
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 0.96rem;
        }

        .social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .social-link {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          color: var(--secondary);
          text-decoration: none;
          box-shadow: 0 12px 22px rgba(17, 18, 20, 0.05);
        }

        .contact-form-card {
          padding: var(--space-40);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-header h3 {
          margin: 14px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1;
          letter-spacing: -0.05em;
          color: var(--secondary);
        }

        .field-label {
          margin-top: 8px;
          color: var(--text-secondary);
          font-size: 0.88rem;
          font-weight: 600;
        }

        .field-input {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(17, 18, 20, 0.12);
          background: rgba(255, 255, 255, 0.84);
          padding: 14px 16px;
          outline: none;
          color: var(--text-primary);
          font-size: 0.96rem;
          transition:
            border-color 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
        }

        .field-input:focus {
          border-color: rgba(17, 18, 20, 0.18);
          box-shadow: 0 0 0 4px rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.96);
        }

        .field-textarea {
          resize: vertical;
          min-height: var(--space-128);
        }

        .form-submit {
          width: 100%;
          margin-top: 12px;
        }

        .form-status {
          min-height: 24px;
        }

        .success-text,
        .error-text {
          margin: 8px 0 0;
          font-size: 0.88rem;
        }

        .success-text {
          color: #0f766e;
        }

        .error-text {
          color: #dc2626;
        }

        @media (max-width: 1024px) {
          .contact-shell {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form-card {
            padding: var(--space-24);
          }
        }
      `}</style>
    </section>
  );
}

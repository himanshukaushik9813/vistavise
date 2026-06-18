"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import BrandWordmark from "./BrandWordmark";
import {
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
import { siteConfig } from "@/lib/site";
import { calendlyUrl } from "@/lib/vistavise-data";

const logoUrl =
  "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg";

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

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const resetTimerRef = useRef<number | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    setSubmitState("submitting");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", message: "" });
      resetTimerRef.current = window.setTimeout(() => setSubmitState("idle"), 3200);
    } catch {
      setSubmitState("error");
      setSubmitError("Could not send your message. Please try again.");
    }
  };

  return (
    <section ref={ref} className="section-padding contact-section">
      <div className="container-custom contact-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="contact-copy"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about the next confident move."
            subtitle="Reach out for business analysis mentorship, career development, student guidance, or migrant support. We’ll keep the conversation practical and useful."
            align="left"
            maxWidth={620}
          />

          <div className="contact-brand-card surface-card-strong">
            <div className="contact-brand-row">
              <span className="contact-logo-wrap">
                <Image
                  src={logoUrl}
                  alt="VistaVise logo"
                  fill
                  sizes="60px"
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </span>
              <div>
                <BrandWordmark mainSize="1.26rem" subSize="0.56rem" />
                <p className="contact-role">Mentorship, guidance, and community-driven support in Melbourne</p>
              </div>
            </div>

            <div className="contact-meta-list">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="contact-meta-item">
                <PhoneIcon size={16} />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="contact-meta-item">
                <MailIcon size={16} />
                {siteConfig.email}
              </a>
              <span className="contact-meta-item">
                <MapPinIcon size={16} />
                {siteConfig.location}
              </span>
            </div>

            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary contact-booking-link">
              <CalendarIcon size={16} />
              Book a Consultation
            </a>
          </div>

          <div className="social-row contact-social-row">
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
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          onSubmit={handleSubmit}
          className="contact-form-card surface-card-strong"
        >
          <div className="form-header">
            <p className="eyebrow">Send a message</p>
            <h3>Share what you’re planning or working through.</h3>
          </div>

          <label className="field-label" htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            maxLength={120}
            className="field-input"
            placeholder="Your name"
            required
          />

          <label className="field-label" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            maxLength={254}
            className="field-input"
            placeholder="you@example.com"
            required
          />

          <label className="field-label" htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            value={formData.message}
            onChange={(event) => setFormData({ ...formData, message: event.target.value })}
            maxLength={4000}
            rows={6}
            className="field-input field-textarea"
            placeholder="Tell us about your goals, challenge, or the support you're looking for."
            required
          />

          <button type="submit" className="btn-primary form-submit" disabled={submitState === "submitting"}>
            {submitState === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {submitState === "success" ? (
            <p className="form-status success">
              <CheckCircleIcon size={16} />
              Your message has been sent.
            </p>
          ) : null}

          {submitState === "error" ? <p className="form-status error">{submitError}</p> : null}
        </motion.form>
      </div>

      <style jsx global>{`
        .contact-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.48fr) minmax(340px, 0.52fr);
          gap: 26px;
          align-items: start;
        }

        .contact-brand-card,
        .contact-form-card {
          padding: 26px;
          border-radius: 28px;
        }

        .contact-brand-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .contact-logo-wrap {
          position: relative;
          width: 58px;
          height: 58px;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(43, 45, 66, 0.1);
          flex-shrink: 0;
        }

        .contact-role {
          margin: 10px 0 0;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.7;
        }

        .contact-meta-list {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .contact-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .contact-booking-link {
          margin-top: 24px;
          width: fit-content;
        }

        .contact-social-row {
          margin-top: 18px;
        }

        .social-link {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.1);
          background: rgba(255, 255, 255, 0.76);
          color: var(--secondary);
          text-decoration: none;
        }

        .form-header h3 {
          margin: 18px 0 0;
          color: var(--secondary);
          font-size: 1.5rem;
          letter-spacing: -0.04em;
        }

        .field-label {
          display: block;
          margin-top: 18px;
          margin-bottom: 10px;
          color: var(--secondary);
          font-size: 0.88rem;
          font-weight: 700;
        }

        .field-input {
          min-height: 52px;
          padding: 0 16px;
          border-radius: 18px;
        }

        .field-textarea {
          min-height: 160px;
          padding: 16px;
          resize: vertical;
        }

        .form-submit {
          margin-top: 20px;
          width: fit-content;
        }

        .form-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 16px 0 0;
          color: var(--text-secondary);
        }

        .form-status.success {
          color: #2f6f49;
        }

        .form-status.error {
          color: #a04237;
        }

        @media (max-width: 1024px) {
          .contact-shell {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

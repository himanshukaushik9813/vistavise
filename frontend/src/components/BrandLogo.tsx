import Image from "next/image";

/** Source SVGs live in /public/brand (transparent background). */
const LOGO = { src: "/brand/vistavise-logo.svg", ratio: 824 / 230 };
const ICON = { src: "/brand/vistavise-icon.svg", ratio: 1 };

type BrandLogoProps = {
  /** Rendered height in px. Width follows the logo's aspect ratio. */
  height?: number;
  variant?: "full" | "icon";
  priority?: boolean;
  className?: string;
};

/**
 * The official VistaVise Consulting logo: blue "V" symbol with orbital swoosh,
 * "VistaVise" wordmark and "CONSULTING" subtitle.
 */
export default function BrandLogo({ height = 52, variant = "full", priority = false, className }: BrandLogoProps) {
  const asset = variant === "full" ? LOGO : ICON;

  return (
    <Image
      src={asset.src}
      alt="VistaVise Consulting"
      width={Math.round(height * asset.ratio)}
      height={height}
      priority={priority}
      unoptimized
      className={["brand-logo", className].filter(Boolean).join(" ")}
      draggable={false}
    />
  );
}

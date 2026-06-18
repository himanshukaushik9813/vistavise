"use client";

import Image from "next/image";

export const OWNER_IMAGE_URL =
  "https://i.postimg.cc/VvDdYWh3/IMG-20260308-WA0000.jpg";

type OwnerPortraitProps = {
  alt: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
  rounded?: string;
};

export default function OwnerPortrait({
  alt,
  sizes,
  priority = false,
  objectPosition = "center 20%",
  rounded = "32px",
}: OwnerPortraitProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: rounded,
        background:
          "linear-gradient(160deg, rgba(245, 239, 233, 0.98), rgba(236, 229, 222, 0.94))",
      }}
    >
      <Image
        src={OWNER_IMAGE_URL}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={92}
        unoptimized
        style={{
          objectFit: "cover",
          objectPosition,
        }}
      />
    </div>
  );
}

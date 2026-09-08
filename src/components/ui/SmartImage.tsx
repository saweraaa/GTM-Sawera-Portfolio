"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SmartImage({
  className,
  wrapperClassName,
  alt,
  ...props
}: ImageProps & { wrapperClassName?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center border border-gold/35 bg-linen",
          wrapperClassName,
          className
        )}
        role="img"
        aria-label={alt}
      >
        <span className="type-label text-gold">Image pending</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

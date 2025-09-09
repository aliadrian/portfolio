"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  className?: string; // styling for the inline (thumbnail) image
  fullClassName?: string; // styling for the full image in overlay
};

export default function LightboxImage({
  src,
  alt = "",
  caption,
  className = "cursor-zoom-in rounded-lg shadow",
  fullClassName = "max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl",
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Avoid SSR portal mismatch
  useEffect(() => setMounted(true), []);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      {/* Inline/thumbnail */}
      {/* Use a normal <img> so you don’t need next.config domain rules */}
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setOpen(true)}
      />

      {/* Overlay */}
      {mounted &&
        open &&
        createPortal(
          <div
            ref={dialogRef}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-[1px]"
            onClick={() => setOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="group relative inline-block"
              onClick={(e) => e.stopPropagation()} // keep clicks on image from closing
            >
              <img src={src} alt={alt} className={fullClassName} />
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute right-0 top-0 cursor-pointer rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-950 shadow hover:bg-white"
              >
                ✕
              </button>

              {caption && (
                <div className="mt-2 text-center text-sm text-white/90">
                  {caption}
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

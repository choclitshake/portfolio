"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectCarousel({ images, title }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#1a2035] select-none">
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          onError={(e) => {
            // fallback to placeholder if image not found
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Placeholder overlay shown when no real image
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-mono text-sm"
            style={{ color: "#8D99AE" }}
          >
            carousel placeholder {current + 1} / {images.length}
          </span>
        </div> */}
      </div>

      {/* Controls — only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(43,45,66,0.85)", color: "#EDF2F4", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(43,45,66,0.85)", color: "#EDF2F4", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Next"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  background: i === current ? "#FFCC00" : "#8D99AE",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

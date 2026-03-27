"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#2B2D42", minHeight: 480 }}
    >
      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(141,153,174,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 flex items-end justify-between"
        style={{ minHeight: 480 }}>

        {/* Text */}
        <div className="pb-16 pt-20 flex flex-col gap-4 z-10">
          {/* Eyebrow */}
          <span
            className="font-mono text-sm tracking-widest uppercase"
            style={{ color: "#8D99AE" }}
          >
            Portfolio
          </span>

          {/* Name */}
          <h1
            className="font-extrabold leading-[1.05]"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#EDF2F4" }}
          >
            <span style={{ color: "#FFCC00", display: "block", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Borromeo,
            </span>
            <span style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", display: "block" }}>
              Mary Avriel Rainne
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-mono text-base"
            style={{ color: "#8D99AE" }}
          >
            BS in Computer Science | Student
          </p>

          {/* CTA row */}
          <div className="flex gap-3 mt-4 flex-wrap">
            <Link
              href="https://github.com/choclitshake"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: "#FFCC00",
                color: "#2B2D42",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              GitHub ↗
            </Link>
            <Link
              href="https://www.linkedin.com/in/rainneborromeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: "transparent",
                color: "#EDF2F4",
                border: "1.5px solid rgba(237,242,244,0.3)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              LinkedIn ↗
            </Link>
          </div>
        </div>

        {/* Photo — right side, cropped at bottom, no frame */}
        <div
          className="absolute right-0 bottom-0 hidden md:block"
          style={{ width: "clamp(260px, 30vw, 380px)", height: "clamp(320px, 38vw, 460px)" }}
        >
          <Image
            src="/rainne.png"
            alt="Mary Avriel Rainne Borromeo"
            fill
            className="object-cover object-top"
            style={{ objectPosition: "top center" }}
            priority
          />
          {/* Gradient fade at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #2B2D42)" }}
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";
import TechBadge from "./TechBadge";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="rounded-3xl overflow-hidden flex flex-col"
      style={{ background: "#EDF2F4" }}
    >
      {/* Carousel */}
      <div className="p-4 pb-0">
        <ProjectCarousel images={project.images} title={project.title} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Title + description */}
        <div className="border-b pb-3" style={{ borderColor: "rgba(43,45,66,0.15)" }}>
          <h3
            className="font-extrabold text-xl leading-tight mb-1"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#E91664" }}
          >
            {project.emoji} {project.title}
          </h3>
          <p
            className="font-mono text-sm leading-relaxed"
            style={{ color: "#2B2D42" }}
          >
            {project.longDescription}
          </p>
        </div>

        {/* Tech stack row */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadgeLight key={tech.name} name={tech.name} />
          ))}
        </div>

        {/* View button
        <div className="flex justify-end mt-auto pt-1">
          <Link
            href={project.link}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "#E91664",
              color: "#EDF2F4",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            View
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.25)", fontSize: 13 }}
            >
              →
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

// Light variant of TechBadge for the card (dark text on light bg)
function TechBadgeLight({ name }: { name: string }) {
  const ICON_MAP: Record<string, { devicon?: string; label: string }> = {
    "Next.js":        { devicon: "nextjs",        label: "Next.js" },
    "React":          { devicon: "react",          label: "React" },
    "TypeScript":     { devicon: "typescript",     label: "TypeScript" },
    "Tailwind CSS":   { devicon: "tailwindcss",    label: "Tailwind" },
    "Supabase":       { devicon: "supabase",       label: "Supabase" },
    "Vercel":         {                             label: "Vercel" },
    "Render":         {                             label: "Render" },
    "Java":           { devicon: "java",           label: "Java" },
    "JavaFX":         {                             label: "JavaFX" },
    "FXGL":           {                             label: "FXGL" },
    "MySQL":          { devicon: "mysql",           label: "MySQL" },
    "HikariCP":       {                             label: "HikariCP" },
    "Kotlin":         { devicon: "kotlin",          label: "Kotlin" },
    "Room DB":        {                             label: "Room" },
    "ViewModel":      {                             label: "ViewModel" },
    "LiveData":       {                             label: "LiveData" },
    "Android Studio": { devicon: "androidstudio",  label: "Android" },
    "Java Swing":     {                             label: "Swing" },
    "Java AWT":       {                             label: "AWT" },
    "GDScript":       {                             label: "GDScript" },
    "Godot":          { devicon: "godot",           label: "Godot" },
    "HTML5":          { devicon: "html5",           label: "HTML5" },
    "Python":         { devicon: "python",          label: "Python" },
    "C#":             { devicon: "csharp",          label: "C#" },
    "JavaScript":     { devicon: "javascript",      label: "JS" },
  };

  const info = ICON_MAP[name] ?? { label: name };

  return (
    <div
      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-mono"
      style={{ background: "rgba(43,45,66,0.08)", color: "#2B2D42", border: "1px solid rgba(43,45,66,0.15)" }}
    >
      {info.devicon && (
        <i
          className={`devicon-${info.devicon}-plain colored`}
          style={{ fontSize: 13, lineHeight: 1 }}
        />
      )}
      {info.label}
    </div>
  );
}

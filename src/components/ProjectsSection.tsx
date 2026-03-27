"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full"
      style={{ background: "#EDF2F4" }}
    >
      {/* Rounded top corners — the white wave from the design */}
      <div
        className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: "#2B2D42", borderRadius: "0 0 2.5rem 2.5rem", zIndex: 0 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-24">
        {/* Section heading */}
        <h2
          className="text-center font-extrabold mb-12"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#2B2D42",
            marginTop: 25,
          }}
        >
          Projects
        </h2>

        {/* Grid — 2 columns on md+, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

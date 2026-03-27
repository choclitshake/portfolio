"use client";

// Maps tech names to devicon class names or simple abbreviations
const ICON_MAP: Record<string, { devicon?: string; label: string; color: string }> = {
  "Next.js":        { devicon: "nextjs",        label: "Next.js",        color: "#000000" },
  "React":          { devicon: "react",          label: "React",          color: "#61DAFB" },
  "TypeScript":     { devicon: "typescript",     label: "TS",             color: "#3178C6" },
  "Tailwind CSS":   { devicon: "tailwindcss",    label: "Tailwind",       color: "#38BDF8" },
  "Supabase":       { devicon: "supabase",       label: "Supabase",       color: "#3ECF8E" },
  "Vercel":         { label: "Vercel",           color: "#000000" },
  "Render":         { label: "Render",           color: "#46E3B7" },
  "Java":           { devicon: "java",           label: "Java",           color: "#ED8B00" },
  "JavaFX":         { label: "JavaFX",           color: "#ED8B00" },
  "FXGL":           { label: "FXGL",             color: "#ED8B00" },
  "MySQL":          { devicon: "mysql",          label: "MySQL",          color: "#4479A1" },
  "HikariCP":       { label: "HikariCP",         color: "#0A0A0A" },
  "Kotlin":         { devicon: "kotlin",         label: "Kotlin",         color: "#7F52FF" },
  "Room DB":        { label: "Room",             color: "#3DDC84" },
  "ViewModel":      { label: "ViewModel",        color: "#3DDC84" },
  "LiveData":       { label: "LiveData",         color: "#3DDC84" },
  "Android Studio": { devicon: "androidstudio",  label: "Android",        color: "#3DDC84" },
  "Java Swing":     { label: "Swing",            color: "#ED8B00" },
  "Java AWT":       { label: "AWT",              color: "#ED8B00" },
  "GDScript":       { label: "GDScript",         color: "#478CBF" },
  "Godot":          { devicon: "godot",          label: "Godot",          color: "#478CBF" },
  "HTML5":          { devicon: "html5",          label: "HTML5",          color: "#E34F26" },
  "Python":         { devicon: "python",         label: "Python",         color: "#3776AB" },
  "C#":             { devicon: "csharp",         label: "C#",             color: "#239120" },
  "JavaScript":     { devicon: "javascript",     label: "JS",             color: "#F7DF1E" },
};

type Props = {
  name: string;
  size?: "sm" | "md";
};

export default function TechBadge({ name, size = "md" }: Props) {
  const info = ICON_MAP[name] ?? { label: name, color: "#8D99AE" };
  const isSm = size === "sm";

  return (
    <div
      className={`flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm font-mono ${
        isSm ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]"
      }`}
    >
      {info.devicon ? (
        <i
          className={`devicon-${info.devicon}-plain colored`}
          style={{ fontSize: isSm ? 13 : 16, lineHeight: 1 }}
        />
      ) : (
        <span
          style={{
            width: isSm ? 10 : 12,
            height: isSm ? 10 : 12,
            borderRadius: "50%",
            background: info.color,
            display: "inline-block",
            flexShrink: 0,
          }}
        />
      )}
      <span style={{ color: "#EDF2F4" }}>{info.label}</span>
    </div>
  );
}

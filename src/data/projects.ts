export type Project = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  longDescription: string;
  techStack: TechItem[];
  images: string[]; // paths to images in /public/projects/[id]/
  link: string;
  githubLink?: string;
  featured?: boolean;
};

export type TechItem = {
  name: string;
  icon: string; // devicon class or simple label
};

export const projects: Project[] = [
  {
    id: "presyoani",
    title: "PresyoAni",
    emoji: "🌾",
    description: "Harvest pricing & verification assistant for rural Filipino farmers.",
    longDescription:
      "An offline-first Progressive Web App (PWA) that empowers smallholder farmers with crop grading, fair price benchmarks, and direct buyer connection — even with no network coverage. Top 15 at Innovation Cup Cebu 2026 (AWS Cloud Clubs Philippines).",
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Supabase", icon: "supabase" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
    ],
    images: [
      "/projects/presyoani/1.png",
      "/projects/presyoani/2.png",
      "/projects/presyoani/3.png",
      "/projects/presyoani/4.png",
      "/projects/presyoani/5.png",
    ],
    link: "#",
    githubLink: "https://github.com/moisturiizer/presyoani",
    featured: true,
  },
  {
    id: "joe-and-marie",
    title: "The Adventures of Joe and Marie",
    emoji: "🎮",
    description: "Cooperative 2D platformer. Two characters, one rope, full chaos.",
    longDescription:
      "Inspired by Bread & Fred, Joe and Marie are tethered together and must navigate levels as a duo. Built with MVVM architecture, multithreaded database ops via HikariCP, and multiple design patterns. Contributed a bug fix back to the FXGL open-source library.",
    techStack: [
      { name: "Java", icon: "java" },
      { name: "JavaFX", icon: "javafx" },
      { name: "FXGL", icon: "fxgl" },
      { name: "MySQL", icon: "mysql" },
      { name: "HikariCP", icon: "hikaricp" },
    ],
    images: [
      "/projects/joe-and-marie/1.png",
      "/projects/joe-and-marie/2.png",
      "/projects/joe-and-marie/3.png",
      "/projects/joe-and-marie/4.png",
    ],
    link: "#",
    featured: true,
  },
  {
    id: "sleepsync",
    title: "SleepSync",
    emoji: "😴",
    description: "Android sleep tracker and dream journal. All data stays local.",
    longDescription:
      "A no-fuss sleep tracker where you start a timer when you sleep and stop it when you wake up. Logs sessions, shows daily sleep totals, and lets you journal dreams. All data stored locally with Room (SQLite). Simple by design.",
    techStack: [
      { name: "Kotlin", icon: "kotlin" },
      { name: "Android Studio", icon: "android" },
      { name: "Room DB", icon: "room" },
      { name: "ViewModel", icon: "viewmodel" },
      { name: "LiveData", icon: "livedata" },
    ],
    images: [
      "/projects/sleepsync/1.png",
      "/projects/sleepsync/2.png",
    ],
    link: "#",
    featured: true,
  },
  {
    id: "wildeats",
    title: "WildEats",
    emoji: "🦁",
    description: "One-button shapeshifting infinite side-scroller. Built for a game jam.",
    longDescription:
      "A mobile ordering app prototype designed for CIT-U’s canteen, featuring an AI chatbot that recommends food choices and combos tailored to users’ dietary needs and budgets. Integrates human-computer interaction principles and foundational technopreneurship concepts to create a user-centered and market-aware solution.",
    techStack: [
      { name: "Figma", icon: "figma" },
    ],
    images: [
      "/projects/wildeats/1.png",
      "/projects/wildeats/2.png",
      "/projects/wildeats/3.png",
    ],
    link: "#",
  },
  {
    id: "unbeatable-td",
    title: "UnbeatableTD",
    emoji: "🏰",
    description: "Tower defense with an elemental fusion mechanic.",
    longDescription:
      "Place Water, Fire, Air, and Earth towers to hold off waves of enemies. The hook is the fusion system: combine any two elements to get an evolved Elemental. Each enemy also has elemental strengths and weaknesses, so placement is a real decision.",
    techStack: [
      { name: "Java", icon: "java" },
      { name: "Java Swing", icon: "swing" },
      { name: "Java AWT", icon: "awt" },
    ],
    images: [
      "/projects/unbeatable-td/1.png",
      "/projects/unbeatable-td/2.png",
    ],
    link: "#",
  },
  {
    id: "jubango",
    title: "JubanGo",
    emoji: "🦅",
    description: "One-button shapeshifting infinite side-scroller. Built for a game jam.",
    longDescription:
      "Play as Jubang, a shapeshifter who just wants to eat. Swap between Mole, Eagle, Fish, and Pig forms on the fly to collect different food across a never-ending level. No HUD, no menus, just chaos. Built with a team in a weekend for Global Game Jam 2026.",
    techStack: [
      { name: "Godot", icon: "godot" },
      { name: "GDScript", icon: "gdscript" },
      { name: "HTML5", icon: "html5" },
    ],
    images: [
      "/projects/jubango/1.png",
      "/projects/jubango/2.png",
      "/projects/jubango/3.png",
      "/projects/jubango/4.png",
      "/projects/jubango/5.png",
    ],
    link: "#",
  },
];

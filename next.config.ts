import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Allow any local images; add external domains here if needed later
    remotePatterns: [],
    unoptimized: false,
  },
};

export default nextConfig;

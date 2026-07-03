import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export: emits ./out with plain HTML/CSS/JS for Apache/DirectAdmin.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

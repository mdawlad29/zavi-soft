import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  distDir: ".next",
};

export default nextConfig;

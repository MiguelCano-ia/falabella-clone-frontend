import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "images.falabella.com",
      },
      {
        protocol: "https",
        hostname: "falabella-backend.onrender.com",
      },
      {
        protocol: "https",
        hostname: "media.falabella.com",
      },
    ],
  },
};

export default nextConfig;

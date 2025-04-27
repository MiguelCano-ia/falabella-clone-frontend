import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: [
      "imagedelivery.net",
      "images.falabella.com",
      "images.ctfassets.net",
      "falabella-backend.onrender.com",
      "images/*",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
    ],
  },
};

export default nextConfig;

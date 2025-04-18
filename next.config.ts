import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: [
      "imagedelivery.net",  // Dominio que ya tenías
      "images.falabella.com",
      "images.ctfassets.net" // Nuevo dominio que estás agregando
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "tailwindui.com" },
      { hostname: "pbs.twimg.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;

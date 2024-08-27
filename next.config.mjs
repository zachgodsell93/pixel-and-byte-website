/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "tailwindui.com" },
      { hostname: "pbs.twimg.com" },
    ],
  },
};

export default nextConfig;

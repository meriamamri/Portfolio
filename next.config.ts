import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seeklogo.com",
        pathname: "/**", // Allows all paths under seeklogo.com
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**", // Allows all paths under seeklogo.com
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**", // Allows all paths under seeklogo.com
      },
    ],
  },
};

export default nextConfig;

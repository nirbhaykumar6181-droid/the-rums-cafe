import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      // Add only verified image hosts when official assets are selected.
    ],
  },
};

export default nextConfig;

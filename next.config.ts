import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "foodmart-share-api.bosssoft.vn",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;

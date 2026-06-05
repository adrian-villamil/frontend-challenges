import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "csyxkpbavpcrhwqhcpyy.supabase.co",
        pathname: "/storage/v1/object/public/assets/property-challenge/**",
      },
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

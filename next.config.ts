import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://flagcdn.com/
  images: {
    domains: ["flagcdn.com"],
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Improve performance with SWC minifier
  swcMinify: true,
  // Handle trailing slashes consistently
  trailingSlash: false,
  // Optimize page loading with power by default
  poweredByHeader: false,
};

export default nextConfig;

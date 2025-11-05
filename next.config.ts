import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */

  output: "export", // Required for static export
  basePath: isProd ? "/Portfolio" : "",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

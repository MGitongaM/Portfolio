import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */

  
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio' : '',
 
};

export default nextConfig;

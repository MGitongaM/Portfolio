import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */

  
  basePath: isProduction ? '/Portfolio' : '',
  assetPrefix: isProduction ? '/Portfolio' : '',
 
};

export default nextConfig;

import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: { icon: true }}]
    })
    return config
  },
};

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;

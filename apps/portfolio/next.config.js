/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'apps/portfolio');
    return config;
  }
};

module.exports = nextConfig;

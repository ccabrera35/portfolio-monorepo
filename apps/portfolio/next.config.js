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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/furfriends/:slug*",
  //       destination: "https://furfriends-pets.vercel.app/:slug*",
  //     },
  //     {
  //       source: "/devhunt/:slug*",
  //       destination: "https://developerhunt.vercel.app/:slug*",
  //     },
  //     {
  //       source: "/cityvibe/:slug*",
  //       destination: "https://cityvibe.vercel.app/:slug*",
  //     },
  //     {
  //       source: "/sliding-puzzle/:slug*",
  //       destination: "https://sliding-puzzle-omega.vercel.app/:slug*",
  //     }
  //   ];
  // }
};

module.exports = nextConfig;

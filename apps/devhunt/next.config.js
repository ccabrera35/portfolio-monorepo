/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/devhunt",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ]
  },
};

module.exports = nextConfig;

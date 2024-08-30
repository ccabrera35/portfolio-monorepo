/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }]
  },
  assetPrefix: "/furfriends",
  experimental: {
    serverActions: {
      allowedOrigins: [
        "portfolio-monorepo-omega.vercel.app",
        "portfolio-monorepo-omega.vercel.app/*",
        "furfriends-monorepo.vercel.app",
        "furfriends-monorepo.vercel.app/*"
      ]
    }
  }
};

module.exports = nextConfig;

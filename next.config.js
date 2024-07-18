/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/furfriends",
        destination: "https://furfriends-pets.vercel.app/",
      },
      {
        source: "/devhunt",
        destination: "https://developerhunt.vercel.app/",
      },
      {
        source: "/cityvibe",
        destination: "https://cityvibe.vercel.app/",
      },
      {
        source: "/sliding-puzzle",
        destination: "https://sliding-puzzle-omega.vercel.app",
      }
    ];
  }
};

module.exports = nextConfig;

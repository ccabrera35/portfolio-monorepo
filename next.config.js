/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/furfriends/:slug*",
        destination: "https://furfriends-pets.vercel.app/",
      },
      {
        source: "/devhunt/:slug*",
        destination: "https://developerhunt.vercel.app/",
      },
      {
        source: "/cityvibe/:slug*",
        destination: "https://cityvibe.vercel.app/:slug*",
      },
      {
        source: "/sliding-puzzle/:slug*",
        destination: "https://sliding-puzzle-omega.vercel.app",
      }
    ];
  }
};

module.exports = nextConfig;

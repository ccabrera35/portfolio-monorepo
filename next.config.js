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
        destination: "https://furfriends-pets.vercel.app/:slug*",
      },
      {
        source: "/devhunt/:slug*",
        destination: "https://developerhunt.vercel.app/:slug*",
      },
      {
        source: "/cityvibe/:slug*",
        destination: "https://cityvibe.vercel.app/:slug*",
      },
      {
        source: "/sliding-puzzle/:slug*",
        destination: "https://sliding-puzzle-omega.vercel.app/:slug*",
      }
    ];
  }
};

module.exports = nextConfig;

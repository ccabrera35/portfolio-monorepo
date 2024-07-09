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
  // async rewrites () {
  //   return [
  //     {
  //       source: "",
  //       destination: ""
  //     },
  
  //   ]
  // }
};

module.exports = nextConfig;

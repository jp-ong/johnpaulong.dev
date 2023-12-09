/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.IMAGE_CDN_PROTOCOL,
        hostname: process.env.IMAGE_CDN_HOST,
        port: "",
        pathname: process.env.IMAGE_CDN_PATHNAME,
      },
    ],
  },
};

module.exports = nextConfig;

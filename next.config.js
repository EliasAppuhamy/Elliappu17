/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ambitly.org',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
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

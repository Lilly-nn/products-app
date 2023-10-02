/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.dummyjson.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

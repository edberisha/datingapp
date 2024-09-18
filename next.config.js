// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // This replaces 'next export'
  basePath: '/datingapp', // Set this if your site is hosted at a subpath
  images: {
    unoptimized: true, // Disable image optimization
  },
};


module.exports = nextConfig;

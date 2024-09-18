/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static export mode

  images: {
    unoptimized: true, // Disable image optimization (optional)
  },
};

module.exports = nextConfig;

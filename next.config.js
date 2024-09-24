/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',      // Directory where the service worker and manifest will be stored
  register: true,      // Enable service worker registration
  skipWaiting: true,   // Enable skip waiting for service workers
});

const nextConfig = {
  reactStrictMode: true,
  output: 'export',    // Enable static export mode

  images: {
    unoptimized: true,  // Disable image optimization (optional)
  },
};

// Combine the PWA config with the existing Next.js config
module.exports = withPWA(nextConfig);

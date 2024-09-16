/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: true, // Disable Next.js image optimization for simplicity
  },
  // Uncomment and modify basePath if you are deploying to a subdirectory
  // basePath: '/repository-name',
};

export default nextConfig;

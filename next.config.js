/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Configure for static export
  output: 'export',
  // Add trailing slashes to all URLs
  trailingSlash: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // App Router features
    serverActions: { allowedOrigins: ["*"] }
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disables Next.js automatic image optimization
  },
  experimental: {
    // appDir: true, // Enable Next.js App Router
  },
  output: 'export'
};

export default nextConfig;
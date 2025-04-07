/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '/resources/**',
      },
    ],
    unoptimized: false, 
  },
   // Enable React Strict Mode (recommended)
   reactStrictMode: true,

  experimental: {
    appDir: true, // Enable Next.js App Router
  },
};

export default nextConfig;
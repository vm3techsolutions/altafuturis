/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: 'imgix',
    // path: '', // required for imgix
    // domains: ['https://blog.altafuturis.com/, https://altafuturis.com/'], // allowlist domain
    unoptimized: false, 
  },
   // Enable React Strict Mode (recommended)
   reactStrictMode: true,

  experimental: {
    appDir: true, // Enable Next.js App Router
  },
};

export default nextConfig;
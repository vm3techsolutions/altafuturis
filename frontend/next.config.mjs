/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: 'imgix',
    // path: '', // required for imgix
    // domains: ['https://blog.altafuturis.com/, https://altafuturis.com/'], // allowlist domain
    unoptimized: true 

  },
  experimental: {
    // appDir: true, // Enable Next.js App Router
  },
  // output: 'export'
};

export default nextConfig;
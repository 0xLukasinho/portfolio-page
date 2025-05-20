/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages needs to know the repo name for path building
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Page' : '',
  images: {
    unoptimized: true, // For static export
  },
};

export default nextConfig;

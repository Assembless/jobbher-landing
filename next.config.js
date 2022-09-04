const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  optimizedImages,
  reactStrictMode: true,
  cssModules: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['source.unsplash.com'],
  },
};

module.exports = withPlugins([withPWA, optimizedImages], nextConfig);

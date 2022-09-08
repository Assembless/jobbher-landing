/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  rules: {
    'react/no-unescaped-entities': 'off',
  },
};

module.exports = withPWA({ nextConfig });

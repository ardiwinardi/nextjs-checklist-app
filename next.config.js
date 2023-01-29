/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  publicExcludes: ['!assets/**/*'],
});

module.exports = withPWA({
  reactStrictMode: true,
  output: 'standalone',
});

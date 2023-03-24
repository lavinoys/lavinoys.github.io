const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [{ loader: 'next/font/google', options: { subsets: ['latin'] } }],
    largePageDataBytes: 128 * 100000,
  },
  images: {
    unoptimized: true,
  },
});

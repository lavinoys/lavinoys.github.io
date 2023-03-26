import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
export default withContentlayer({
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

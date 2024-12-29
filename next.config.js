/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@magicui/shimmer-button'],
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 
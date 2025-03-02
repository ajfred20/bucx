/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimize images on build
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    // Reduce quality slightly (still good quality but smaller size)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig 
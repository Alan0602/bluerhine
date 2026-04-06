import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Google Drive /uc route (original URL format in machine-images.json)
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc**',
      },
      // Google Drive /thumbnail route (what normalizeImageUrl produces after conversion)
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/thumbnail**',
      },
      // lh3.googleusercontent.com — Google's image CDN that /thumbnail redirects to.
      // This MUST be in the list or Next.js blocks the final image response.
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      // Wildcard for all Google user content subdomains (CDN load balancing)
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig

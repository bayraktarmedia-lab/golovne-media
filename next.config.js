/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/home.html' },
        { source: '/kanaly', destination: '/kanaly.html' },
        { source: '/kanaly/', destination: '/kanaly.html' },
      ],
    }
  },
  async headers() {
    return [
      { source: '/', headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }] },
      { source: '/home.html', headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }] },
      { source: '/kanaly', headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }] },
      { source: '/kanaly/', headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }] },
    ]
  },
}

module.exports = nextConfig

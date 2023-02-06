/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'api.ts',
    'api.tsx',
    'tsx',
    'ts',
    'page.jsx',
    'page.js',
    'page.styles.ts'
  ]
}

module.exports = nextConfig


/**
 * @type {import('next').NextConfig}
 */

export const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath: isProd ? '/ci-cd-practice' : '',
  output: 'export',
  images: {
    unoptimized: true
  }

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig

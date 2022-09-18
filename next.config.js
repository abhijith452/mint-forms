/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
}
}

module.exports = nextConfig

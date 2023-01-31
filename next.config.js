/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n,
    images: {
        domains: ['www.datocms-assets.com']
    }
}

module.exports = nextConfig

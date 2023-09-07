/** @type {import('next').NextConfig} */
const nextConfig = {

  i18n: {
    locales: ['nl', 'de'],
    localeDetection: false,
    domains: [
      {
        domain: `nl.website.com`,
        defaultLocale: 'nl',
      },
      {
        domain: `de.website.com`,
        defaultLocale: 'de',
      },
    ],
    defaultLocale: 'nl',
  },

  reactStrictMode: true,
}

module.exports = nextConfig

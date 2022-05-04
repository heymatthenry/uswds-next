/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      "./node_modules/@uswds",
      "./node_modules/@uswds/uswds/packages"
    ],
  },
}

module.exports = nextConfig

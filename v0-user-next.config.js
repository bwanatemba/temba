/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./app"],
  },
}

module.exports = nextConfig

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  sassOptions: {
    includePaths: ["./app"],
  }
}

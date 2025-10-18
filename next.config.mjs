/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // поддержка новой структуры /app
  },
  images: {
    domains: [
      "www-league.nhlstatic.com", // если будешь подтягивать логотипы команд NHL
    ],
  },
};

module.exports = nextConfig;

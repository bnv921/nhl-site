/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "www-league.nhlstatic.com",
    ],
  },
};

export default nextConfig;

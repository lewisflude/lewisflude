/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["sanity", "next-sanity"],
  },
};

module.exports = nextConfig;

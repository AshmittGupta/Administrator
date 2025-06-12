/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable edge runtime completely
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
}

module.exports = nextConfig 
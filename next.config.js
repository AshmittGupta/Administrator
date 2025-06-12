/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  webpack: (config, { isServer }) => {
    // Handle undici module parsing
    config.module.rules.push({
      test: /node_modules\/undici/,
      loader: 'ignore-loader'
    });

    // Handle dynamic code evaluation in Edge Runtime
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        path: false,
        os: false,
      };
    }

    // Handle protobuf and other problematic modules
    config.module.rules.push({
      test: /node_modules\/(@protobufjs|lodash\.clonedeep)/,
      loader: 'ignore-loader'
    });

    return config;
  },
  // Configure SWC to handle modern JavaScript features
  swcMinify: true,
  compiler: {
    styledComponents: true,
  }
};

module.exports = nextConfig; 
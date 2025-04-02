/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource', // ✅ Replaces file-loader
      generator: {
        filename: 'static/media/[name].[hash][ext]', // ✅ Correct path format
      },
    });

    return config;
  },
};

module.exports = nextConfig;

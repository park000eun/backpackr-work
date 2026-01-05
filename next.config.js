/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.idus.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.idus.kr',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

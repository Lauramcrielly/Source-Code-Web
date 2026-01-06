import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'euans-guide-upload-dev.s3.eu-west-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'euans-guide-upload-stage.s3.eu-west-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'euans-guide-upload-prod.s3.eu-west-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'euans-guide-cms-dev.s3.eu-west-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'euans-guide-cms-stage.s3.eu-west-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'euans-guide-cms-prod.s3.eu-west-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'euans-guide-test-upload.s3.eu-west-1.amazonaws.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  staticPageGenerationTimeout: 180,
};

export default nextConfig;

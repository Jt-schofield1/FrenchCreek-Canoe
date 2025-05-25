/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/site',
        permanent: true,
      },
    ];
  },
  // Explicitly enable the Next.js CSS support
  experimental: {
    // The Next.js features to enable
    esmExternals: true,
  },
};

module.exports = nextConfig; 
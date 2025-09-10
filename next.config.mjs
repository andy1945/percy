/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/percy',
  assetPrefix: '/percy/',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },
};

export default nextConfig;

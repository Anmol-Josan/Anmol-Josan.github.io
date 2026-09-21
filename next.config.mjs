/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  outputFileTracingRoot: process.cwd()
};

export default nextConfig;

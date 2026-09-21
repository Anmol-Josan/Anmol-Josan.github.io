import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  outputFileTracingRoot: path.join(process.cwd()),
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default nextConfig;

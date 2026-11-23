import type { NextConfig } from "next";

// Podgląd na GitHub Pages działa pod /drobud-www — ustawiane przez NEXT_PUBLIC_BASE_PATH w workflow.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

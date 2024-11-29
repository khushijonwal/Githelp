/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {};

export default config;

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint errors during the build
    },
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript errors during the build
      },
  };
  
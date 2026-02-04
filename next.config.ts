import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: allow accessing the dev server via LAN IP without /_next/* being blocked.
  // Next.js matches on hostname (no scheme/port).
  allowedDevOrigins: ["10.10.15.229"],
};

export default nextConfig;

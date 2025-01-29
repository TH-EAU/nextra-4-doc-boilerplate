import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

const nextConfig: NextConfig = withNextra({
  output: "export",
  reactStrictMode: true,
});

export default nextConfig;

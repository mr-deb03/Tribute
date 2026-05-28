/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Repo name — used to prefix all asset URLs since GitHub Pages serves
// the site under https://<user>.github.io/<repo>/.
// Override with NEXT_PUBLIC_BASE_PATH at build time if your repo is named
// something else.
const repo = process.env.NEXT_PUBLIC_BASE_PATH || "Tribute";

const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site to out/ for GitHub Pages.
  output: "export",
  // GitHub Pages doesn't run the Next image optimizer.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
};

module.exports = nextConfig;

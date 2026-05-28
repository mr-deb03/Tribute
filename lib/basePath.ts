/**
 * basePath helper.
 *
 * Next.js applies `basePath` to <Link> and routes automatically, but NOT to
 * the `src` of <Image> when given a string. On GitHub Pages we deploy under
 * https://<user>.github.io/<repo>/ so every static asset URL needs the
 * `/<repo>` prefix or it 404s.
 *
 * The repo name comes from NEXT_PUBLIC_BASE_PATH, which the deploy workflow
 * sets to `${{ github.event.repository.name }}` at build time. In dev (and
 * if the env var is missing) we return an empty prefix.
 */
const isProd = process.env.NODE_ENV === "production";
const repo = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const basePath = isProd && repo ? `/${repo}` : "";

export const withBasePath = (path: string): string => {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path; // leave absolute URLs alone
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
};

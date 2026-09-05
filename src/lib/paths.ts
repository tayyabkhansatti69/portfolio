// GitHub Pages serves this site from a /<repo> subpath. Next.js applies
// `basePath` automatically to next/link and next/image, but not to plain
// href strings we build ourselves (e.g. links to files in /public).
// Wrap any such path with this helper so it resolves correctly both
// locally (no prefix) and on GitHub Pages (prefixed with /portfolio).
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}

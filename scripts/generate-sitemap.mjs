// Generates public/sitemap.xml from the project slugs in src/data/projects.ts.
// Runs before every build ("npm run build"), so the sitemap never gets out of date.
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://jaajness.github.io";

// Pages that are not projects (the routes of src/routes.ts). Add new ones here.
const STATIC_PAGES = ["/", "/declaration-ia"];

const projectsSource = readFileSync(
  new URL("../src/data/projects.ts", import.meta.url),
  "utf8",
);

// Every `slug: "..."` in projects.ts, in order, without duplicates
const slugs = [
  ...new Set(
    [...projectsSource.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map((m) => m[1]),
  ),
];

if (slugs.length === 0) {
  console.error("sitemap: no project slug found in src/data/projects.ts");
  process.exit(1); // fail the build instead of publishing an empty sitemap
}

const paths = [...STATIC_PAGES, ...slugs.map((slug) => `/projet/${slug}`)];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url>\n    <loc>${SITE}${p}</loc>\n  </url>`).join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap: ${paths.length} pages written to public/sitemap.xml`);

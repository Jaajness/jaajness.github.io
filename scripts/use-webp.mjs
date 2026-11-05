// Rewrites "/assets/xxx.png|jpg|jpeg" to "/assets/xxx.webp" in the source code,
// but ONLY when public/assets/xxx.webp really exists (so nothing can break).
//   node scripts/use-webp.mjs          -> apply
//   node scripts/use-webp.mjs --dry    -> only show what would change
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dry = process.argv.includes("--dry");
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".html"]);

function* walk(path) {
  if (!existsSync(path)) return;
  if (statSync(path).isFile()) { yield path; return; }
  for (const entry of readdirSync(path)) {
    if (entry === "node_modules" || entry === "dist" || entry.startsWith(".")) continue;
    yield* walk(join(path, entry));
  }
}

const pattern = /(\/assets\/[A-Za-z0-9_.\-]+?)\.(png|jpe?g)(?![A-Za-z0-9])/g;
let total = 0;
const skipped = new Set();

for (const target of [join(root, "src"), join(root, "index.html")]) {
  for (const file of walk(target)) {
    if (!EXTENSIONS.has(extname(file))) continue;
    const before = readFileSync(file, "utf8");
    let count = 0;
    const after = before.replace(pattern, (match, base) => {
      if (existsSync(join(root, "public", `${base}.webp`))) { count++; return `${base}.webp`; }
      skipped.add(match); // no .webp version: left as is
      return match;
    });
    if (count > 0) {
      console.log(`${String(count).padStart(3)}  ${relative(root, file)}`);
      total += count;
      if (!dry) writeFileSync(file, after);
    }
  }
}

console.log(`\n${dry ? "[dry run] would update" : "Updated"} ${total} reference(s).`);
if (skipped.size) console.log("Left unchanged (no .webp found):\n  " + [...skipped].join("\n  "));

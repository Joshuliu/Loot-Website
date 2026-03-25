import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const distDir = resolve(rootDir, "dist");

const routes = [
  "/",
  "/how-it-works",
  "/features",
  "/why-loot",
  "/split-bills",
  "/split-restaurant-bill",
  "/split-expenses-with-roommates",
  "/split-travel-expenses",
  "/best-bill-splitting-app",
  "/bill-splitting-guide",
  "/blog",
  "/blog/how-to-split-a-bill",
  "/blog/how-to-track-shared-expenses",
  "/blog/how-to-split-rent",
  "/blog/group-expense-management",
  "/faq",
  "/about",
  "/contact",
];

// Read the client-built HTML template
const templatePath = resolve(distDir, "index.html");
const template = readFileSync(templatePath, "utf-8");

if (!template.includes("<!--app-head-->")) {
  console.error(
    "ERROR: dist/index.html is missing the <!--app-head--> placeholder.\n" +
    "Vite may be stripping HTML comments. Run `npm run build:client` first."
  );
  process.exit(1);
}

// Load the SSR render function from the server build
const serverEntryPath = resolve(distDir, "server", "entry-server.js");
const { render } = await import(serverEntryPath);

let successCount = 0;
let errorCount = 0;

for (const route of routes) {
  try {
    const { appHtml, helmet } = render(route);

    // Collect all head tags injected by react-helmet-async
    const headTags = [
      helmet?.title?.toString() ?? "",
      helmet?.priority?.toString() ?? "",
      helmet?.meta?.toString() ?? "",
      helmet?.link?.toString() ?? "",
      helmet?.script?.toString() ?? "",
    ]
      .map((s) => s.trim())
      .filter(Boolean)
      .join("\n    ");

    // Inject head tags and pre-rendered HTML into the template
    const html = template
      .replace("<!--app-head-->", headTags)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine output directory (nested for /blog/* routes)
    const outputDir =
      route === "/" ? distDir : resolve(distDir, ...route.slice(1).split("/"));

    mkdirSync(outputDir, { recursive: true });
    writeFileSync(resolve(outputDir, "index.html"), html);

    console.log(`  ✓  ${route}`);
    successCount++;
  } catch (err) {
    console.error(`  ✗  ${route}: ${err.message}`);
    errorCount++;
  }
}

console.log(
  `\nPre-rendered ${successCount} page${successCount !== 1 ? "s" : ""}${errorCount > 0 ? `, ${errorCount} error${errorCount !== 1 ? "s" : ""}` : ""}.`
);

if (errorCount > 0) {
  process.exit(1);
}

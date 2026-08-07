import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const regionDirs = [
  "regioes/coluna",
  "regioes/convenio",
  "regioes/joelho",
  "regioes/mao-punho",
  "regioes/ombro",
  "regioes/pe-tornozelo",
  "regioes/quadril",
];

const rootSlugs = ["ig"];

function runBuild(cwd) {
  execFileSync("npx", ["vite", "build"], {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}

function copyDir(source, target) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true });
}

function copyRootSlug(slug) {
  const distDir = path.join(rootDir, "dist");
  const targetDir = path.join(distDir, slug);
  const entries = ["index.html", "assets", "img", "favicon.svg", "favicon.png", "icons.svg"];

  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(targetDir, { recursive: true });

  for (const entry of entries) {
    const source = path.join(distDir, entry);
    if (!fs.existsSync(source)) continue;
    fs.cpSync(source, path.join(targetDir, entry), { recursive: true });
  }
}

runBuild(rootDir);

for (const slug of rootSlugs) {
  copyRootSlug(slug);
}

for (const regionDir of regionDirs) {
  const absoluteRegionDir = path.join(rootDir, regionDir);
  const regionSlug = path.basename(regionDir);
  const sourceDist = path.join(absoluteRegionDir, "dist");
  const targetDist = path.join(rootDir, "dist", regionSlug);

  runBuild(absoluteRegionDir);
  copyDir(sourceDist, targetDist);
}

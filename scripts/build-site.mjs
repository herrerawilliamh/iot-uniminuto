import { existsSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";

const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS);
const baseRoot = isGitHubActions && repo ? `/${repo}/` : "/";

function run(command) {
  console.log(`\n> ${command}\n`);
  execSync(command, { stdio: "inherit" });
}

rmSync("dist", { recursive: true, force: true });

if (existsSync("slides.md")) {
  run(`npx slidev build slides.md --out dist --base ${baseRoot} --without-notes`);
}

for (let i = 1; i <= 8; i++) {
  const file = `iot_semana${i}.md`;
  const out = `dist/semanas/iot_semana${i}`;
  const base = `${baseRoot}semanas/iot_semana${i}/`;

  if (existsSync(file)) {
    run(`npx slidev build ${file} --out ${out} --base ${base} --without-notes`);
  } else {
    console.log(`No existe ${file}. Se omite la construcción de la semana ${i}.`);
  }
}

run(`node -e "require('fs').writeFileSync('dist/.nojekyll','')"`);
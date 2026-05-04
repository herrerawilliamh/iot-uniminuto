import { existsSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";

mkdirSync("public/descargas", { recursive: true });

function run(command) {
  console.log(`\n> ${command}\n`);
  execSync(command, { stdio: "inherit" });
}

function exportDeck(input, outputName) {
  if (!existsSync(input)) {
    console.log(`No existe ${input}. Se omite.`);
    return;
  }

  run(`npx slidev export ${input} --format pdf --output public/descargas/${outputName}.pdf`);
  run(`npx slidev export ${input} --format pptx --with-clicks false --output public/descargas/${outputName}.pptx`);
}

exportDeck("slides.md", "openclass-iot");

for (let i = 1; i <= 8; i++) {
  exportDeck(`iot_semana${i}.md`, `iot_semana${i}`);
}
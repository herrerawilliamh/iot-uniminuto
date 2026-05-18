/**
 * Genera openclass-template.zip — plantilla reutilizable para nuevos cursos.
 *
 * Uso: npm run zip:template
 *
 * El ZIP contiene la estructura completa con el marcador CURSO como prefijo.
 * Después de extraer, ejecutar: node scripts/nuevo-curso.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const TEMP    = '__template__';
const ZIP_OUT = 'openclass-template.zip';

// ── Limpieza inicial ─────────────────────────────────────────────────────────
fs.rmSync(TEMP, { recursive: true, force: true });
fs.rmSync(ZIP_OUT, { force: true });

// ── Estructura de directorios ─────────────────────────────────────────────────
const dirs = [
  'semanas',
  'public/fondos',
  'public/imagenes',
  'public/videos',
  'public/descargas',
  'scripts',
  '.github/workflows',
  'setup',
  'snippets',
].map(d => path.join(TEMP, d));

for (const d of dirs) fs.mkdirSync(d, { recursive: true });

// ── Helpers ───────────────────────────────────────────────────────────────────
function write(dest, content) {
  fs.writeFileSync(path.join(TEMP, dest), content, 'utf-8');
}

function copiar(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, path.join(TEMP, dest), { recursive: true });
}

function copiarArchivo(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.copyFileSync(src, path.join(TEMP, dest));
}

// ── Tema institucional (se copia tal cual) ────────────────────────────────────
copiar('theme', 'theme');
console.log('  ✓  theme/');

// ── Fondos institucionales ────────────────────────────────────────────────────
copiar('public/fondos', 'public/fondos');
console.log('  ✓  public/fondos/');

// ── Favicon ───────────────────────────────────────────────────────────────────
copiarArchivo('public/favicon.png', 'public/favicon.png');
console.log('  ✓  public/favicon.png');

// ── Carpetas vacías ───────────────────────────────────────────────────────────
for (const sub of ['imagenes', 'videos', 'descargas']) {
  fs.writeFileSync(path.join(TEMP, 'public', sub, '.gitkeep'), '');
}

// ── Setup y snippets ─────────────────────────────────────────────────────────
copiar('setup', 'setup');
copiar('snippets', 'snippets');

// ── GitHub Actions ────────────────────────────────────────────────────────────
write('.github/workflows/deploy.yml', `name: Deploy Slidev to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    name: Build Slidev site
    runs-on: ubuntu-latest

    env:
      SITE_BASE: /\${{ github.event.repository.name }}/

    steps:
      - name: Clonar repositorio
        uses: actions/checkout@v6

      - name: Configurar Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 22
          cache: npm

      - name: Instalar dependencias
        run: npm ci

      - name: Instalar Chromium para exportar
        run: npx playwright install chromium --with-deps

      - name: Exportar PDF y PPTX
        run: npm run export:downloads

      - name: Construir portal y semanas
        run: npm run build:all

      - name: Subir artefacto de GitHub Pages
        uses: actions/upload-pages-artifact@v5
        with:
          path: dist

  deploy:
    name: Deploy GitHub Pages
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    permissions:
      pages: write
      id-token: write

    steps:
      - name: Publicar en GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
`);
console.log('  ✓  .github/workflows/deploy.yml');

// ── Archivos de configuración ─────────────────────────────────────────────────
copiarArchivo('.gitignore', '.gitignore');
copiarArchivo('.npmrc', '.npmrc');
copiarArchivo('README.md', 'README.md');
copiarArchivo('package-lock.json', 'package-lock.json');

// ── package.json con placeholders ────────────────────────────────────────────
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
pkg.name        = 'openclass-CURSO';
pkg.description = 'Presentaciones Open Class del curso NOMBRE_CURSO.';
for (const [clave, valor] of Object.entries(pkg.scripts)) {
  pkg.scripts[clave] = valor.replaceAll('iot', 'CURSO');
}
// Añadir el script de configuración inicial
pkg.scripts['nuevo'] = 'node scripts/nuevo-curso.mjs';
write('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('  ✓  package.json');

// ── scripts/ ─────────────────────────────────────────────────────────────────
const scriptsACopiar = [
  'build-site.mjs',
  'build-incremental.mjs',
  'export-downloads.mjs',
  'export-incremental.mjs',
  'dev-all.mjs',
  'publicar.mjs',
  'nuevo-curso.mjs',
];
for (const s of scriptsACopiar) {
  if (fs.existsSync(path.join('scripts', s))) {
    copiarArchivo(path.join('scripts', s), path.join('scripts', s));
  }
}
console.log('  ✓  scripts/');

// ── scripts/decks.mjs con placeholder CURSO ──────────────────────────────────
write('scripts/decks.mjs', `function normalizeBase(value) {
  let base = value || "/";
  if (!base.startsWith("/")) base = \`/\${base}\`;
  if (!base.endsWith("/")) base = \`\${base}/\`;
  return base;
}

const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");

function withBase(path = "") {
  return \`\${SITE_BASE}\${path.replace(/^\\/+/, "")}\`;
}

export const decks = [
  {
    name: "openclass-CURSO",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: true,
  },
  // Activa cada semana aquí cuando el contenido esté listo.
  // {
  //   name: "CURSO_semana1",
  //   entry: "CURSO_semana1.md",
  //   out: "dist/semanas/CURSO_semana1",
  //   base: withBase("semanas/CURSO_semana1/"),
  //   exportable: true,
  // },
];
`);
console.log('  ✓  scripts/decks.mjs');

// ── slides.md (portal con placeholders) ──────────────────────────────────────
write('slides.md', `---
theme: ./theme/uniminuto
title: NOMBRE_CURSO — Open Class
favicon: /favicon.png
codeCopy: true
transition: fade
routerMode: hash
drawings:
  persist: false
layout: slide-01-portada
---

::title::
NOMBRE_CURSO

::week::
Open Class

::date::
AÑO

---
layout: slide-08-titulo-texto
---

::title::
Descripción general del curso

::content::
Agrega aquí la descripción general del curso.

---
layout: slide-08-titulo-texto
---

::title::
Ruta de aprendizaje

::content::
El curso se organiza en semanas. Usa los siguientes enlaces para abrir cada presentación.

---
layout: slide-10-titulo-dos-columnas
---

::title::
Presentaciones disponibles

::left::
### **Semana 1**

<a href="./semanas/CURSO_semana1/#/1" target="_self">Título semana 1</a>

<a href="./descargas/CURSO_semana1.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana1.pptx" download>Descargar PPTX</a>

### **Semana 2**

<a href="./semanas/CURSO_semana2/#/1" target="_self">Título semana 2</a>

<a href="./descargas/CURSO_semana2.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana2.pptx" download>Descargar PPTX</a>

### **Semana 3**

<a href="./semanas/CURSO_semana3/#/1" target="_self">Título semana 3</a>

<a href="./descargas/CURSO_semana3.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana3.pptx" download>Descargar PPTX</a>

### **Semana 4**

<a href="./semanas/CURSO_semana4/#/1" target="_self">Título semana 4</a>

<a href="./descargas/CURSO_semana4.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana4.pptx" download>Descargar PPTX</a>

::right::
### **Semana 5**

<a href="./semanas/CURSO_semana5/#/1" target="_self">Título semana 5</a>

<a href="./descargas/CURSO_semana5.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana5.pptx" download>Descargar PPTX</a>

### **Semana 6**

<a href="./semanas/CURSO_semana6/#/1" target="_self">Título semana 6</a>

<a href="./descargas/CURSO_semana6.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana6.pptx" download>Descargar PPTX</a>

### **Semana 7**

<a href="./semanas/CURSO_semana7/#/1" target="_self">Título semana 7</a>

<a href="./descargas/CURSO_semana7.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana7.pptx" download>Descargar PPTX</a>

### **Semana 8**

<a href="./semanas/CURSO_semana8/#/1" target="_self">Título semana 8</a>

<a href="./descargas/CURSO_semana8.pdf" download>Descargar PDF</a> · <a href="./descargas/CURSO_semana8.pptx" download>Descargar PPTX</a>

---
layout: slide-12-cierre
---
`);
console.log('  ✓  slides.md');

// ── Lanzadores raíz CURSO_semana1.md … CURSO_semana8.md ──────────────────────
for (let i = 1; i <= 8; i++) {
  write(`CURSO_semana${i}.md`, `---
theme: ./theme/uniminuto
title: NOMBRE_CURSO — Semana ${i} — TEMA_SEMANA
favicon: /favicon.png
codeCopy: true
transition: fade
routerMode: hash
drawings:
  persist: false
src: ./semanas/CURSO_semana${i}.md
---
`);
}
console.log('  ✓  CURSO_semana1.md … CURSO_semana8.md');

// ── Contenido de semanas semanas/CURSO_semanaN.md ─────────────────────────────
function plantillaSemana(n) {
  return `---
layout: slide-01-portada
---

::title::
NOMBRE_CURSO

::week::
Semana SEMANA_N — TEMA_SEMANA

::date::
FECHA_SEMANA

---
layout: slide-09-objetivos
---

::title::
Objetivos de la sesión

::content::
Al terminar esta sesión el estudiante será capaz de:

- Objetivo 1.
- Objetivo 2.
- Objetivo 3.

---
layout: slide-08-titulo-texto
---

::title::
Contenido principal

::content::
Agrega el desarrollo conceptual de la semana aquí.

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad práctica

::left::
**Instrucciones**

- Paso 1.
- Paso 2.
- Paso 3.

::right::
**Producto esperado**

- Entregable 1.
- Entregable 2.

---
layout: slide-12-cierre
---
`;
}

for (let i = 1; i <= 8; i++) {
  write(path.join('semanas', `CURSO_semana${i}.md`), plantillaSemana(i));
}
console.log('  ✓  semanas/CURSO_semana1.md … CURSO_semana8.md');

// ── Crear ZIP con .NET ZipFile (incluye archivos ocultos) ─────────────────────
console.log('\n  Comprimiendo...');

const absTemp = path.resolve(TEMP);
const absZip  = path.resolve(ZIP_OUT);

const ps = `Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${absTemp}', '${absZip}')`;

const resultado = spawnSync('powershell', ['-Command', ps], { stdio: 'inherit' });

// ── Limpieza ──────────────────────────────────────────────────────────────────
fs.rmSync(TEMP, { recursive: true, force: true });

if (resultado.status !== 0) {
  console.error('\n❌  Error al crear el ZIP.');
  process.exit(1);
}

const tamanio = Math.round(fs.statSync(ZIP_OUT).size / 1024);
console.log(`\n✅  openclass-template.zip generado (${tamanio} KB)`);
console.log('');
console.log('   Para usar en un nuevo curso:');
console.log('   1. Descomprime openclass-template.zip en una carpeta nueva');
console.log('   2. npm install');
console.log('   3. npm run nuevo');
console.log('');

/**
 * Configura un nuevo curso Open Class a partir de la plantilla.
 * Ejecutar con: node scripts/nuevo-curso.mjs
 *
 * Sustituye placeholders, pregunta tema y fecha por semana.
 */
import { createInterface } from 'node:readline/promises';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const rl = createInterface({ input: process.stdin, output: process.stdout });

function ask(pregunta, porDefecto = '') {
  const hint = porDefecto ? ` [${porDefecto}]` : '';
  return rl.question(`  ${pregunta}${hint}: `);
}

function limpiar(s) {
  return s.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

// ── Datos generales ────────────────────────────────────────────────────────
console.log('\n┌──────────────────────────────────────────┐');
console.log('│   Nuevo curso Open Class · Configuración │');
console.log('└──────────────────────────────────────────┘\n');

const shortRaw = await ask('Nombre corto del curso (ej: iot, bd, redes)');
const short    = limpiar(shortRaw);
const nombre   = (await ask('Nombre completo del curso')).trim();
const nSemanas = parseInt((await ask('Número de semanas', '8')).trim()) || 8;
const anio     = (await ask('Año', String(new Date().getFullYear()))).trim();

if (!short || !nombre) {
  rl.close();
  console.error('\n❌  El nombre corto y el nombre completo son obligatorios.\n');
  process.exit(1);
}

console.log(`
  ┌─────────────────────────────────────┐
  │  Nombre corto :  ${short.padEnd(18)}│
  │  Curso        :  ${nombre.slice(0, 18).padEnd(18)}│
  │  Semanas      :  ${String(nSemanas).padEnd(18)}│
  │  Año          :  ${anio.padEnd(18)}│
  └─────────────────────────────────────┘
`);

// ── Temas y fechas por semana ──────────────────────────────────────────────
const respuesta = (await ask('¿Configurar tema y fecha de cada semana ahora?', 'S')).trim().toLowerCase();
const semanasData = [];

if (respuesta !== 'n' && respuesta !== 'no') {
  console.log('\n  Deja en blanco para completar después.\n');

  for (let i = 1; i <= nSemanas; i++) {
    const barra = '─'.repeat(Math.max(1, 30 - String(i).length));
    console.log(`  ── Semana ${i} ${barra}`);
    const tema  = (await ask('Tema de la semana')).trim();
    const fecha = (await ask('Fecha de la clase', anio)).trim();
    semanasData.push({ tema, fecha: fecha || anio });
    console.log('');
  }
} else {
  for (let i = 1; i <= nSemanas; i++) {
    semanasData.push({ tema: '', fecha: anio });
  }
}

rl.close();

// ── Sustitución base (aplica a todos los archivos) ─────────────────────────
function sustituirBase(texto) {
  return texto
    .replaceAll('NOMBRE_CURSO', nombre)
    .replaceAll('CURSO', short)
    .replaceAll('AÑO', anio);
}

// ── Sustitución específica de semana (incluye tema, fecha y número) ─────────
function sustituirSemana(texto, i) {
  const { tema, fecha } = semanasData[i - 1] ?? { tema: '', fecha: anio };
  let r = sustituirBase(texto);
  r = r.replaceAll('SEMANA_N', `${i}`);
  if (tema) {
    r = r.replaceAll('TEMA_SEMANA', tema);
  } else {
    r = r.replaceAll(' — TEMA_SEMANA', '');
    r = r.replaceAll('TEMA_SEMANA', '');
  }
  r = r.replaceAll('FECHA_SEMANA', fecha);
  return r;
}

function procesarArchivo(filePath) {
  if (!fs.existsSync(filePath)) return;
  fs.writeFileSync(filePath, sustituirBase(fs.readFileSync(filePath, 'utf-8')));
}

// ── Lanzadores raíz ─────────────────────────────────────────────────────────
console.log('  Renombrando archivos...');
for (let i = 1; i <= nSemanas; i++) {
  const origen  = `CURSO_semana${i}.md`;
  const destino = `${short}_semana${i}.md`;
  if (!fs.existsSync(origen)) continue;

  fs.writeFileSync(destino, sustituirSemana(fs.readFileSync(origen, 'utf-8'), i));
  if (origen !== destino) fs.unlinkSync(origen);
  console.log(`  ✓  ${origen} → ${destino}`);
}

// ── Contenido de semanas ─────────────────────────────────────────────────────
for (let i = 1; i <= nSemanas; i++) {
  const origen  = path.join('semanas', `CURSO_semana${i}.md`);
  const destino = path.join('semanas', `${short}_semana${i}.md`);
  if (!fs.existsSync(origen)) continue;

  fs.writeFileSync(destino, sustituirSemana(fs.readFileSync(origen, 'utf-8'), i));
  if (origen !== destino) fs.unlinkSync(origen);
  console.log(`  ✓  ${origen} → ${destino}`);
}

// ── slides.md ────────────────────────────────────────────────────────────────
procesarArchivo('slides.md');
console.log('  ✓  slides.md');

// ── package.json ─────────────────────────────────────────────────────────────
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
pkg.name        = `openclass-${short}`;
pkg.description = `Presentaciones Open Class del curso ${nombre}.`;
for (const [clave, valor] of Object.entries(pkg.scripts)) {
  pkg.scripts[clave] = valor.replaceAll('CURSO', short);
}
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('  ✓  package.json');

// ── scripts/decks.mjs ────────────────────────────────────────────────────────
procesarArchivo('scripts/decks.mjs');
console.log('  ✓  scripts/decks.mjs');

// ── .github/workflows/deploy.yml ─────────────────────────────────────────────
procesarArchivo('.github/workflows/deploy.yml');
console.log('  ✓  .github/workflows/deploy.yml');

// ── Instalar dependencias ────────────────────────────────────────────────────
console.log('\n  Instalando dependencias...');
try {
  execSync('npm install', { stdio: 'inherit' });
} catch {
  console.log('  ⚠️   npm install falló. Ejecuta manualmente: npm install');
}

// ── Resultado ───────────────────────────────────────────────────────────────
console.log(`
✅  Proyecto "${nombre}" configurado.

   Próximos pasos:
   1. Inicializa el repositorio git:  git init && git add -A && git commit -m "Inicio"
   2. Edita la primera semana:        npm run dev:s1
   3. Previsualiza todo:              npm run vista
   4. Publica en GitHub:              npm run publicar
`);

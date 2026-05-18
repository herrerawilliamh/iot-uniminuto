import { decks } from './decks.mjs';
import { spawn } from 'child_process';

const COLORS = [
  'bgBlue.bold', 'bgGreen.bold', 'bgYellow.bold',
  'bgMagenta.bold', 'bgCyan.bold', 'bgRed.bold',
];

const semanas = decks.filter(d => d.name !== 'openclass-iot');
const BASE_PORT = 3000;

const commands = [
  `slidev slides.md --open --port ${BASE_PORT}`,
  ...semanas.map((deck, i) => `slidev ${deck.entry} --port ${BASE_PORT + i + 1}`),
];

const names = ['portal', ...semanas.map(d => d.name.replace('iot_', ''))].join(',');
const colors = COLORS.slice(0, commands.length).join(',');

console.log('\n🚀 Iniciando servidores de desarrollo...');
console.log(`   portal  → http://localhost:${BASE_PORT}`);
semanas.forEach((deck, i) => {
  console.log(`   ${deck.name.replace('iot_', '')}  → http://localhost:${BASE_PORT + i + 1}`);
});
console.log('');

spawn('concurrently', ['-n', names, '-c', colors, ...commands], {
  stdio: 'inherit',
  shell: true,
});

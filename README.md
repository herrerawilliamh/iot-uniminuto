# OpenClass IoT · Presentaciones Slidev

Repositorio para diseñar, organizar, exportar y publicar presentaciones académicas de Open Class usando **Slidev**, una plantilla institucional personalizada y archivos Markdown reutilizables por semana.

El proyecto está pensado para sesiones universitarias de 90 minutos, con una presentación web navegable, archivos descargables y publicación automática en GitHub Pages.

---

## 1. Propósito

Este repositorio permite:

- Mantener una plantilla institucional estable.
- Crear un portal principal del curso.
- Trabajar cada semana como una presentación independiente.
- Compilar el curso completo como sitio estático.
- Exportar presentaciones a PDF y PPTX.
- Publicar el sitio en GitHub Pages.
- Activar progresivamente solo las semanas listas.
- Evitar errores de rutas, diapositivas blancas y exportaciones fallidas.

---

## 2. Arquitectura del proyecto

El proyecto usa tres niveles de archivos Markdown:

```txt
slides.md                 → Portal principal del curso
iot_semanaN.md            → Lanzador raíz de cada semana
semanas/iot_semanaN.md    → Contenido real de cada presentación
```

La regla central es:

```txt
slides.md funciona como portal.
iot_semanaN.md importa una semana.
semanas/iot_semanaN.md contiene las diapositivas reales.
```

Esto permite que los recursos públicos, fondos, imágenes, videos y estilos funcionen correctamente desde `public/`.

---

## 3. Estructura recomendada

```txt
openclass-iot/
├─ slides.md
├─ iot_semana1.md
├─ iot_semana2.md
├─ iot_semana3.md
├─ iot_semana4.md
├─ iot_semana5.md
├─ iot_semana6.md
├─ iot_semana7.md
├─ iot_semana8.md
├─ semanas/
│  ├─ iot_semana1.md
│  ├─ iot_semana2.md
│  ├─ iot_semana3.md
│  ├─ iot_semana4.md
│  ├─ iot_semana5.md
│  ├─ iot_semana6.md
│  ├─ iot_semana7.md
│  └─ iot_semana8.md
├─ public/
│  ├─ fondos/
│  ├─ imagenes/
│  ├─ videos/
│  └─ descargas/
├─ scripts/
│  ├─ decks.mjs
│  ├─ build-site.mjs
│  └─ export-downloads.mjs
├─ theme/
│  └─ uniminuto/
│     ├─ package.json
│     ├─ components/
│     ├─ layouts/
│     └─ styles/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md
```

---

## 4. Rol de cada archivo Markdown

### 4.1. `slides.md`

Es el portal principal del curso.

Debe incluir:

- Portada del curso.
- Descripción general.
- Ruta de aprendizaje.
- Enlaces a las semanas disponibles.
- Enlaces de descarga a PDF o PPTX.

Ejemplo de inicio correcto:

```md
---
theme: uniminuto
title: Internet de las cosas — Open Class
transition: fade
routerMode: hash
drawings:
  persist: false
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Open Class

::date::
2026
```

No se debe crear una diapositiva vacía antes de la portada.

---

### 4.2. `iot_semanaN.md`

Son los lanzadores raíz.

Ejemplo:

```txt
iot_semana1.md
```

Contenido recomendado:

```md
---
theme: uniminuto
title: Internet de las cosas — Semana 1
transition: fade
routerMode: hash
drawings:
  persist: false
src: ./semanas/iot_semana1.md
---
```

Este archivo no debe tener diapositivas adicionales. Solo importa el contenido real ubicado en `semanas/`.

---

### 4.3. `semanas/iot_semanaN.md`

Contiene la presentación real de cada semana.

Debe iniciar directamente con un layout:

```md
---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Semana 1

::date::
Mayo 04, 2026
```

No debe incluir configuración global como:

```md
theme:
title:
transition:
routerMode:
drawings:
```

Esa configuración pertenece únicamente al lanzador raíz.

---

## 5. Fuente de control de semanas

El archivo más importante para construir y exportar el sitio es:

```txt
scripts/decks.mjs
```

Allí se define qué presentaciones están activas, cuáles se construyen y cuáles se exportan.

Ejemplo recomendado:

```js
export const decks = [
  {
    id: "openclass-iot",
    title: "Portal principal",
    entry: "slides.md",
    out: "dist",
    route: "",
    enabled: true,
    exportable: true,
    formats: ["pdf", "pptx"],
  },
  {
    id: "iot_semana1",
    title: "Semana 1",
    entry: "iot_semana1.md",
    out: "dist/semanas/iot_semana1",
    route: "semanas/iot_semana1/",
    enabled: true,
    exportable: true,
    formats: ["pdf", "pptx"],
  },
  {
    id: "iot_semana2",
    title: "Semana 2",
    entry: "iot_semana2.md",
    out: "dist/semanas/iot_semana2",
    route: "semanas/iot_semana2/",
    enabled: false,
    exportable: false,
    formats: ["pdf"],
  },
];
```

Para publicar una nueva semana:

1. Revisar que la semana funcione localmente.
2. Cambiar `enabled` a `true`.
3. Cambiar `exportable` a `true` solo si también debe generar PDF o PPTX.
4. Hacer commit y push.

Esto evita que una semana incompleta detenga todo el despliegue.

---

## 6. Layouts disponibles

La plantilla institucional incluye estos layouts:

```txt
slide-01-portada
slide-02-titulo
slide-03-imagen-izquierda
slide-04-imagen-derecha
slide-05-titulo-superior-texto-derecha
slide-06-titulo-superior-texto-izquierda
slide-07-multimedia-con-titulo
slide-08-titulo-texto
slide-09-objetivos
slide-10-titulo-dos-columnas
slide-11-dos-titulos-dos-columnas
slide-12-cierre
```

Nombres correctos:

```txt
slide-08-titulo-texto
slide-09-objetivos
```

No usar:

```txt
slide-08-objetivos
slide-09-titulo-texto
```

---

## 7. Uso correcto de slots

Los layouts personalizados usan slots de Slidev.

Ejemplo:

```md
::title::
Título de la diapositiva

::content::
Contenido de la diapositiva.
```

No se deben cerrar los slots con `::`.

Incorrecto:

```md
::title::
Título de la diapositiva
::
```

Correcto:

```md
::title::
Título de la diapositiva
```

---

## 8. Slots por layout

### Portada

```md
::title::
Nombre del curso

::week::
Semana 1

::date::
Mayo 04, 2026
```

### Título y contenido

```md
::title::
Título de la diapositiva

::content::
Contenido de la diapositiva.
```

### Imagen

```md
::title::
Título de la diapositiva

::image::
<img src="/imagenes/favicon.png" alt="Descripción de la imagen" />

::content::
Texto de apoyo.
```

### Video o multimedia

```md
::title::
Video de apoyo

::media::
<iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO" allowfullscreen></iframe>
```

### Dos columnas

```md
::title::
Título general

::left::
Contenido de la columna izquierda.

::right::
Contenido de la columna derecha.
```

### Dos títulos y dos columnas

```md
::leftTitle::
Título izquierdo

::rightTitle::
Título derecho

::left::
Contenido izquierdo.

::right::
Contenido derecho.
```

---

## 9. Recursos públicos

Los recursos deben ubicarse dentro de `public/`.

Ejemplos:

```txt
public/fondos/slide-01-portada.png
public/imagenes/favicon.png
public/videos/test.mp4
public/descargas/
```

Desde Markdown o Vue se referencian así:

```html
<img src="/imagenes/favicon.png" alt="Descripción de la imagen" />
<img src="/fondos/slide-01-portada.png" alt="Fondo institucional" />
<video src="/videos/test.mp4" controls></video>
```

No usar rutas como:

```txt
../public/imagenes/favicon.png
/public/imagenes/favicon.png
./imagenes/favicon.png
../imagenes/favicon.png
```

---

## 10. Enlaces desde el portal

Desde `slides.md`, los enlaces a semanas deben usar rutas relativas:

```html
<a href="./semanas/iot_semana1/#/1" target="_self">Semana 1 · Generalidades de IoT</a>
```

No usar:

```txt
iot_semana1.md
/semanas/iot_semana1/
semanas/iot_semana1/index.html
```

Para descargas desde el portal:

```html
<a href="./descargas/iot_semana1.pdf" target="_blank">Descargar PDF Semana 1</a>
<a href="./descargas/iot_semana1.pptx" target="_blank">Descargar PPTX Semana 1</a>
```

Usar rutas relativas ayuda a que el sitio funcione tanto en local como en GitHub Pages.

---

## 11. Instalación

Instalar dependencias:

```powershell
npm install
```

Si hay problemas de instalación:

```powershell
Remove-Item -Recurse -Force .\node_modules -ErrorAction SilentlyContinue
Remove-Item -Force .\package-lock.json -ErrorAction SilentlyContinue
npm install
```

En GitHub Actions se usa:

```bash
npm ci
```

Por eso es importante mantener actualizado `package-lock.json`.

---

## 12. Comandos principales

### Ver todo el sitio localmente

```powershell
npm run dev
```

Este comando debe generar descargas, construir el sitio y servirlo en:

```txt
http://127.0.0.1:4173/
```

### Editar el portal

```powershell
npm run edit:index
```

### Editar una semana

```powershell
npm run edit:s1
npm run edit:s2
npm run edit:s3
npm run edit:s4
npm run edit:s5
npm run edit:s6
npm run edit:s7
npm run edit:s8
```

### Construir el sitio

```powershell
npm run build:all
```

### Exportar descargas

```powershell
npm run export:downloads
```

### Construir y servir sin exportar

```powershell
npm run preview:static
```

### Exportar, construir y servir

```powershell
npm run preview:pages
```

---

## 13. `package.json` recomendado

La sección de scripts debería funcionar así:

```json
{
  "scripts": {
    "dev": "npm run preview:pages",

    "edit:index": "slidev slides.md --open --port 3000",
    "edit:s1": "slidev iot_semana1.md --open --port 3001",
    "edit:s2": "slidev iot_semana2.md --open --port 3002",
    "edit:s3": "slidev iot_semana3.md --open --port 3003",
    "edit:s4": "slidev iot_semana4.md --open --port 3004",
    "edit:s5": "slidev iot_semana5.md --open --port 3005",
    "edit:s6": "slidev iot_semana6.md --open --port 3006",
    "edit:s7": "slidev iot_semana7.md --open --port 3007",
    "edit:s8": "slidev iot_semana8.md --open --port 3008",

    "dev:s1": "npm run edit:s1",
    "dev:s2": "npm run edit:s2",
    "dev:s3": "npm run edit:s3",
    "dev:s4": "npm run edit:s4",
    "dev:s5": "npm run edit:s5",
    "dev:s6": "npm run edit:s6",
    "dev:s7": "npm run edit:s7",
    "dev:s8": "npm run edit:s8",

    "clean": "node -e \"require('fs').rmSync('dist',{recursive:true,force:true})\"",
    "clean:downloads": "node -e \"require('fs').rmSync('public/descargas',{recursive:true,force:true})\"",
    "clean:cache": "node -e \"require('fs').rmSync('.slidev',{recursive:true,force:true}); require('fs').rmSync('node_modules/.vite',{recursive:true,force:true})\"",

    "build:all": "node scripts/build-site.mjs",
    "export:downloads": "node scripts/export-downloads.mjs",

    "preview:static": "npm run build:all && http-server dist -p 4173 -c-1",
    "preview:pages": "npm run export:downloads && npm run build:all && http-server dist -p 4173 -c-1"
  }
}
```

---

## 14. Exportación a PDF y PPTX

La exportación se controla desde:

```txt
scripts/export-downloads.mjs
```

Los archivos generados quedan en:

```txt
public/descargas/
```

Luego, al construir el sitio, Slidev copia esos archivos hacia:

```txt
dist/descargas/
```

Advertencia importante:

- El PDF es útil para estudiantes.
- El PPTX generado por Slidev puede no ser editable como texto.
- Antes de publicar un PPTX, revisar que no incluya notas o información interna que no deba compartirse.

Para publicar solo PDF en una semana, usar:

```js
formats: ["pdf"]
```

Para publicar PDF y PPTX:

```js
formats: ["pdf", "pptx"]
```

---

## 15. Publicación en GitHub Pages

El despliegue se hace mediante GitHub Actions.

Archivo:

```txt
.github/workflows/deploy.yml
```

Versión recomendada:

```yaml
name: Deploy Slidev to GitHub Pages

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
      SITE_BASE: /${{ github.event.repository.name }}/

    steps:
      - name: Clonar repositorio
        uses: actions/checkout@v5

      - name: Configurar Node.js
        uses: actions/setup-node@v5
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

      - name: Preparar GitHub Pages
        run: touch dist/.nojekyll

      - name: Subir artefacto de GitHub Pages
        uses: actions/upload-pages-artifact@v5.0.0
        with:
          path: dist
          include-hidden-files: true

  deploy:
    name: Deploy GitHub Pages
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Publicar en GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5.0.0
```

En GitHub, configurar:

```txt
Settings → Pages → Build and deployment → Source: GitHub Actions
```

---

## 16. Base del sitio

En local, el sitio funciona con base:

```txt
/
```

En GitHub Pages, si el repositorio se llama:

```txt
iot-uniminuto
```

la base pública normalmente será:

```txt
/iot-uniminuto/
```

Por eso `scripts/build-site.mjs` debe leer la variable:

```txt
SITE_BASE
```

En GitHub Actions se define así:

```yaml
env:
  SITE_BASE: /${{ github.event.repository.name }}/
```

Si el proyecto se publica con dominio personalizado, se puede cambiar a:

```yaml
env:
  SITE_BASE: /
```

---

## 17. Reglas de contenido Open Class

Cada presentación semanal debe responder a una sesión de 90 minutos.

Debe incluir:

1. Portada.
2. Título de la sesión.
3. Objetivos de aprendizaje.
4. Ruta de trabajo.
5. Desarrollo conceptual.
6. Ejemplos aplicados.
7. Actividad didáctica breve.
8. Actividad práctica.
9. Producto esperado.
10. Preguntas de análisis.
11. Socialización.
12. Resolución de dudas.
13. Cierre académico.
14. Recordatorio institucional.
15. Diapositiva final.

---

## 18. Criterios Open Class

Cada semana debe procurar cumplir:

1. Tolerancia máxima de 5 minutos.
2. Desarrollo suficiente de la temática.
3. Presentación diferente al aula virtual.
4. Actividad didáctica breve, máximo 20 minutos.
5. Duración efectiva total de 90 minutos.
6. Resolución de dudas en máximo 15 minutos.
7. Recordatorio de Encuesta de Percepción Estudiantil.

---

## 19. Notas del presentador

Cada diapositiva puede incluir notas del presentador en comentarios HTML:

```md
<!--
Notas del presentador:
Explicar el concepto con un ejemplo cercano al contexto profesional de los estudiantes.
-->
```

Para la publicación web se usa:

```txt
--without-notes
```

Esto evita que las notas queden incluidas en el sitio construido.

Antes de publicar archivos PPTX, revisar manualmente si las notas quedaron incorporadas en el archivo exportado.

---

## 20. Problemas frecuentes

### Aparece una diapositiva blanca al inicio

Causas probables:

- El bloque global quedó separado de la portada.
- El archivo interno de semana incluye configuración global.
- El lanzador raíz tiene contenido adicional.

Solución:

- En `slides.md`, poner `layout: slide-01-portada` dentro del primer bloque.
- En `iot_semanaN.md`, usar únicamente el bloque con `src`.
- En `semanas/iot_semanaN.md`, iniciar directamente con `layout`.

---

### Error de layout desconocido

Mensaje posible:

```txt
Unknown layout "slide-08-objetivos"
```

Solución:

```txt
slide-08-titulo-texto
slide-09-objetivos
```

---

### Error al exportar PDF o PPTX

Probar primero la semana individual:

```powershell
npm run edit:s2
```

Luego exportarla sola:

```powershell
npx slidev export iot_semana2.md --format pdf --timeout 120000 --wait 3000 --wait-until none --output public/descargas/iot_semana2.pdf
```

Si falla, revisar esa semana antes de activarla en `scripts/decks.mjs`.

Mientras se corrige, dejarla así:

```js
enabled: false,
exportable: false
```

---

### El despliegue falla en GitHub Actions

Revisar el paso exacto que falló:

```txt
Actions → Build Slidev site
```

Pasos comunes donde puede fallar:

```txt
npm ci
npx playwright install chromium --with-deps
npm run export:downloads
npm run build:all
```

Si falla en `export:downloads`, probablemente una semana activa no está renderizando bien.

---

### Los enlaces funcionan localmente, pero no en GitHub Pages

Revisar:

1. Que `SITE_BASE` esté configurado.
2. Que los enlaces del portal sean relativos.
3. Que no se usen rutas absolutas como `/descargas/...` en el portal.
4. Que el sitio esté publicado desde GitHub Actions.

---

## 21. `.gitignore` recomendado

```gitignore
node_modules/
dist/
.slidev/
node_modules/.vite/
.DS_Store
*.log
.env
```

La carpeta `public/descargas/` puede generarse automáticamente. No es necesario editar manualmente `dist/`.

---

## 22. Flujo de trabajo recomendado

### Crear o editar una semana

Editar:

```txt
semanas/iot_semanaN.md
```

### Probar una semana

```powershell
npm run edit:sN
```

Ejemplo:

```powershell
npm run edit:s1
```

### Activar la semana

Editar:

```txt
scripts/decks.mjs
```

Cambiar:

```js
enabled: true,
exportable: true
```

### Ver todo localmente

```powershell
npm run dev
```

### Subir cambios

```powershell
git add .
git commit -m "Actualizar presentación Semana N"
git push origin main
```

GitHub Actions publicará el sitio automáticamente.

---

## 23. Reglas finales

- No editar `dist/` manualmente.
- No compilar directamente archivos dentro de `semanas/`.
- No poner configuración global dentro de `semanas/iot_semanaN.md`.
- No cerrar slots con `::`.
- No usar layouts inexistentes.
- No usar rutas relativas hacia `../public`.
- No enlazar archivos `.md` desde el portal.
- No enlazar `index.html` desde el portal.
- Exportar desde los lanzadores raíz.
- Activar solo las semanas listas.
- Revisar los PPTX antes de publicarlos.
- Mantener la plantilla institucional dentro de `theme/uniminuto`.

---

## 24. Archivos complementarios sugeridos

Para mantener el README más limpio, se recomienda mover los prompts a:

```txt
docs/prompts.md
```

Contenido sugerido:

```txt
- Prompt maestro para generar una semana.
- Prompt maestro para actualizar slides.md.
- Prompt corto para corregir formato Slidev.
- Reglas de slots.
- Reglas de notas del presentador.
```

El README debe explicar cómo operar el proyecto. Los prompts pueden mantenerse como documentación complementaria.

---

## 25. Resumen operativo

```txt
Portal:
slides.md

Lanzadores:
iot_semana1.md ... iot_semana8.md

Contenido real:
semanas/iot_semana1.md ... semanas/iot_semana8.md

Control de publicación:
scripts/decks.mjs

Recursos:
public/

Plantilla:
theme/uniminuto/

Ver todo:
npm run dev

Editar semana:
npm run edit:s1

Construir:
npm run build:all

Exportar:
npm run export:downloads

Publicar:
GitHub Pages con GitHub Actions
```

---

## 26. Estado del proyecto

El proyecto queda preparado para mantener presentaciones Open Class semanales con Slidev, una plantilla institucional estable, exportaciones descargables y despliegue progresivo en GitHub Pages.

La arquitectura permite:

- Crear nuevas semanas con rapidez.
- Probar cada presentación por separado.
- Construir el sitio completo.
- Exportar PDF y PPTX.
- Publicar solo las semanas listas.
- Evitar que una semana incompleta detenga todo el despliegue.
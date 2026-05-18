# OpenClass IoT · Presentaciones Slidev

Presentaciones académicas semanales del curso **Internet de las cosas**, construidas con [Slidev](https://sli.dev), una plantilla institucional UNIMINUTO y Markdown por semana. El sitio completo se publica automáticamente en GitHub Pages.

---

## Secciones

- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Instalacion](#instalacion)
- [Comandos principales](#comandos-principales)
- [Flujo de trabajo semana a semana](#flujo-de-trabajo-semana-a-semana)
- [Control de semanas activas](#control-de-semanas-activas)
- [Layouts disponibles](#layouts-disponibles)
- [Uso de slots](#uso-de-slots)
- [Bloques de codigo](#bloques-de-codigo)
- Recursos publicos
- [Notas del presentador](#notas-del-presentador)
- [Publicacion en GitHub Pages](#publicacion-en-github-pages)
- [Plantilla para nuevos cursos](#plantilla-para-nuevos-cursos)
- [Solucion de problemas](#solucion-de-problemas)
- [Reglas y buenas practicas](#reglas-y-buenas-practicas)

---

## Arquitectura del proyecto

El proyecto usa tres niveles de archivos Markdown:

```text
slides.md                →  Portal principal del curso (home)
iot_semanaN.md           →  Lanzador raíz de cada semana
semanas/iot_semanaN.md   →  Contenido real de la presentación
```

Esta separación permite que los recursos públicos (fondos, imágenes, videos) funcionen correctamente desde `public/` y que cada semana se pueda construir, exportar y servir de forma independiente.

---

## Estructura de carpetas

```text
openclass-iot/
├── slides.md                     ← Portal del curso
├── iot_semana1.md                ← Lanzador semana 1
├── iot_semana2.md
├── ...
├── iot_semana8.md
│
├── semanas/
│   ├── iot_semana1.md            ← Contenido real semana 1
│   ├── iot_semana2.md
│   └── iot_semana3.md
│
├── public/
│   ├── favicon.png               ← Favicon del sitio
│   ├── fondos/                   ← Imágenes de fondo de diapositivas
│   ├── imagenes/                 ← Imágenes del curso
│   ├── videos/                   ← Videos del curso
│   └── descargas/                ← PDFs y PPTXs generados
│
├── scripts/
│   ├── decks.mjs                 ← Control central de semanas activas
│   ├── build-site.mjs            ← Construye todas las semanas
│   ├── build-incremental.mjs     ← Construye solo semanas nuevas
│   ├── export-downloads.mjs      ← Exporta PDF y PPTX de todo
│   ├── export-incremental.mjs    ← Exporta solo semanas nuevas
│   ├── dev-all.mjs               ← Lanza todos los servidores dev
│   ├── publicar.mjs              ← Commit + push a GitHub
│   ├── nuevo-curso.mjs           ← CLI para configurar un nuevo curso
│   └── zip-template.mjs          ← Genera la plantilla reutilizable
│
├── theme/
│   └── uniminuto/
│       ├── components/           ← AutoFitText, Counter, FontToggle
│       ├── layouts/              ← 13 layouts institucionales
│       └── styles/               ← CSS base y fuentes
│
├── .github/
│   └── workflows/
│       └── deploy.yml            ← CI/CD a GitHub Pages
│
├── openclass-template.zip        ← Plantilla para nuevos cursos
├── package.json
└── .gitignore
```

---

## Instalacion

```powershell
npm install
```

Si hay conflictos o errores:

```powershell
Remove-Item -Recurse -Force .\node_modules -ErrorAction SilentlyContinue
Remove-Item -Force .\package-lock.json -ErrorAction SilentlyContinue
npm install
```

---

## Comandos principales

### Desarrollo con hot-reload

| Comando | Que hace | Puerto |
| --- | --- | --- |
| `npm run dev` | Abre el portal | 3000 |
| `npm run dev:s1` | Abre semana 1 con hot-reload | 3001 |
| `npm run dev:s2` | Abre semana 2 con hot-reload | 3002 |
| `npm run dev:s3` | Abre semana 3 con hot-reload | 3003 |
| `npm run dev:todo` | Abre portal + todas las semanas activas en paralelo | 3000-300N |

> **Nota:** En modo `dev`, los enlaces del portal a las semanas no funcionan porque cada presentación corre en un puerto distinto. Para navegación completa entre semanas, usar `npm run vista`.

---

### Previsualizacion completa

| Comando | Que hace |
| --- | --- |
| `npm run vista` | Limpia, exporta PDFs/PPTXs, construye todo y abre el navegador en el portal |
| `npm run preview:static` | Construye todo y sirve sin exportar PDFs |

---

### Construccion

| Comando | Que hace |
| --- | --- |
| `npm run build:all` | Reconstruye todo desde cero |
| `npm run build:incremental` | Construye solo las semanas que aún no están en `dist/` |

---

### Exportacion de descargas

| Comando | Que hace |
| --- | --- |
| `npm run export:downloads` | Exporta PDF y PPTX de todas las semanas activas |
| `npm run export:incremental` | Exporta solo las semanas sin archivos en `public/descargas/` |

---

### Publicacion en GitHub

| Comando | Que hace |
| --- | --- |
| `npm run publicar` | `git add -A` → commit con fecha → `git push` |

Al hacer push, el CI/CD de GitHub Actions construye y despliega el sitio automáticamente.

---

### Limpieza

| Comando | Que hace |
| --- | --- |
| `npm run clean` | Elimina la carpeta `dist/` |
| `npm run clean:downloads` | Elimina los archivos en `public/descargas/` |
| `npm run clean:cache` | Elimina caché de Slidev y Vite |

---

### Plantilla

| Comando | Que hace |
| --- | --- |
| `npm run nuevo` | CLI interactivo para configurar el curso desde la plantilla |
| `npm run zip:template` | Genera `openclass-template.zip` con los últimos cambios |

---

## Flujo de trabajo semana a semana

### Cuando empiezas una semana nueva

1. Crea el contenido en `semanas/iot_semanaN.md`.
2. Prueba localmente con `npm run dev:sN`.
3. Activa la semana en `scripts/decks.mjs` (ver sección siguiente).
4. Publica con `npm run publicar`.

### Cuando ya hay semanas anteriores publicadas

Solo genera la semana nueva sin reconstruir todo:

```powershell
npm run export:incremental
npm run build:incremental
npm run publicar
```

### Para forzar una reconstruccion completa

```powershell
npm run vista
```

Limpia, exporta todo, construye todo y abre el navegador.

---

## Control de semanas activas

El archivo `scripts/decks.mjs` es la fuente de verdad. Solo las semanas listadas aquí se construyen y exportan.

```js
export const decks = [
  {
    name: "openclass-iot",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: true,
  },
  {
    name: "iot_semana1",
    entry: "iot_semana1.md",
    out: "dist/semanas/iot_semana1",
    base: withBase("semanas/iot_semana1/"),
    exportable: true,
  },
  // Agrega aquí cada semana cuando el contenido esté listo.
];
```

Para activar la semana 4, agrega este bloque antes del comentario final:

```js
{
  name: "iot_semana4",
  entry: "iot_semana4.md",
  out: "dist/semanas/iot_semana4",
  base: withBase("semanas/iot_semana4/"),
  exportable: true,
},
```

`dev:todo` también se actualiza automáticamente: lee `decks.mjs` y lanza un servidor por cada semana activa.

---

## Layouts disponibles

```text
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
slide-codigo
```

Los nombres de layout son exactos. Usar el nombre equivocado provoca `Unknown layout`.

---

## Uso de slots

Los layouts reciben contenido a través de slots con la sintaxis `::nombre::`. **No se cierran** los slots con `::`.

### Portada — slide-01-portada

```md
---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Semana 1 — Introducción a IoT

::date::
Mayo 4 de 2026
```

### Titulo y texto — slide-08-titulo-texto y slide-09-objetivos

```md
---
layout: slide-08-titulo-texto
---

::title::
Título de la diapositiva

::content::
Contenido de la diapositiva.

- Punto uno.
- Punto dos.
```

### Imagen izquierda o derecha — slide-05 y slide-06

```md
---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Título

::image::
<img src="/imagenes/nombre.png" alt="Descripción" />

::content::
Texto de apoyo a la imagen.
```

### Video — slide-07-multimedia-con-titulo

```md
---
layout: slide-07-multimedia-con-titulo
---

::title::
Video de apoyo

::media::
<iframe src="https://www.youtube.com/embed/ID" allowfullscreen></iframe>
```

### Dos columnas — slide-10-titulo-dos-columnas

```md
---
layout: slide-10-titulo-dos-columnas
---

::title::
Título general

::left::
Contenido columna izquierda.

::right::
Contenido columna derecha.
```

### Dos titulos y dos columnas — slide-11-dos-titulos-dos-columnas

```md
---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Título izquierdo

::rightTitle::
Título derecho

::left::
Contenido izquierdo.

::right::
Contenido derecho.
```

### Cierre — slide-12-cierre

```md
---
layout: slide-12-cierre
---

::message::
¡Hasta la próxima sesión!
```

---

## Bloques de codigo

Para diapositivas con bloques de código extenso usa el layout dedicado `slide-codigo`. Está diseñado para maximizar el espacio del área de código: fondo oscuro, borde amarillo, scroll interno y botón de copiar al pasar el cursor.

El frontmatter del slide:

```yaml
---
layout: slide-codigo
---

::title::
Código completo en MicroPython

::content::
```

El bloque de código en el slot `::content::`:

```python
# {lines:true} activa numeración de líneas
from machine import Pin
from time import sleep

led = Pin(2, Pin.OUT)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

El **botón de copiar** aparece en la esquina superior derecha del bloque al pasar el cursor. Está habilitado con `codeCopy: true` en el frontmatter de cada lanzador (`iot_semanaN.md`) y del portal (`slides.md`).

---

## Recursos publicos

Todos los recursos estáticos van dentro de `public/`. Se referencian con rutas absolutas desde la raíz:

```html
<img src="/imagenes/nombre.png" alt="Descripción" />
<img src="/fondos/slide-01-portada.png" alt="Fondo" />
<video src="/videos/demo.mp4" controls></video>
```

No usar rutas relativas como `../public/`, `./imagenes/` o `/public/imagenes/`.

### Fondos de diapositivas

```text
public/fondos/slide-01-portada.png
public/fondos/slide-02-titulo.png
public/fondos/slide-03-imagen-izquierda.png
public/fondos/slide-04-imagen-derecha.png
public/fondos/slide-05-template.png
public/fondos/slide-06-cierre.png
```

### Favicon

El favicon se carga desde `public/favicon.png`. Está configurado en el frontmatter de cada archivo lanzador:

```yaml
favicon: /favicon.png
```

Para cambiar el favicon, reemplaza `public/favicon.png` con la imagen del nuevo curso.

### Descargas generadas

```text
public/descargas/openclass-iot.pdf
public/descargas/openclass-iot.pptx
public/descargas/iot_semana1.pdf
public/descargas/iot_semana1.pptx
```

### Enlazar descargas desde el portal

```html
<a href="./descargas/iot_semana1.pdf" download>Descargar PDF</a>
<a href="./descargas/iot_semana1.pptx" download>Descargar PPTX</a>
```

### Enlazar semanas desde el portal

```html
<a href="./semanas/iot_semana1/#/1" target="_self">Semana 1</a>
```

---

## Notas del presentador

Se escriben como comentarios HTML dentro de cada diapositiva:

```md
---
layout: slide-08-titulo-texto
---

::title::
Título

::content::
Contenido visible.

<!--
Notas del presentador:
Explicar el concepto con un ejemplo del mundo real.
-->
```

Al construir el sitio se usa `--without-notes`, así que las notas **no quedan visibles** en la web. Sin embargo, al exportar PPTX pueden quedar incrustadas en el archivo — revisarlo antes de compartirlo.

---

## Publicacion en GitHub Pages

### Primer despliegue

En GitHub ir a:

```text
Settings → Pages → Build and deployment → Source: GitHub Actions
```

### Despliegue automatico

Cada `git push` a `main` activa el workflow `.github/workflows/deploy.yml`, que:

1. Instala dependencias (`npm ci`).
2. Instala Chromium para exportar.
3. Exporta PDF y PPTX (`npm run export:downloads`).
4. Construye el sitio con la base correcta (`npm run build:all`).
5. Publica en GitHub Pages.

### Base del sitio

En local la base es `/`. En GitHub Pages es `/<nombre-del-repositorio>/`.

El workflow la define automáticamente:

```yaml
env:
  SITE_BASE: /${{ github.event.repository.name }}/
```

Si el repositorio usa dominio personalizado, cambiar a:

```yaml
env:
  SITE_BASE: /
```

---

## Plantilla para nuevos cursos

`openclass-template.zip` contiene la estructura completa con placeholders genéricos. Permite crear un nuevo curso desde cero sin tocar el repositorio IoT.

### Crear un curso nuevo

1. Descomprimir `openclass-template.zip` en una carpeta nueva.
1. Abrir terminal en esa carpeta.
1. Instalar dependencias: `npm install`
1. Ejecutar el asistente de configuración: `npm run nuevo`

### Que pide el asistente

```text
Nombre corto del curso (ej: iot, bd, redes): bd
Nombre completo del curso: Bases de Datos
Número de semanas [8]: 4
Año [2026]: 2026

¿Configurar tema y fecha de cada semana ahora? [S]:

── Semana 1 ───────────────────────────────
  Tema de la semana: Introducción al modelo relacional
  Fecha de la clase [2026]: Enero 27 de 2026

── Semana 2 ───────────────────────────────
  Tema de la semana: Álgebra relacional
  Fecha de la clase [2026]: Febrero 3 de 2026
...
```

### Que hace el asistente automaticamente

- Renombra `CURSO_semanaN.md` → `bd_semanaN.md` (lanzadores y contenido).
- Rellena la portada de cada semana con el tema y la fecha indicados.
- Actualiza `slides.md`, `package.json`, `scripts/decks.mjs` y `.github/workflows/deploy.yml`.
- Ejecuta `npm install`.

Si se responde `N` a la configuración de semanas, los placeholders `TEMA_SEMANA` y `FECHA_SEMANA` quedan en los archivos para rellenar manualmente.

### Proximos pasos tras el asistente

```powershell
git init
git add -A
git commit -m "Inicio curso Bases de Datos"
npm run dev:s1
```

### Regenerar la plantilla

Si se hacen cambios en el tema, layouts o scripts y se quiere actualizar `openclass-template.zip`:

```powershell
npm run zip:template
```

---

## Solucion de problemas

### Aparece una diapositiva blanca al inicio

Causas comunes:

- El archivo `semanas/iot_semanaN.md` incluye configuración global (`theme:`, `title:`, etc.).
- El lanzador `iot_semanaN.md` tiene diapositivas adicionales además del `src:`.
- El bloque de configuración de `slides.md` está separado de la portada.

Solución:

- `semanas/iot_semanaN.md` debe empezar directamente con `layout:`, sin bloque global.
- `iot_semanaN.md` solo debe tener el bloque con `src:`.

---

### Error de layout desconocido

```text
Unknown layout "slide-08-objetivos"
```

Los nombres son exactos. Consultar la sección [Layouts disponibles](#layouts-disponibles).

---

### El codigo en la diapositiva se corta y no hace scroll

Usar el layout dedicado `slide-codigo` en lugar de `slide-08-titulo-texto`. Ver [Bloques de codigo](#bloques-de-codigo).

---

### Error al exportar PDF o PPTX

Probar primero la semana individualmente:

```powershell
npm run dev:s2
```

Si no renderiza bien en dev, no exportará bien. Corregir el problema antes de ejecutar:

```powershell
npx slidev export iot_semana2.md --format pdf --timeout 120000 --wait 3000 --wait-until none --output public/descargas/iot_semana2.pdf
```

---

### Los enlaces funcionan en local pero no en GitHub Pages

Verificar:

1. Que `SITE_BASE` esté definido en el workflow.
2. Que los enlaces del portal sean relativos (`./semanas/...`, no `/semanas/...`).
3. Que el sitio esté publicado mediante GitHub Actions, no desde una rama.

---

### El despliegue falla en GitHub Actions

Revisar el paso exacto en `Actions → Build Slidev site`. Los más propensos a fallar:

- `npm ci` — dependencias desactualizadas o `package-lock.json` inconsistente.
- `export:downloads` — una semana activa no renderiza bien.
- `build:all` — un layout o slot inexistente.

---

### El texto no cabe en la franja blanca

Los layouts usan `AutoFitText`, que reduce el tamaño de fuente automáticamente hasta el mínimo configurado. Si el texto aún no cabe:

- Dividir el contenido en dos diapositivas.
- Usar un layout de dos columnas.
- Reducir la cantidad de texto.

---

## Reglas y buenas practicas

### Archivos Markdown

- No editar `dist/` manualmente.
- No compilar directamente archivos dentro de `semanas/`.
- No poner configuración global (`theme:`, `title:`, etc.) dentro de `semanas/iot_semanaN.md`.
- No enlazar archivos `.md` ni `index.html` directamente desde el portal.

### Slots

- No cerrar slots con `::`.
- No usar layouts que no existen.

### Rutas

- Usar siempre rutas absolutas desde `/` para recursos en `public/`.
- Usar rutas relativas (`./semanas/...`) para los enlaces entre presentaciones en el portal.

### Codigo

- Usar `layout: slide-codigo` para diapositivas con bloques de código extenso.
- Agregar `{lines:true}` al bloque de código para mostrar numeración de líneas.

### Publicacion

- Activar solo las semanas con contenido revisado en `scripts/decks.mjs`.
- Revisar los PPTX antes de compartirlos (pueden contener notas del presentador).

---

## Referencia rapida de comandos

```text
Editar semana N:         npm run dev:sN
Todo en paralelo:        npm run dev:todo
Ver resultado completo:  npm run vista
Publicar en GitHub:      npm run publicar

Construir todo:          npm run build:all
Construir solo nuevo:    npm run build:incremental
Exportar todo:           npm run export:downloads
Exportar solo nuevo:     npm run export:incremental

Limpiar dist:            npm run clean
Limpiar descargas:       npm run clean:downloads
Limpiar caché:           npm run clean:cache

Configurar nuevo curso:  npm run nuevo
Regenerar plantilla:     npm run zip:template
```

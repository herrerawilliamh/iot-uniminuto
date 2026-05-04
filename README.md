# OpenClass · Presentaciones Slidev

Repositorio para crear, organizar, compilar, exportar y publicar presentaciones académicas de Open Class usando **Slidev**, una plantilla institucional personalizada y archivos Markdown reutilizables por semana.

Este proyecto está diseñado para cursos universitarios de pregrado, especialmente sesiones de 90 minutos que requieren una presentación de apoyo clara, académica, práctica y diferente al contenido del aula virtual.

---

## 1. Propósito del proyecto

Este repositorio permite trabajar presentaciones Open Class de manera ordenada y reutilizable.

Permite:

- Mantener fija la plantilla institucional.
- Crear un portal principal del curso.
- Separar cada semana en un archivo independiente.
- Compilar cada semana como una presentación web propia.
- Exportar cada presentación a PDF o PPTX.
- Publicar todo el curso como sitio estático en GitHub Pages.
- Reutilizar prompts para generar nuevas semanas con IA.
- Evitar errores de rutas, diapositivas blancas y problemas de exportación.

---

## 2. Arquitectura general

La arquitectura final del proyecto se basa en tres tipos de archivos Markdown:

```txt
slides.md                 → Portal principal del curso
iot_semanaN.md            → Lanzador raíz de cada semana
semanas/iot_semanaN.md    → Contenido real de cada presentación
```

La regla principal es:

```txt
slides.md funciona como portal.
iot_semanaN.md funciona como lanzador.
semanas/iot_semanaN.md contiene la presentación real.
```

Esta separación evita problemas de rutas con imágenes, fondos, videos y recursos ubicados en `public/`.

---

## 3. Estructura recomendada del proyecto

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
│  │  ├─ slide-01-portada.png
│  │  ├─ slide-02-titulo.png
│  │  ├─ slide-03-imagen-izquierda.png
│  │  ├─ slide-04-imagen-derecha.png
│  │  ├─ slide-05-template.png
│  │  └─ slide-06-cierre.png
│  ├─ imagenes/
│  │  └─ favicon.png
│  ├─ videos/
│  │  └─ test.mp4
│  └─ descargas/
├─ theme/
│  └─ uniminuto/
│     ├─ package.json
│     ├─ components/
│     ├─ layouts/
│     │  ├─ slide-01-portada.vue
│     │  ├─ slide-02-titulo.vue
│     │  ├─ slide-03-imagen-izquierda.vue
│     │  ├─ slide-04-imagen-derecha.vue
│     │  ├─ slide-05-titulo-superior-texto-derecha.vue
│     │  ├─ slide-06-titulo-superior-texto-izquierda.vue
│     │  ├─ slide-07-multimedia-con-titulo.vue
│     │  ├─ slide-08-titulo-texto.vue
│     │  ├─ slide-09-objetivos.vue
│     │  ├─ slide-10-titulo-dos-columnas.vue
│     │  ├─ slide-11-dos-titulos-dos-columnas.vue
│     │  └─ slide-12-cierre.vue
│     └─ styles/
│        └─ index.ts
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ .github/
   └─ workflows/
      └─ deploy.yml
```

---

## 4. Rol de cada archivo Markdown

### 4.1. `slides.md`

Es el portal principal del curso.

Debe contener:

- Portada del curso.
- Descripción general.
- Perfil de quien desea dedicarse al área.
- Ruta de aprendizaje.
- Enlaces a las 8 semanas.

Este archivo sí incluye configuración global de Slidev.

Ejemplo correcto:

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

---

### 4.2. `iot_semanaN.md`

Son archivos lanzadores ubicados en la raíz.

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

Este archivo no debe tener diapositivas adicionales.

Su función es importar el contenido real desde `semanas/iot_semana1.md`.

---

### 4.3. `semanas/iot_semanaN.md`

Contiene la presentación real de la semana.

Ejemplo:

```txt
semanas/iot_semana1.md
```

Debe iniciar directamente con el layout de la primera diapositiva.

Ejemplo correcto:

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

No debe iniciar con:

```md
---
theme: uniminuto
title: Internet de las cosas — Semana 1
transition: fade
routerMode: hash
drawings:
  persist: false
---
```

Esa configuración pertenece al lanzador raíz `iot_semanaN.md`, no al archivo interno de contenido.

---

## 5. Reglas importantes de Slidev en este proyecto

### 5.1. Separadores de diapositiva

Cada nueva diapositiva se separa con:

```md
---
layout: nombre-del-layout
---
```

Ejemplo:

```md
---
layout: slide-08-titulo-texto
---

::title::
Título de la diapositiva

::content::
Contenido de la diapositiva.
```

---

### 5.2. Evitar diapositivas blancas

Las diapositivas blancas suelen aparecer cuando se deja un bloque global vacío y luego se crea otra diapositiva de portada.

Correcto en `slides.md`:

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
```

Incorrecto en `slides.md`:

```md
---
theme: uniminuto
title: Internet de las cosas — Open Class
transition: fade
routerMode: hash
drawings:
  persist: false
---

---
layout: slide-01-portada
---
```

Ese segundo caso puede generar una diapositiva en blanco antes de la portada.

---

### 5.3. Evitar configuración global dentro de `semanas/`

Los archivos internos de semana no deben incluir configuración global.

Incorrecto:

```md
---
theme: uniminuto
title: Internet de las cosas — Semana 1
transition: fade
routerMode: hash
drawings:
  persist: false
layout: slide-01-portada
---
```

Correcto:

```md
---
layout: slide-01-portada
---
```

---

## 6. Uso correcto de slots

Los layouts personalizados usan slots.

La forma correcta es:

```md
::title::
Título de la diapositiva

::content::
Contenido de la diapositiva
```

No se deben cerrar con `::`.

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

## 7. Slots por tipo de layout

### 7.1. Portada

```md
::title::
Nombre del curso

::week::
Semana 1

::date::
Mayo 04, 2026
```

---

### 7.2. Layout con título y contenido

```md
::title::
Título de la diapositiva

::content::
Contenido de la diapositiva.
```

---

### 7.3. Layout con imagen

```md
::title::
Título de la diapositiva

::image::
<img src="/imagenes/favicon.png" alt="Descripción de la imagen" />

::content::
Texto de apoyo.
```

---

### 7.4. Layout multimedia

```md
::title::
Video de apoyo

::media::
<iframe src="https://www.youtube.com/embed/2PuFyjAs7JA?si=OX5PQe7n9dqWZ2Tt" allowfullscreen></iframe>
```

---

### 7.5. Layout de dos columnas

```md
::title::
Título general

::left::
Contenido de la columna izquierda.

::right::
Contenido de la columna derecha.
```

---

### 7.6. Layout de dos títulos y dos columnas

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

## 8. Layouts disponibles

Los layouts disponibles en la plantilla institucional son:

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

Nota importante:

En esta plantilla, los nombres correctos son:

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

## 9. Uso de imágenes, videos y recursos públicos

Los recursos públicos deben ubicarse dentro de la carpeta `public/`.

Ejemplos:

```txt
public/imagenes/favicon.png
public/fondos/slide-01-portada.png
public/videos/test.mp4
```

Cuando se referencian desde Markdown o desde layouts Vue, se usan rutas desde la raíz pública:

```html
<img src="/imagenes/favicon.png" alt="Descripción de la imagen" />
```

```html
<img src="/fondos/slide-01-portada.png" alt="Fondo portada UNIMINUTO" />
```

```html
<video src="/videos/test.mp4" controls></video>
```

No usar:

```txt
../public/imagenes/favicon.png
/public/imagenes/favicon.png
./imagenes/favicon.png
../imagenes/favicon.png
```

---

## 10. Instalación del proyecto

Instalar dependencias:

```powershell
npm install
```

Si hay conflictos de instalación:

```powershell
Remove-Item -Recurse -Force .\node_modules -ErrorAction SilentlyContinue
Remove-Item -Force .\package-lock.json -ErrorAction SilentlyContinue
npm install
```

---

## 11. Comandos de desarrollo

Abrir el portal principal:

```powershell
npm run dev
```

Abrir la semana 1:

```powershell
npm run dev:s1
```

Abrir otras semanas:

```powershell
npm run dev:s2
npm run dev:s3
npm run dev:s4
npm run dev:s5
npm run dev:s6
npm run dev:s7
npm run dev:s8
```

---

## 12. Construcción del sitio estático

Construir todas las presentaciones:

```powershell
npm run build:all
```

Servir el sitio construido:

```powershell
npm run preview:static
```

Abrir el portal:

```txt
http://127.0.0.1:4173/
```

Abrir la semana 1:

```txt
http://127.0.0.1:4173/semanas/iot_semana1/#/1
```

No abrir directamente:

```txt
http://127.0.0.1:4173/semanas/iot_semana1/index.html
```

Usar siempre la ruta con `#/1`.

---

## 13. Exportación a PDF y PPTX

Para exportar desde Slidev se requiere `playwright-chromium`.

Instalar dependencias:

```powershell
npm install
```

Exportar el portal principal:

```powershell
npm run export:index:pdf
npm run export:index:pptx
```

Exportar la semana 1:

```powershell
npm run export:s1:pdf
npm run export:s1:pptx
```

Exportar todas las semanas a PDF:

```powershell
npm run export:all:pdf
```

Exportar todas las semanas a PPTX:

```powershell
npm run export:all:pptx
```

Los archivos generados quedan en:

```txt
public/descargas/
```

---

## 14. `package.json` recomendado

```json
{
  "name": "openclass-iot",
  "version": "1.0.0",
  "description": "Presentaciones Open Class del curso Internet de las cosas en Slidev.",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "slidev slides.md --open --port 3000",
    "dev:s1": "slidev iot_semana1.md --open --port 3001",
    "dev:s2": "slidev iot_semana2.md --open --port 3002",
    "dev:s3": "slidev iot_semana3.md --open --port 3003",
    "dev:s4": "slidev iot_semana4.md --open --port 3004",
    "dev:s5": "slidev iot_semana5.md --open --port 3005",
    "dev:s6": "slidev iot_semana6.md --open --port 3006",
    "dev:s7": "slidev iot_semana7.md --open --port 3007",
    "dev:s8": "slidev iot_semana8.md --open --port 3008",

    "clean": "node -e \"require('fs').rmSync('dist',{recursive:true,force:true})\"",
    "mkdir:downloads": "node -e \"require('fs').mkdirSync('public/descargas',{recursive:true})\"",

    "build:index": "slidev build slides.md --out dist --base / --without-notes",
    "build:s1": "slidev build iot_semana1.md --out dist/semanas/iot_semana1 --base /semanas/iot_semana1/ --without-notes",
    "build:s2": "slidev build iot_semana2.md --out dist/semanas/iot_semana2 --base /semanas/iot_semana2/ --without-notes",
    "build:s3": "slidev build iot_semana3.md --out dist/semanas/iot_semana3 --base /semanas/iot_semana3/ --without-notes",
    "build:s4": "slidev build iot_semana4.md --out dist/semanas/iot_semana4 --base /semanas/iot_semana4/ --without-notes",
    "build:s5": "slidev build iot_semana5.md --out dist/semanas/iot_semana5 --base /semanas/iot_semana5/ --without-notes",
    "build:s6": "slidev build iot_semana6.md --out dist/semanas/iot_semana6 --base /semanas/iot_semana6/ --without-notes",
    "build:s7": "slidev build iot_semana7.md --out dist/semanas/iot_semana7 --base /semanas/iot_semana7/ --without-notes",
    "build:s8": "slidev build iot_semana8.md --out dist/semanas/iot_semana8 --base /semanas/iot_semana8/ --without-notes",

    "build:all": "npm run clean && npm run build:index && npm run build:s1 && npm run build:s2 && npm run build:s3 && npm run build:s4 && npm run build:s5 && npm run build:s6 && npm run build:s7 && npm run build:s8",

    "export:index:pdf": "npm run mkdir:downloads && slidev export slides.md --format pdf --output public/descargas/openclass-iot.pdf",
    "export:index:pptx": "npm run mkdir:downloads && slidev export slides.md --format pptx --output public/descargas/openclass-iot.pptx",

    "export:s1:pdf": "npm run mkdir:downloads && slidev export iot_semana1.md --format pdf --output public/descargas/iot_semana1.pdf",
    "export:s1:pptx": "npm run mkdir:downloads && slidev export iot_semana1.md --format pptx --output public/descargas/iot_semana1.pptx",

    "export:s2:pdf": "npm run mkdir:downloads && slidev export iot_semana2.md --format pdf --output public/descargas/iot_semana2.pdf",
    "export:s2:pptx": "npm run mkdir:downloads && slidev export iot_semana2.md --format pptx --output public/descargas/iot_semana2.pptx",

    "export:s3:pdf": "npm run mkdir:downloads && slidev export iot_semana3.md --format pdf --output public/descargas/iot_semana3.pdf",
    "export:s3:pptx": "npm run mkdir:downloads && slidev export iot_semana3.md --format pptx --output public/descargas/iot_semana3.pptx",

    "export:s4:pdf": "npm run mkdir:downloads && slidev export iot_semana4.md --format pdf --output public/descargas/iot_semana4.pdf",
    "export:s4:pptx": "npm run mkdir:downloads && slidev export iot_semana4.md --format pptx --output public/descargas/iot_semana4.pptx",

    "export:s5:pdf": "npm run mkdir:downloads && slidev export iot_semana5.md --format pdf --output public/descargas/iot_semana5.pdf",
    "export:s5:pptx": "npm run mkdir:downloads && slidev export iot_semana5.md --format pptx --output public/descargas/iot_semana5.pptx",

    "export:s6:pdf": "npm run mkdir:downloads && slidev export iot_semana6.md --format pdf --output public/descargas/iot_semana6.pdf",
    "export:s6:pptx": "npm run mkdir:downloads && slidev export iot_semana6.md --format pptx --output public/descargas/iot_semana6.pptx",

    "export:s7:pdf": "npm run mkdir:downloads && slidev export iot_semana7.md --format pdf --output public/descargas/iot_semana7.pdf",
    "export:s7:pptx": "npm run mkdir:downloads && slidev export iot_semana7.md --format pptx --output public/descargas/iot_semana7.pptx",

    "export:s8:pdf": "npm run mkdir:downloads && slidev export iot_semana8.md --format pdf --output public/descargas/iot_semana8.pdf",
    "export:s8:pptx": "npm run mkdir:downloads && slidev export iot_semana8.md --format pptx --output public/descargas/iot_semana8.pptx",

    "export:all:pdf": "npm run export:index:pdf && npm run export:s1:pdf && npm run export:s2:pdf && npm run export:s3:pdf && npm run export:s4:pdf && npm run export:s5:pdf && npm run export:s6:pdf && npm run export:s7:pdf && npm run export:s8:pdf",
    "export:all:pptx": "npm run export:index:pptx && npm run export:s1:pptx && npm run export:s2:pptx && npm run export:s3:pptx && npm run export:s4:pptx && npm run export:s5:pptx && npm run export:s6:pptx && npm run export:s7:pptx && npm run export:s8:pptx",

    "preview:static": "http-server dist -p 4173 -c-1"
  },
  "dependencies": {
    "@fontsource/atkinson-hyperlegible": "^5.2.8",
    "@fontsource/merriweather-sans": "^5.2.7",
    "@fontsource/opendyslexic": "^5.2.5",
    "@slidev/theme-seriph": "latest",
    "slidev-theme-uniminuto": "file:./theme/uniminuto",
    "vue": "^3.5.33"
  },
  "devDependencies": {
    "@slidev/cli": "^52.15.0",
    "@slidev/theme-default": "^0.25.0",
    "http-server": "^14.1.1",
    "playwright-chromium": "^1.56.1",
    "vite": "^7.1.12"
  }
}
```

---

## 15. Archivo `theme/uniminuto/package.json`

La plantilla personalizada debe tener un `package.json` interno.

Ruta:

```txt
theme/uniminuto/package.json
```

Contenido recomendado:

```json
{
  "name": "slidev-theme-uniminuto",
  "version": "0.0.1",
  "type": "module",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light"
  },
  "main": "./styles/index.ts"
}
```

---

## 16. Crear o regenerar los lanzadores raíz

Si se requiere crear nuevamente los archivos `iot_semana1.md` a `iot_semana8.md`, ejecutar:

```powershell
1..8 | ForEach-Object {
  $n = $_
  $content = @"
---
theme: uniminuto
title: Internet de las cosas — Semana $n
transition: fade
routerMode: hash
drawings:
  persist: false
src: ./semanas/iot_semana$n.md
---
"@

  Set-Content -Encoding UTF8 ".\iot_semana$n.md" $content
}
```

---

## 17. Crear archivos base para las semanas faltantes

Si faltan archivos dentro de `semanas/`, se pueden crear así:

```powershell
1..8 | ForEach-Object {
  $n = $_
  $file = ".\semanas\iot_semana$n.md"

  if (-not (Test-Path $file)) {
    $content = @"
---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Semana $n

::date::
2026

<!--
Notas del presentador:
Presentar la semana $n del curso Internet de las cosas.
-->

---
layout: slide-02-titulo
---

::title::
Semana $n en construcción

<!--
Notas del presentador:
Esta diapositiva queda como marcador temporal mientras se desarrolla el contenido de la semana.
-->
"@

    Set-Content -Encoding UTF8 $file $content
  }
}
```

---

## 18. Prompt maestro para generar una semana nueva

Este prompt se usa para generar el contenido real de una semana.

Debe pedirse el contenido para:

```txt
semanas/iot_semanaN.md
```

No para el lanzador raíz.

---

### Prompt recomendado

```txt
Eres un experto en diseño instruccional, Open Class, Slidev y presentaciones académicas universitarias.

Necesito que generes el contenido completo de una presentación en formato Slidev Markdown, lista para copiar y pegar en el archivo:

semanas/iot_semana[N].md

No generes PowerPoint.
No uses tablas.
No expliques el proceso.
Entrega directamente el código completo del archivo Markdown.

IMPORTANTE:
Este archivo será importado desde un lanzador raíz mediante `src`, por tanto NO debe incluir configuración global como:
- theme
- title
- transition
- routerMode
- drawings

El archivo debe iniciar directamente con la primera diapositiva:

---
layout: slide-01-portada
---

Información de la Open Class:
Curso: [escribir curso]
Semana: [escribir semana]
Fecha: [escribir fecha]
Tema central: “[pegar temática]”
Evaluación o actividad relacionada: “[pegar evaluación o actividad]”
Público: estudiantes universitarios de pregrado
Duración total: 90 minutos
Tono: académico, claro, práctico y bien organizado.

Layouts disponibles:
- slide-01-portada
- slide-02-titulo
- slide-03-imagen-izquierda
- slide-04-imagen-derecha
- slide-05-titulo-superior-texto-derecha
- slide-06-titulo-superior-texto-izquierda
- slide-07-multimedia-con-titulo
- slide-08-titulo-texto
- slide-09-objetivos
- slide-10-titulo-dos-columnas
- slide-11-dos-titulos-dos-columnas
- slide-12-cierre

La presentación debe cumplir estos criterios de Open Class:
1. Tolerancia máxima de 5 minutos.
2. Desarrollo suficiente de la temática de la semana.
3. Presentación de apoyo diferente al aula virtual.
4. Actividad didáctica breve, máximo 20 minutos.
5. Duración efectiva total de 90 minutos.
6. Resolución de dudas en máximo 15 minutos.
7. Recordatorio de Encuesta de Percepción Estudiantil.

La presentación debe incluir:
- Título del curso.
- Semana y fecha.
- Título de la sesión.
- Objetivos de aprendizaje.
- Ruta de trabajo para 90 minutos.
- Desarrollo conceptual.
- Ejemplos aplicados.
- Actividad didáctica breve.
- Actividad práctica en Wokwi con ESP32 y MicroPython.
- Código completo en MicroPython.
- Socialización breve.
- Resolución de dudas.
- Cierre académico.
- Recordatorio de Encuesta de Percepción Estudiantil.
- Diapositiva final de cierre.

La actividad práctica debe ser sencilla, guiada y aplicable. Debe incluir:
- Título de la actividad.
- Propósito.
- Componentes necesarios.
- Conexiones sugeridas.
- Código completo en MicroPython.
- Pasos para probar en Wokwi.
- Producto esperado.
- Preguntas de análisis.

Usa correctamente los slots de cada layout.

Para portada:
::title::
::week::
::date::

Para layouts con contenido:
::title::
::content::

Para layouts con imagen o video:
::title::
::image::

o:

::title::
::media::

Para dos columnas:
::title::
::left::
::right::

Para dos títulos:
::leftTitle::
::rightTitle::
::left::
::right::

No cierres los slots con `::`.

Correcto:
::title::
Título de la diapositiva

Incorrecto:
::title::
Título de la diapositiva
::

Cuando una diapositiva requiera imagen, no inventes archivos reales. Usa rutas sugeridas así:

<img src="/imagenes/favicon.png" alt="descripción" />

Cuando una diapositiva requiera video de YouTube, usa:

<iframe src="https://www.youtube.com/embed/2PuFyjAs7JA?si=OX5PQe7n9dqWZ2Tt" allowfullscreen></iframe>

Incluye notas del presentador en comentarios HTML al final de cada diapositiva, así:

<!--
Notas del presentador:
Texto amplio, claro y académico para apoyar la explicación oral.
-->

Entrega únicamente el contenido completo del archivo Markdown.
```

---

## 19. Prompt maestro para actualizar el portal `slides.md`

Este prompt se usa para crear o actualizar el portal principal.

Archivo destino:

```txt
slides.md
```

---

### Prompt recomendado

```txt
Eres un experto en diseño instruccional, Open Class, Slidev y presentaciones académicas universitarias.

Necesito que generes el contenido completo del archivo principal slides.md para un portal de presentaciones del curso.

No generes PowerPoint.
No uses tablas.
No expliques el proceso.
Entrega directamente el código completo del archivo slides.md.

Configuración obligatoria del archivo:

---
theme: uniminuto
title: [Nombre del curso] — Open Class
transition: fade
routerMode: hash
drawings:
  persist: false
layout: slide-01-portada
---

El archivo slides.md debe funcionar como portal general del curso y debe incluir:
- Portada.
- Descripción general del curso.
- Qué debería saber una persona que quiera dedicarse al tema del curso.
- Ruta de aprendizaje del curso.
- Enlaces a las 8 semanas.

Los enlaces deben usar este formato:

<a href="./semanas/iot_semana1/#/1" target="_self">Semana 1 · [Nombre de la semana]</a>

No uses enlaces a archivos .md.
No uses enlaces a index.html.
No uses tablas.

Layouts disponibles:
- slide-01-portada
- slide-02-titulo
- slide-03-imagen-izquierda
- slide-04-imagen-derecha
- slide-05-titulo-superior-texto-derecha
- slide-06-titulo-superior-texto-izquierda
- slide-07-multimedia-con-titulo
- slide-08-titulo-texto
- slide-09-objetivos
- slide-10-titulo-dos-columnas
- slide-11-dos-titulos-dos-columnas
- slide-12-cierre

Usa correctamente los slots:
::title::
::content::
::left::
::right::
::week::
::date::

No cierres los slots con `::`.

Incluye notas del presentador en comentarios HTML al final de cada diapositiva:

<!--
Notas del presentador:
Texto amplio, claro y académico para apoyar la explicación oral.
-->

Entrega únicamente el contenido completo del archivo slides.md.
```

---

## 20. Prompt corto para corregir una presentación ya generada

Usar cuando una semana ya existe, pero se quiere revisar formato, slots y estructura.

```txt
Revisa el siguiente contenido Slidev Markdown para una Open Class.

Necesito que lo corrijas respetando estas reglas:
- No incluir theme, title, transition, routerMode ni drawings si el archivo pertenece a semanas/iot_semanaN.md.
- El archivo debe iniciar con:
  ---
  layout: slide-01-portada
  ---
- No crear diapositivas vacías.
- No cerrar slots con `::`.
- Usar únicamente layouts existentes.
- Corregir slide-08-objetivos por slide-09-objetivos si aparece.
- Corregir slide-09-titulo-texto por slide-08-titulo-texto si aparece.
- Mantener notas del presentador en comentarios HTML.
- No usar tablas.
- Mantener rutas públicas como /imagenes/favicon.png.

Entrega únicamente el Markdown corregido.
```

---

## 21. Crear una nueva semana: flujo recomendado

Para crear una semana nueva:

1. Crear o verificar el lanzador raíz.

Ejemplo:

```txt
iot_semana4.md
```

Contenido:

```md
---
theme: uniminuto
title: Internet de las cosas — Semana 4
transition: fade
routerMode: hash
drawings:
  persist: false
src: ./semanas/iot_semana4.md
---
```

2. Crear o editar el archivo interno.

Ejemplo:

```txt
semanas/iot_semana4.md
```

Inicio correcto:

```md
---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Semana 4

::date::
[Fecha]
```

3. Agregar el enlace en `slides.md`.

```html
<a href="./semanas/iot_semana4/#/1" target="_self">Semana 4 · [Título de la semana]</a>
```

4. Probar en desarrollo.

```powershell
npm run dev:s4
```

5. Construir todo.

```powershell
npm run build:all
```

6. Revisar en navegador.

```powershell
npm run preview:static
```

---

## 22. Publicación en GitHub Pages

El proyecto puede publicarse como sitio estático usando GitHub Actions.

Archivo recomendado:

```txt
.github/workflows/deploy.yml
```

Contenido sugerido:

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
    runs-on: ubuntu-latest

    steps:
      - name: Clonar repositorio
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Instalar dependencias
        run: npm ci

      - name: Construir portal y semanas
        run: |
          REPO="${GITHUB_REPOSITORY#*/}"
          BASE="/${REPO}/"

          npx slidev build slides.md --out dist --base "$BASE" --without-notes
          npx slidev build iot_semana1.md --out dist/semanas/iot_semana1 --base "${BASE}semanas/iot_semana1/" --without-notes
          npx slidev build iot_semana2.md --out dist/semanas/iot_semana2 --base "${BASE}semanas/iot_semana2/" --without-notes
          npx slidev build iot_semana3.md --out dist/semanas/iot_semana3 --base "${BASE}semanas/iot_semana3/" --without-notes
          npx slidev build iot_semana4.md --out dist/semanas/iot_semana4 --base "${BASE}semanas/iot_semana4/" --without-notes
          npx slidev build iot_semana5.md --out dist/semanas/iot_semana5 --base "${BASE}semanas/iot_semana5/" --without-notes
          npx slidev build iot_semana6.md --out dist/semanas/iot_semana6 --base "${BASE}semanas/iot_semana6/" --without-notes
          npx slidev build iot_semana7.md --out dist/semanas/iot_semana7 --base "${BASE}semanas/iot_semana7/" --without-notes
          npx slidev build iot_semana8.md --out dist/semanas/iot_semana8 --base "${BASE}semanas/iot_semana8/" --without-notes

          touch dist/.nojekyll

      - name: Subir artefacto de GitHub Pages
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Publicar en GitHub Pages
        uses: actions/deploy-pages@v4
```

Después, en GitHub:

```txt
Settings → Pages → Build and deployment → Source: GitHub Actions
```

---

## 23. `.gitignore` recomendado

```gitignore
node_modules/
dist/
.slidev/
.DS_Store
*.log
.env
```

---

## 24. Problemas comunes y soluciones

### 24.1. Aparecen diapositivas blancas al inicio

Causa probable:

- Bloque global separado de la portada.
- Lanzador raíz con un bloque vacío y luego `src`.
- Archivo interno de semana con configuración global.

Solución:

- En `slides.md`, poner `layout: slide-01-portada` dentro del primer bloque.
- En `iot_semanaN.md`, usar un único bloque con `src`.
- En `semanas/iot_semanaN.md`, iniciar directamente con `layout`.

---

### 24.2. Error con `/imagenes/favicon.png`

Mensaje posible:

```txt
Could not resolve '/imagenes/favicon.png'
```

Causa probable:

Se está compilando directamente:

```txt
semanas/iot_semanaN.md
```

Solución:

Compilar el lanzador raíz:

```powershell
slidev build iot_semana1.md
```

No compilar directamente:

```powershell
slidev build semanas/iot_semana1.md
```

---

### 24.3. Error de layout desconocido

Mensaje posible:

```txt
Unknown layout "slide-08-objetivos"
```

Solución:

Usar los nombres reales de esta plantilla:

```txt
slide-08-titulo-texto
slide-09-objetivos
```

---

### 24.4. 404 al abrir una semana

Usar esta ruta:

```txt
http://127.0.0.1:4173/semanas/iot_semana1/#/1
```

No usar:

```txt
http://127.0.0.1:4173/semanas/iot_semana1/index.html
```

---

### 24.5. `rimraf` no se reconoce

Este proyecto no necesita `rimraf`.

El borrado de `dist` se hace con Node:

```json
"clean": "node -e \"require('fs').rmSync('dist',{recursive:true,force:true})\""
```

---

### 24.6. Warnings de npm

Mensajes como estos no bloquean la ejecución:

```txt
npm warn Unknown project config "shamefully-hoist"
npm warn Unknown project config "auto-install-peers"
```

Normalmente aparecen por opciones de `.npmrc` asociadas a `pnpm`.

---

### 24.7. Error al exportar PDF o PPTX

Si aparece error relacionado con Playwright, ejecutar:

```powershell
npm install
```

Si continúa, instalar Chromium para Playwright:

```powershell
npx playwright install chromium
```

---

## 25. Flujo de trabajo recomendado

### 25.1. Editar una semana

Editar:

```txt
semanas/iot_semanaN.md
```

Ejemplo:

```txt
semanas/iot_semana1.md
```

---

### 25.2. Probar una semana

```powershell
npm run dev:s1
```

---

### 25.3. Probar el portal

```powershell
npm run dev
```

---

### 25.4. Construir todo

```powershell
npm run build:all
```

---

### 25.5. Servir el sitio estático

```powershell
npm run preview:static
```

---

### 25.6. Exportar una semana

```powershell
npm run export:s1:pdf
npm run export:s1:pptx
```

---

### 25.7. Exportar todo

```powershell
npm run export:all:pdf
npm run export:all:pptx
```

---

## 26. Convenciones de contenido para Open Class

Cada presentación debe responder a una sesión de 90 minutos.

Debe incluir:

- Portada.
- Presentación de la sesión.
- Objetivos de aprendizaje.
- Ruta de trabajo.
- Desarrollo conceptual.
- Ejemplos aplicados.
- Actividad didáctica breve.
- Actividad práctica.
- Código o recurso técnico si aplica.
- Producto esperado.
- Preguntas de análisis.
- Socialización.
- Dudas.
- Cierre académico.
- Recordatorio de Encuesta de Percepción Estudiantil.
- Diapositiva final de cierre.

---

## 27. Criterios Open Class que debe cumplir cada presentación

Cada presentación debe procurar cumplir estos criterios:

1. Tolerancia máxima de 5 minutos.
2. Desarrollo suficiente de la temática de la semana.
3. Presentación de apoyo diferente al aula virtual.
4. Actividad didáctica breve, máximo 20 minutos.
5. Duración efectiva total de 90 minutos.
6. Resolución de dudas en máximo 15 minutos.
7. Recordatorio de Encuesta de Percepción Estudiantil.

---

## 28. Recomendación de estructura para una semana

Una semana típica puede organizarse así:

```txt
1. Portada.
2. Título de sesión.
3. Objetivos de aprendizaje.
4. Ruta de trabajo para 90 minutos.
5. Actividad corta de integración.
6. Concepto central.
7. Arquitectura o modelo explicativo.
8. Ejemplo aplicado.
9. Comparación o análisis.
10. Video breve o recurso multimedia.
11. Desarrollo conceptual.
12. Aplicaciones prácticas.
13. Actividad guiada.
14. Componentes necesarios.
15. Conexiones sugeridas.
16. Código completo.
17. Pasos de prueba.
18. Producto esperado.
19. Preguntas de análisis.
20. Socialización.
21. Dudas.
22. Cierre académico.
23. Recordatorio institucional.
24. Diapositiva final.
```

---

## 29. Notas del presentador

Cada diapositiva debe incluir notas del presentador en comentario HTML.

Ejemplo:

```md
<!--
Notas del presentador:
Explicar este concepto con un ejemplo cercano al contexto profesional de los estudiantes. Relacionar la idea con situaciones reales de aplicación y abrir una breve pregunta para verificar comprensión.
-->
```

Las notas permiten apoyar la lectura oral durante la clase sin mostrarse como contenido visible de la diapositiva.

---

## 30. Reglas finales del proyecto

- No editar `dist/` manualmente.
- No compilar directamente archivos dentro de `semanas/`.
- No poner configuración global dentro de `semanas/iot_semanaN.md`.
- No cerrar slots con `::`.
- No usar layouts inexistentes.
- No usar rutas relativas como `../public`.
- No enlazar a archivos `.md` desde el portal.
- No enlazar a `index.html` desde el portal.
- Usar siempre enlaces con `#/1`.
- Exportar desde los lanzadores raíz.
- Mantener la plantilla institucional en `theme/uniminuto`.

---

## 31. Resumen operativo

```txt
Portal principal:
slides.md

Lanzadores raíz:
iot_semana1.md ... iot_semana8.md

Contenido real:
semanas/iot_semana1.md ... semanas/iot_semana8.md

Recursos:
public/

Plantilla:
theme/uniminuto/

Build:
npm run build:all

Preview:
npm run preview:static

Exportar:
npm run export:s1:pdf
npm run export:s1:pptx

Publicar:
GitHub Pages con GitHub Actions
```

---

## 32. Estado del proyecto

El proyecto queda preparado para generar y mantener presentaciones Open Class semanales con Slidev, conservando una plantilla institucional estable y un flujo de trabajo reutilizable.

La arquitectura final permite:

- Crear nuevas semanas de forma rápida.
- Probar localmente cada presentación.
- Construir todas las semanas como sitio estático.
- Exportar a PDF y PPTX.
- Publicar en GitHub Pages.
- Mantener el proyecto ordenado y escalable.
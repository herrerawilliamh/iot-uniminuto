function normalizeBase(value) {
    let base = value || "/";
  
    if (!base.startsWith("/")) {
      base = `/${base}`;
    }
  
    if (!base.endsWith("/")) {
      base = `${base}/`;
    }
  
    return base;
  }
  
  const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");
  
  function withBase(path = "") {
    return `${SITE_BASE}${path.replace(/^\/+/, "")}`;
  }
  
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
    {
      name: "iot_semana2",
      entry: "iot_semana2.md",
      out: "dist/semanas/iot_semana2",
      base: withBase("semanas/iot_semana2/"),
      exportable: true,
    },
    {
      name: "iot_semana3",
      entry: "iot_semana3.md",
      out: "dist/semanas/iot_semana3",
      base: withBase("semanas/iot_semana3/"),
      exportable: true,
    },
    {
      name: "iot_semana4",
      entry: "iot_semana4.md",
      out: "dist/semanas/iot_semana4",
      base: withBase("semanas/iot_semana4/"),
      exportable: true,
    },
    {
      name: "iot_semana5",
      entry: "iot_semana5.md",
      out: "dist/semanas/iot_semana5",
      base: withBase("semanas/iot_semana5/"),
      exportable: true,
    },
    {
      name: "iot_semana6",
      entry: "iot_semana6.md",
      out: "dist/semanas/iot_semana6",
      base: withBase("semanas/iot_semana6/"),
      exportable: true,
    },
    // Activa cada semana aquí cuando el contenido esté listo.
  ];
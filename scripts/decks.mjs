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
  
    // Activa estas semanas cuando ya estén revisadas.
    // {
    //   name: "iot_semana2",
    //   entry: "iot_semana2.md",
    //   out: "dist/semanas/iot_semana2",
    //   base: withBase("semanas/iot_semana2/"),
    //   exportable: true,
    // },
  ];
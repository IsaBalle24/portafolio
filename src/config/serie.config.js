const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://IsaBalle24.github.io",
  "baseurl": "/portafolio",
  "title": "Portafolio de Obras",
  "subtitle": "Portafolio de obras de la artista Isabel Ballester Rojas",
  "credits": "Por Isabel Ballester Rojas",
  "copyright": "Todos los derechos reservados, 2026",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "soporte",
        "label": "Soporte",
        "type": "text"
      },
      {
        "key": "medio",
        "label": "Medio",
        "type": "text"
      },
      {
        "key": "tipo",
        "label": "Tipo",
        "type": "text"
      },
      {
        "key": "dimensiones",
        "label": "Dimensiones",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "fecha",
      "soporte",
      "medio",
      "tipo",
      "dimensiones"
    ]
  }
};
export default config;
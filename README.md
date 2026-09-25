# J Performance System

Web de entrenamiento personal de Juan Pasquau: running, fuerza, oposiciones,
planes con nutricion, clientes y contacto. React, TypeScript y Vite.

## Versiones

| Version               | Web                                                     | Codigo                         |
| --------------------- | ------------------------------------------------------- | ------------------------------ |
| V2 actual             | [jperformancesystem.es](https://jperformancesystem.es/) | `main`, release `v2.0.0`       |
| V1 historica          | [Vista previa V1](https://jperformancesystem.es/v1/)    | `version/v1`, release `v1.0.0` |
| V1 publicada original | Restaurable desde Actions                               | tag `v1-pages-snapshot`        |

La vista previa V1 se genera a partir de su codigo congelado usando la cadena
de compilacion actual y assets aislados. El snapshot conserva los archivos
publicados originales para una restauracion exacta. No se mezclan componentes
de V1 y V2 en una misma aplicacion.

## Desarrollo

Node.js 22 y npm. El gestor de dependencias de CI es npm (`package-lock.json`).

```sh
npm ci
npm run dev
npm run typecheck
npm run lint -- --quiet
npm run build
npx playwright install chromium
npm run test:site
```

En Windows las pruebas usan Edge; `BROWSER_CHANNEL=chromium` permite cambiarlo.
Los correos se simulan en las pruebas, nunca se envian mensajes reales.
Las capturas e informes se guardan en `qa.local/`, fuera de Git.

## Publicacion y restauracion

Actions > **Publish website** > **Run workflow**, rama `main`:

- `main`: publicar el codigo actual, con V1 accesible en `/v1/`.
- `v2.0.0`: volver a la release inicial de V2, con su vista previa V1.
- `v1-pages-snapshot`: restaurar exactamente la V1 publicada anteriormente.

El despliegue es manual: un merge no sobrescribe una restauracion por sorpresa.
Cada publicacion V2 repite las pruebas antes de desplegar. No usar el antiguo
`gh-pages -d dist`: Pages se gestiona ahora con GitHub Actions.

## Organizacion

- `src/pages/`: rutas actuales. `src/components/v2/`: experiencia V2.
- `src/data/`, `src/constants/`: contenido, precios, regalos y configuracion.
- `src/styles/`: estilos compartidos y por seccion, importados en `src/main.tsx`.
- `public/`: archivos estaticos, dominio y recursos de carga.
- `scripts/`: generacion de HTML por ruta, pruebas y empaquetado de V1.
- `.github/workflows/`: revision de PR y publicacion/restauracion.
- `docs/`: operacion, versiones e informe de revision.
- `docs/archive/`: documentacion historica; los documentos anteriores de la raiz
  se conservan como referencia y no describen necesariamente V2.

Consulta [VERSIONES](docs/VERSIONES.md), [REVISION](docs/REVISION-V2.md)
y [.env.example](.env.example). Nunca incluyas claves privadas en `VITE_*`.

Desarrollada por [Luisotorres3](https://luisotorres3.github.io/).

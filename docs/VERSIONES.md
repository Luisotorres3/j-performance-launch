# Versiones y despliegue

## Referencias permanentes

- `v1.0.0`: codigo V1 en `465946b`, anterior al rediseno.
- `version/v1`: rama para mantenimiento independiente de V1.
- `v1-pages-snapshot`: copia exacta de `origin/gh-pages` antes de publicar V2.
- `v2.0.0`: release inicial V2, etiquetada tras integrar la PR.
- `main`: desarrollo estable de V2, con cambios revisados mediante PR.

No mover ni sobrescribir tags de releases. Para futuras entregas crear `v2.0.1`,
`v2.1.0`, etc. y anadir la referencia a las opciones de `pages.yml` si se quiere
seleccionar esa release desde la interfaz.

## Abrir ambas versiones

- Actual: https://jperformancesystem.es/
- Historica: https://jperformancesystem.es/v1/
- Enlaces V1: `/v1/#/planes`, `/v1/#/contacto`, etc. Usa HashRouter.
- V2: `/planes/`, `/contacto/`, etc. Usa rutas limpias y HTML de entrada propio.

La V1 de demostracion no se indexa y conserva contenido/precios historicos;
no debe usarse como referencia comercial actual. Al restaurar V1 en la raiz,
se restaura el sitio antiguo completo y `/v1/` deja de ser la vista previa.
V2 sigue recuperable desde su release y el workflow.

## Cambiar la version publicada

Desde GitHub: Actions > Publish website > Run workflow > branch main.
Seleccionar `main`, `v2.0.0` o `v1-pages-snapshot`.

```sh
gh workflow run pages.yml --ref main -f version=v1-pages-snapshot
gh run list --workflow pages.yml
gh run watch RUN_ID --exit-status
```

Para volver a V2, ejecutar lo mismo con `version=v2.0.0` o `version=main`.
La restauracion de V1 no requiere instalar dependencias antiguas: se despliegan
los archivos conservados. Ninguna de estas acciones cambia `main`.

## Trabajar localmente sin perder cambios

```sh
git fetch origin --tags
git worktree add ../jps-v1 version/v1
git worktree add --detach ../jps-v2-release v2.0.0
```

Cada carpeta tiene sus dependencias propias. `npm ci` y `npm run dev` en cada
una, usando puertos diferentes. No usar reset --hard para cambiar de version.

## Infraestructura

- Dominio: `jperformancesystem.es`; HTTPS obligatorio, DNS existente preservado.
- Pages: source GitHub Actions. Entorno `github-pages` permite despliegue desde main.
- Configuracion publica opcional en Repository Variables: las mismas `VITE_*`
  de `.env.example`. CAPTCHA privado se configura solo en EmailJS.
- GA4 y CAPTCHA no se habilitan sin configuracion real. EmailJS conserva sus
  identificadores publicos existentes como fallback.
- Nunca publicar `.env`, `node_modules`, resultados QA ni credenciales.
- El workflow de rollback solo se ejecuta desde main; las opciones son cerradas.

Referencia: [workflows oficiales de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

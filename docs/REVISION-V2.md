# Revision de lanzamiento V2

## Alcance

Revision del codigo y de los cambios acumulados, TypeScript, ESLint, build de
produccion, rutas, enlaces internos, carga de imagenes, accesibilidad automatizada,
responsive a 320/390/768/1440 px, planes y regalos, reserva, formulario simulado,
consentimiento y preparacion de GitHub Pages con restauracion independiente.

## Correcciones de esta revision

- Entradas HTML para `/blog/` y `/reviews/`: los aliases ya no dependen de que
  Pages sirva la SPA como 404 antes de redirigir.
- El build no modifica archivos fuente al generar el sitemap.
- Pruebas reproducibles y portables, resultados y capturas excluidos de Git.
- Dependencias compatibles actualizadas; imagenes procesadas con sharp corregido.
- Fuente V1, snapshot del despliegue y releases separados del desarrollo V2.
- Publicacion manual con validacion previa y recuperacion sin reescribir historial.

## Limites que requieren seguimiento

- Auditoria automatizada no equivale a certificacion de accesibilidad, seguridad
  ni cumplimiento legal. Fotos y gradientes requieren tambien revision visual.
- EmailJS: prueba de integracion simulada, sin enviar mensajes reales durante CI.
  Restricciones de origen, cuota, destinatario y CAPTCHA son responsabilidad del
  panel del proveedor y no se pueden garantizar desde este repositorio.
- GA4 y CAPTCHA siguen desactivados salvo configuracion de las variables reales.
- NIF/domicilio y condiciones comerciales deben validarse con el titular; no se
  inventan datos ni se certifica cumplimiento legal.
- V1 es una referencia historica congelada. No recibe las correcciones de V2.
- Revisar el resultado de `npm audit` antes de futuras publicaciones. No se
  fuerzan migraciones mayores de router/toolchain durante una entrega visual.
  Tras actualizaciones compatibles quedan cuatro avisos: tres moderados y uno
  alto. Dos moderados afectan al router; los restantes a Vite/esbuild de
  desarrollo, no al alojamiento estatico de Pages. El servidor local se limita
  a 127.0.0.1. La migracion mayor del router y de Vite queda pendiente.

Los resultados efectivos se adjuntan a la PR y a las ejecuciones de Actions.

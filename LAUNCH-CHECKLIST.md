# Revision de lanzamiento

Fecha: 2026-09-17. Cambios locales; no se ha publicado ni modificado una cuenta externa.

## Los 20 puntos

| # | Punto | Estado y alcance |
|---|---|---|
| 1 | Privacidad | Pagina existente revisada: proveedores, analitica opcional y derechos. Falta validar con el titular los datos fiscales, transferencias internacionales y condiciones reales de los proveedores. |
| 2 | Condiciones | Nueva `/condiciones`, enlazada en el footer. Consulta/entrevista no equivale a contrato o pago. Borrador sujeto a revision profesional antes de publicar. |
| 3 | Secretos | No se encontraron claves privadas en el codigo activo. Identificadores EmailJS son PUBLICOS por diseno. `.env*` ignorados y ejemplo sin secretos. No se audito todo el historial Git. |
| 4 | HTTPS | Redireccion defensiva en produccion y reglas `_redirects` / `_headers` para hosts compatibles. Activar HTTPS obligatorio y certificado en el alojamiento; JS no sustituye una redireccion del servidor. |
| 5 | Cookies | Rechazar/aceptar y reapertura de preferencias. Analitica bloqueada hasta consentimiento especifico. Contacto ya no exige cookies opcionales. Calendly mantiene autorizacion propia. |
| 6 | Titulos y descripciones | Fuente comun `src/data/seo.json`, metadatos por ruta en HTML generado y actualizacion al navegar. Canonical sin parametros privados. |
| 7 | Imagen social | OG y Twitter existentes, imagen publica local y URL absoluta. Cada ruta tiene titulo y descripcion propios en el HTML de compilacion. Verificar que el dominio final sirve los archivos. |
| 8 | Favicon | Logo blanco encuadrado, imagen interna comprimida. |
| 9 | Sitemap y robots | Sitemap de las paginas publicas; checkout excluido. URLs limpias sin hash; enlaces antiguos `/#/...` conservados. |
| 10 | Alt | Imagenes informativas etiquetadas; fondos decorativos con alt vacio. Prueba automatizada de atributos ausentes. |
| 11 | Imagenes | Siete imagenes PNG convertidas a WebP: 12.429.718 a 1.269.944 bytes (90% menos). Originales conservados. |
| 12 | Velocidad | Medidas locales de carga y transferencia en `qa.local/launch-results.json`. No equivalen a Lighthouse ni a datos reales de usuarios. Repetir en el dominio publicado y red movil. |
| 13 | Contraste | Comprobacion automatizada de texto sobre colores solidos y refuerzo del fondo del pie de foto del hero. Fotografias/gradientes requieren revision visual. No constituye certificacion WCAG. |
| 14 | Movil | 33 vistas verificadas a 1440, 390 y 320 px sin desbordamiento horizontal. |
| 15 | 404 | Pagina personalizada con salida a inicio/planes/contacto. `404.html` generado para hosting estatico y metadatos noindex. El codigo HTTP real depende del host. |
| 16 | Enlaces | 30 enlaces internos y enlaces heredados comprobados. Calendly, Instagram y las 10 webs oficiales de eventos respondieron HTTP 200. Otros enlaces externos y el contenido de destinos requieren revision en produccion. |
| 17 | Validacion | Nombre, email, telefono, longitud de mensaje y privacidad; errores visibles; limites y autocomplete. Reserva valida telefono y email antes de abrir Calendly. |
| 18 | Spam | Honeypot, bloqueo de envios simultaneos y limite temporal EmailJS. reCAPTCHA v2 preparado, DESACTIVADO hasta configurar claves y exigir validacion en EmailJS. Los controles cliente se pueden eludir. |
| 19 | Analitica | GA4 opcional, sin peticiones antes de aceptar, sin datos del formulario ni query strings, con desactivacion al rechazar. DESACTIVADA sin ID real. |
| 20 | CTA | Se conserva una accion primaria por superficie: empezar en portada, reservar entrevista en planes, preparar reto y enviar solicitud. WhatsApp queda como alternativa secundaria. |

## Configuracion pendiente del propietario

- Confirmar alojamiento. El repositorio contiene `public/CNAME` y despliegue con `gh-pages`: no se cambia ni publica automaticamente.
- GitHub Pages: Settings > Pages > Enforce HTTPS. Subir `dist` generado con `npm run build`, no solo `vite build`. Cada ruta dispone de su `index.html` y existe `404.html`; GitHub ignora `_headers` y `_redirects`.
- Hosts compatibles (Netlify/Cloudflare Pages): revisar reglas de redireccion y cabeceras en staging. Para Vercel u otros, trasladar las reglas a su formato nativo.
- GA4: completar `VITE_GA_MEASUREMENT_ID`, recompilar y desactivar medicion mejorada automatica (formularios, historial y otros eventos) en el flujo web para que solo se envien los eventos controlados aqui. Verificar DebugView tras consentimiento. No introducir IDs de ejemplo en produccion.
- EmailJS: restringir origenes al dominio real; revisar cuotas y destinatario fijo en la plantilla. Activar reCAPTCHA v2 en la plantilla con su clave PRIVADA en el panel EmailJS, y poner solo la clave PUBLICA en `VITE_RECAPTCHA_SITE_KEY`. Probar primero en staging. Nunca usar una clave secreta en `VITE_*`.
- Completar NIF y domicilio profesional publicables, confirmar si los precios incluyen impuestos, condiciones de renovacion/cancelacion y documentos de los encargados. Los textos legales no certifican cumplimiento ni sustituyen asesoramiento profesional.
- El contenido de las rutas sigue renderizandose con React. Hay HTML con metadatos por ruta para vistas sociales, pero no prerender completo del contenido. Para SEO avanzado considerar prerender/SSR.

## Verificacion reproducible

1. `node scripts/optimize-images.mjs` y `node scripts/generate-favicon.mjs` si cambian los originales.
2. `npm run build` (incluye generacion de rutas, sitemap y 404).
3. `npm run preview -- --host 127.0.0.1 --port 4173`.
4. `node scripts/launch-smoke.mjs` con Playwright disponible; alternativamente configurar `PLAYWRIGHT_MODULE` a su modulo ESM. Nunca envia correos reales: intercepta EmailJS.
5. `node scripts/check-contrast.mjs` para colores solidos visibles.
6. `node scripts/check-consent.mjs` contra el servidor de desarrollo en 5173: proveedor de analitica simulado, sin transmitir datos reales.

Medicion movil local: LCP 3.084 ms y CLS 0 con 4 Mbps, latencia 80 ms y CPU ralentizada 4x. Es una medicion sintetica aislada, no una garantia de rendimiento. Tras el ajuste de contraste no se detectaron fallos de color solido en los textos visibles de las cinco paginas examinadas.

## Referencias

- AEPD, consentimiento y rechazo con igual visibilidad: https://www.aepd.es/preguntas-frecuentes/17-internet-y-redes-sociales/FAQ-1707-importancia-de-las-cookies-en-la-proteccion-de-datos
- Condiciones y derechos del consumidor: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555
- EmailJS, seguridad y proteccion contra spam: https://www.emailjs.com/docs/faq/does-emailjs-expose-my-account-to-spam/
- EmailJS, CAPTCHA validado por el proveedor: https://www.emailjs.com/docs/user-guide/adding-captcha-verification/

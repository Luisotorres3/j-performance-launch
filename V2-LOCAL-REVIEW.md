# J Performance V2 — revisión local

- Desarrollo: http://127.0.0.1:8080/
- Build local: http://127.0.0.1:4173/
- Rama `v2-local`, cambios sin commit. Sin push, merge, PR ni despliegue.

Una rama no guarda por sí sola los cambios sin commit: permanecen en este directorio de trabajo. No cambiar a `main` en este directorio para visualizar la V1 durante esta fase local.

## Cambios incorporados

Portada deportiva con «No es suerte. Es trabajo.», presentación personal de Juan y la nueva fotografía aportada por él, con camiseta y logo azul y dorado. Se muestra completa en su proporción original y se coloca debajo del texto en móvil para mantener visibles la cara y el logo. La biografía también utiliza esta fotografía actualizada. Las fichas de futbolistas tienen dimensiones uniformes.

Base de grafito y blanco roto; azul profundo y dorado como acentos del logo. Fotografía con parallax amortiguado, titulares con entrada escalonada y líneas de progreso. El banner de valores ocupa todo el ancho y es estático, en una sola línea y con altura reducida; en móvil admite desplazamiento horizontal manual. El botón para volver arriba es dorado. Se elimina el escalado de capítulos completos para que fondos, conectores y contenido permanezcan alineados. Sin vídeo automático.

Navegación superior renovada con fondo azul oscuro, logotipo destacado, tipografía más legible y enlaces agrupados con estado activo dorado. Menú móvil adaptado. Retos sustituye a Blog en navegación y pie de página: `/retos` muestra los tres objetivos y `/blog` redirige a `/retos` para conservar enlaces antiguos.

Última adaptación móvil: menú a pantalla completa con unidades dinámicas de viewport y áreas seguras, fondo azul, enlace activo dorado y cierre visible. Se conserva el control de foco y el bloqueo del fondo de Radix. En pantallas bajas el menú permite scroll para mantener accesibles todos los enlaces. Hasta 600 px los capítulos se ajustan al contenido, sin altura mínima de pantalla; portada, método, planes, colaboraciones y retos reducen márgenes y tamaños manteniendo el texto completo. Medición local a 390 × 844: inicio de aproximadamente 15.049 a 12.544 px de altura (17 % menos). Los campos conservan 16 px para evitar zoom al editar en móvil.

Antonio Pérez incorporado como cliente número 15 y destacado primero en la galería. Retrato, posición, biografía y anterior equipo contrastados con su [ficha oficial del FC Barcelona](https://www.fcbarcelona.es/es/futbol-sala/primer-equipo/jugadores/2665481/antonio-perez). Foto oficial descargada a petición de Juan y optimizada a WebP de 73 KB, con atribución visible al club. No se han añadido valoraciones ni resultados deportivos atribuidos al entrenamiento.

Fuente de la fotografía: https://www.fcbarcelona.com/photo-resources/2025/10/03/460c11a8-c2d7-445c-ab56-75aae0b955d7/6-Antonio-Pe-rez-Ortega.jpg?height=750&width=1200 . Titular de la fuente: FC Barcelona; no se presupone una licencia libre. Consulta: 11/09/2026.

Inicio presenta nueve bloques ajustados a su contenido: presentación, método, futbolistas, planes, colaboraciones, Juan, retos, dudas y contacto. Solo la portada mantiene una altura mínima de pantalla completa y el banner queda debajo del primer viewport. Los enlaces entre bloques conservan el recorrido.

Retos futuros propuestos: 10K en Jaén (Noche de San Antón), media maratón en Granada y maratón en Madrid. No se anuncian como participaciones confirmadas. Cada botón abre contacto con el objetivo indicado; los enlaces oficiales permiten consultar las próximas ediciones.

Colaboraciones muestra el logo original de JF Nutrición aportado en el cartel y una invitación para nuevas marcas. Los datos están separados en `src/data/collaborations.ts` para incorporar colaboraciones confirmadas. El formulario recibe también el contexto de propuesta de marca.

El método de Inicio recupera la versión animada con contador y selección 01–05 vinculados al scroll, a petición de Juan. Se conserva la adaptación móvil y el movimiento reducido. Verificada la secuencia de ida y vuelta. La galería de Inicio presenta tres futbolistas, incluido Antonio Pérez primero, con acceso a la página completa.

Los capítulos agrupan contenido y cierre dentro de una misma sección, con navegación final más clara y margen de salto ajustado al navbar. Colaboraciones tiene un bloque azul propio, título, tarjeta de JF y propuesta para marcas. Los retos explican sus distancias: carrera de 10 km, media maratón y maratón, con una descripción breve. Verificados los límites y etiquetas a 320, 390 y 1440 px, sin desbordamiento ni infracciones Axe.

Rediseño editorial de Inicio: dos accesos visuales a entrenamiento y packs JF sustituyen al comparador completo, que queda en `/planes`. Tres adelantos por ciudad y distancia enlazan a `/retos`, donde permanecen las descripciones y los botones de preparación. La colaboración JF ocupa una franja breve; Juan conserva su foto actual, presentación y titulación principal. Hay tres preguntas generales y una única llamada final a hablar con Juan. Las preguntas comerciales siguen en la página de planes. Se evita repetir en Inicio los controles de precios, las condiciones y las fichas completas.

Validación del rediseño: TypeScript, ESLint de los componentes modificados y build correctos. Chrome a 320, 390, 768 y 1440 px sin desbordamientos; tres preguntas, cinco pasos y tres adelantos de retos; portada completa; enlaces a packs conjuntos y retos correctos; sin errores de JavaScript ni infracciones Axe. Altura de Inicio a 390 × 844: aproximadamente 7.602 px. Las comprobaciones históricas del contador 01–05 y del comparador en Inicio ya no aplican a esta nueva estructura.

No hay reseñas. Futbolistas ocupa el tercer capítulo y `/reviews` redirige a `/futbolistas`.

Planes y packs comparten selector. Los cinco planes muestran exactamente los totales mensuales, trimestrales y semestrales indicados por Juan, sin decimales. Básico semestral permite elegir pago completo o dos pagos, sin inventar fechas ni importes de cuotas. Los packs JF mantienen la excepción confirmada: Runner 74,99 €/mes, Fuerza 89,99 €/mes y Opositor 99,99 €/mes.

Diseño de planes renovado: selector de categoría azul y dorado, tarjetas con iconos por modalidad, estado seleccionado visible y ficha de detalle con precio destacado. En móvil las opciones se distribuyen en dos columnas para reducir scroll. Los packs JF comparten los colores y las tarjetas. Verificados los 15 importes, duración en enlaces de entrevista, opción de dos pagos de Básico y los tres precios conjuntos; sin desbordamiento en 320, 390, 768 y 1440 px. Axe sin infracciones en las dos categorías.

La entrevista de Calendly es anterior al pago. Plan, duración y modalidad se conservan en la URL y al recargar. Los packs conjuntos solo admiten el periodo mensual confirmado. El enlace antiguo de Avanzado se interpreta como Profesional.

Los regalos están guardados como borrador interno y no se anuncian como incluidos. Contenido y condiciones pendientes: [V2-CONTENIDO-PENDIENTE.md](V2-CONTENIDO-PENDIENTE.md).

## Verificación

- TypeScript y build correctos. ESLint sin errores; quedan advertencias heredadas.
- Playwright: secuencia 01–05 y regreso 05–01, contador visible y entrada desde el botón de capítulo en 01.
- Responsive: 320, 375, 390, 430, 768, 1024, 1440 y 1920 px; capítulos de altura mínima completa y sin desbordamiento horizontal.
- Comprobación de los 15 importes de planes y de los tres packs conjuntos, selección y recarga del checkout.
- Axe sobre las vistas principales; las comprobaciones automáticas no equivalen a certificación manual.
- Calendly probado mediante respuesta simulada: selección del pack, consentimiento y prefill. No se han hecho reservas, pagos ni envíos reales.
- Scripts, resultados y capturas de QA en `qa.local/`, ignorado por Git.

Última revisión de mosaico, retos, colaboraciones y móvil: Chrome y WebKit de Playwright pasan en 320, 390, 768, 844 (horizontal), 1024 y 1440 px sin desbordamiento horizontal. Comprobados los nueve capítulos, seis valores estáticos, fotografía actualizada, botón dorado, preselección de los tres retos y propuesta de marca, y menú móvil con Escape. Axe no detecta infracciones en inicio, packs conjuntos y contacto con reto. WebKit se probó sobre el build de producción local; no sustituye una prueba en un iPhone físico. Firefox no pudo iniciar en este entorno (timeout), por lo que su compatibilidad queda sin verificar.

Las comprobaciones iniciales también incluyeron menú, Escape, FAQ, cookies y respuestas simuladas de éxito/error en las integraciones. No acreditan la disponibilidad actual de las cuentas externas.

## Aspectos técnicos y límites

Retrato actual de Juan WebP de 182 KB, logotipo de navegación de 6 KB, fuente Anton local, fotografías con carga diferida y páginas secundarias cargadas bajo demanda. HashRouter se conserva, junto con las páginas legales y contacto. Retos sustituye a Blog. No se han añadido dependencias a la aplicación.

Calendly recibe nombre y email como prefill. Teléfono, experiencia, objetivos y comentarios permanecen en el formulario: el proyecto no dispone de un backend para persistir esos campos. Se conserva EmailJS y sus identificadores para el contacto. Las condiciones legales heredadas y las prestaciones pendientes deben revisarse antes de publicar.

Para reiniciar desde una terminal propia: `npm run dev -- --host 127.0.0.1 --port 8080 --strictPort`. El build local se genera con `npm run build` y se sirve con `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort`. No ejecutar `npm run deploy`.

## Publicación

La V2 continúa únicamente en local. No se ha realizado ningún commit, push, merge ni deployment. La web pública sigue intacta. Para autorizar la fase de publicación debes escribir exactamente: `APRUEBO PUBLICAR V2`.

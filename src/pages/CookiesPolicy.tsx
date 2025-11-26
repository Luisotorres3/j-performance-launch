import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/constants/contact";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. ¿Qué son las Cookies?
              </h2>
              <p>
                Las cookies son pequeños archivos de texto que se descargan y almacenan en su dispositivo 
                (ordenador, smartphone, tablet) cuando visita un sitio web. Permiten que el sitio web 
                recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y 
                otras preferencias de visualización) durante un período de tiempo.
              </p>
              <p className="mt-3">
                Las cookies se utilizan para que los sitios web funcionen de manera más eficiente, mejorar 
                la experiencia del usuario y proporcionar información a los propietarios del sitio sobre 
                cómo se utiliza.
              </p>
              <p className="mt-3">
                <strong>Tipos de cookies según su duración:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                <li><strong>Cookies de sesión:</strong> se eliminan automáticamente cuando cierra el navegador</li>
                <li><strong>Cookies persistentes:</strong> permanecen en su dispositivo durante un tiempo determinado</li>
              </ul>
              <p className="mt-3">
                <strong>Tipos de cookies según su titular:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                <li><strong>Cookies propias:</strong> establecidas por el sitio web que está visitando</li>
                <li><strong>Cookies de terceros:</strong> establecidas por dominios externos al sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. ¿Qué Cookies Utilizamos?
              </h2>
              <p>
                En J Performance System utilizamos diferentes tipos de cookies para garantizar el correcto 
                funcionamiento del sitio web y mejorar su experiencia de usuario.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-5">
                Cookies Técnicas (Estrictamente Necesarias)
              </h3>
              <p className="mb-3">
                Estas cookies son esenciales para el correcto funcionamiento del sitio web. Sin ellas, 
                el sitio no funcionaría adecuadamente. No requieren su consentimiento y no pueden 
                desactivarse.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-2 text-left">Cookie</th>
                      <th className="border border-border p-2 text-left">Finalidad</th>
                      <th className="border border-border p-2 text-left">Duración</th>
                      <th className="border border-border p-2 text-left">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">session_id</td>
                      <td className="border border-border p-2">Mantiene la sesión del usuario activa</td>
                      <td className="border border-border p-2">Sesión</td>
                      <td className="border border-border p-2">Propia</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">cookie_consent</td>
                      <td className="border border-border p-2">Almacena la preferencia del usuario sobre cookies</td>
                      <td className="border border-border p-2">1 año</td>
                      <td className="border border-border p-2">Propia</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">preferences</td>
                      <td className="border border-border p-2">Guarda las preferencias de configuración</td>
                      <td className="border border-border p-2">6 meses</td>
                      <td className="border border-border p-2">Propia</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-5">
                Cookies de Terceros
              </h3>
              <p className="mb-3">
                Utilizamos servicios de terceros que pueden establecer sus propias cookies. Estos servicios 
                son necesarios para funcionalidades específicas del sitio web.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary bg-muted/20 p-4 rounded">
                  <p className="font-semibold text-foreground">Google Meet</p>
                  <p className="text-sm mt-2"><strong>Finalidad:</strong> Facilitar videollamadas para consultas y sesiones de entrenamiento online</p>
                  <p className="text-sm mt-1"><strong>Política de Privacidad:</strong>{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-primary hover:underline">https://policies.google.com/privacy</a>
                  </p>
                  <p className="text-sm mt-1"><strong>Gestión de cookies:</strong>{" "}
                    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" 
                       className="text-primary hover:underline">https://policies.google.com/technologies/cookies</a>
                  </p>
                </div>

                <div className="border-l-4 border-primary bg-muted/20 p-4 rounded">
                  <p className="font-semibold text-foreground">Calendly</p>
                  <p className="text-sm mt-2"><strong>Finalidad:</strong> Sistema de gestión y reserva de citas para programar sesiones</p>
                  <p className="text-sm mt-1"><strong>Política de Privacidad:</strong>{" "}
                    <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-primary hover:underline">https://calendly.com/privacy</a>
                  </p>
                  <p className="text-sm mt-1"><strong>Cookies utilizadas:</strong> Cookies de sesión y preferencias para el widget de reserva</p>
                </div>

                <div className="border-l-4 border-primary bg-muted/20 p-4 rounded">
                  <p className="font-semibold text-foreground">EmailJS</p>
                  <p className="text-sm mt-2"><strong>Finalidad:</strong> Servicio de envío de correos electrónicos desde formularios de contacto</p>
                  <p className="text-sm mt-1"><strong>Tipo:</strong> No establece cookies de rastreo; solo procesa datos para envío de emails</p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 mt-5 rounded">
                <p className="font-semibold text-amber-900 dark:text-amber-100">
                  ⚠️ Importante
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm mt-2">
                  Estas cookies de terceros están sujetas a las políticas de privacidad de sus respectivos 
                  proveedores. J Performance System no controla ni es responsable del contenido y políticas 
                  de privacidad de estos terceros.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. ¿Para Qué Utilizamos las Cookies?
              </h2>
              <p>
                Las cookies instaladas en su dispositivo a través de nuestro sitio web tienen las 
                siguientes finalidades:
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-foreground">Funcionamiento Técnico</p>
                    <p className="text-sm">Garantizar el correcto funcionamiento del sitio web y sus funcionalidades básicas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">💾</span>
                  <div>
                    <p className="font-semibold text-foreground">Almacenamiento de Preferencias</p>
                    <p className="text-sm">Recordar sus elecciones y configuraciones (idioma, modo oscuro/claro, etc.)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <p className="font-semibold text-foreground">Seguridad</p>
                    <p className="text-sm">Proteger el sitio web contra actividades fraudulentas y garantizar navegación segura</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-foreground">Comunicación y Contacto</p>
                    <p className="text-sm">Facilitar el funcionamiento de formularios de contacto y reserva de citas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📹</span>
                  <div>
                    <p className="font-semibold text-foreground">Videoconferencias</p>
                    <p className="text-sm">Permitir la realización de videollamadas para consultas y sesiones de entrenamiento</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="font-semibold text-foreground">Gestión de Citas</p>
                    <p className="text-sm">Facilitar la programación y gestión de reservas para sesiones de entrenamiento</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold text-foreground">Mejora de la Experiencia</p>
                    <p className="text-sm">Optimizar la navegación y personalizar contenidos según sus preferencias</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 mt-5 rounded">
                <p className="text-blue-900 dark:text-blue-100 text-sm">
                  <strong>ℹ️ Nota importante:</strong> Este sitio web NO utiliza cookies de publicidad, 
                  marketing o analítica de terceros. Solo empleamos cookies estrictamente necesarias para el 
                  funcionamiento del sitio y la prestación de nuestros servicios.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. ¿Cómo Gestionar y Controlar las Cookies?
              </h2>
              <p>
                Puede configurar su navegador para aceptar, rechazar o eliminar cookies, así como para 
                recibir una notificación antes de que se instale una cookie.
              </p>
              
              <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 mt-4 rounded">
                <p className="font-semibold text-amber-900 dark:text-amber-100">
                  ⚠️ Advertencia
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm mt-2">
                  Si desactiva o rechaza las cookies técnicas, es posible que algunas funcionalidades del 
                  sitio web no funcionen correctamente. Concretamente, no podrá:
                </p>
                <ul className="list-disc pl-5 mt-2 text-amber-800 dark:text-amber-200 text-sm space-y-1">
                  <li>Mantener su sesión iniciada mientras navega</li>
                  <li>Guardar sus preferencias de configuración</li>
                  <li>Utilizar el sistema de reserva de citas (Calendly)</li>
                  <li>Realizar videollamadas de consulta (Google Meet)</li>
                </ul>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-5">
                Configuración por Navegador
              </h3>
              <p className="mb-4">
                A continuación, le proporcionamos enlaces a las instrucciones de los navegadores más comunes:
              </p>

              <div className="space-y-3">
                <div className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">🔵 Google Chrome</p>
                      <p className="text-sm text-muted-foreground mt-1">Configurar cookies en Chrome</p>
                    </div>
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Ver guía →
                    </a>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">🦊 Mozilla Firefox</p>
                      <p className="text-sm text-muted-foreground mt-1">Configurar cookies en Firefox</p>
                    </div>
                    <a
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Ver guía →
                    </a>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">🧠 Safari (macOS/iOS)</p>
                      <p className="text-sm text-muted-foreground mt-1">Configurar cookies en Safari</p>
                    </div>
                    <a
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Ver guía →
                    </a>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">🔶 Microsoft Edge</p>
                      <p className="text-sm text-muted-foreground mt-1">Configurar cookies en Edge</p>
                    </div>
                    <a
                      href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Ver guía →
                    </a>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">🔴 Opera</p>
                      <p className="text-sm text-muted-foreground mt-1">Configurar cookies en Opera</p>
                    </div>
                    <a
                      href="https://help.opera.com/en/latest/web-preferences/#cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Ver guía →
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-5">
                Eliminar Cookies Existentes
              </h3>
              <p>
                Además de configurar su navegador para futuras cookies, también puede eliminar las cookies 
                ya almacenadas en su dispositivo. El proceso varía según el navegador, pero generalmente 
                se encuentra en:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Eliminar datos de navegación</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Administrar datos de sitios web</li>
                <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Borrar datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Información sobre Cookies de Terceros
              </h2>
              <p>
                Los servicios de terceros que utilizamos pueden establecer sus propias cookies cuando 
                interactúa con sus herramientas integradas en nuestro sitio web. J Performance System no 
                controla estas cookies de terceros.
              </p>
              <p className="mt-3">
                Le recomendamos revisar las políticas de privacidad y cookies de estos proveedores para 
                obtener información detallada sobre cómo tratan sus datos:
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Google (Google Meet)</p>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>Política de privacidad:</strong>{" "}
                      <a
                        href="https://policies.google.com/privacy?hl=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </li>
                    <li>
                      <strong>Política de cookies:</strong>{" "}
                      <a
                        href="https://policies.google.com/technologies/cookies?hl=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        https://policies.google.com/technologies/cookies
                      </a>
                    </li>
                    <li>
                      <strong>Gestión de preferencias:</strong>{" "}
                      <a
                        href="https://myaccount.google.com/data-and-privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        https://myaccount.google.com/data-and-privacy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Calendly</p>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>Política de privacidad:</strong>{" "}
                      <a
                        href="https://calendly.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        https://calendly.com/privacy
                      </a>
                    </li>
                    <li>
                      <strong>Política de cookies:</strong>{" "}
                      <a
                        href="https://calendly.com/cookie-notice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        https://calendly.com/cookie-notice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                6. Actualización de la Política de Cookies
              </h2>
              <p>
                J Performance System se reserva el derecho a modificar esta Política de Cookies para:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Adaptar la política a cambios en la legislación vigente</li>
                <li>Reflejar modificaciones en las cookies que utilizamos</li>
                <li>Incorporar nuevos servicios o funcionalidades</li>
                <li>Cumplir con recomendaciones de las autoridades de protección de datos</li>
              </ul>
              <p className="mt-3">
                Cualquier modificación sustancial será comunicada a través de un aviso destacado en el 
                sitio web. La fecha de la última actualización se muestra en la parte superior de este 
                documento.
              </p>
              <p className="mt-3 text-sm font-semibold">
                Le recomendamos revisar periódicamente esta Política de Cookies para mantenerse informado 
                sobre cómo utilizamos las cookies y cómo puede gestionarlas.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                7. Más Información sobre Protección de Datos
              </h2>
              <p>
                Para obtener información completa sobre cómo tratamos sus datos personales, las finalidades, 
                base legal, derechos que le asisten y otra información relevante, consulte nuestra
                <a href="/privacidad" className="text-primary hover:underline font-semibold ml-1">
                  Política de Privacidad
                </a>.
              </p>
              <p className="mt-3">
                También puede consultar nuestro
                <a href="/aviso-legal" className="text-primary hover:underline font-semibold ml-1">
                  Aviso Legal
                </a>{" "}
                para información sobre las condiciones de uso del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                8. Contacto y Consultas
              </h2>
              <p>
                Si tiene preguntas, dudas o consultas sobre nuestra Política de Cookies, puede contactar 
                con nosotros a través de:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <ul className="list-none space-y-2">
                  <li>
                    <strong>Responsable:</strong> Juan Pasquau Lope - J Performance System
                  </li>
                  <li>
                    <strong>Correo electrónico:</strong> {CONTACT_INFO.email}
                  </li>
                  <li>
                    <strong>Teléfono:</strong> {CONTACT_INFO.phoneFormatted}
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-sm">
                Nos comprometemos a responder sus consultas en el menor tiempo posible y proporcionarle 
                toda la información necesaria sobre el uso de cookies en nuestro sitio web.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPolicy;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/constants/contact";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. Responsable del Tratamiento de Datos
              </h2>
              <p>
                De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo 
                y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas 
                en lo que respecta al tratamiento de datos personales (RGPD), y la Ley Orgánica 3/2018, 
                de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales 
                (LOPDGDD), se informa:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <ul className="list-none space-y-2">
                  <li>
                    <strong>Identidad del Responsable:</strong> Juan Pasquau Lope
                  </li>
                  <li>
                    <strong>Nombre comercial:</strong> J Performance System
                  </li>
                  <li>
                    <strong>Correo electrónico de contacto:</strong> {CONTACT_INFO.email}
                  </li>
                  <li>
                    <strong>Teléfono:</strong> {CONTACT_INFO.phoneFormatted}
                  </li>
                  <li>
                    <strong>Sitio web:</strong> https://jperformance.com
                  </li>
                </ul>
              </div>
              <p className="mt-3">
                J Performance System se compromete a proteger la privacidad y garantizar el tratamiento 
                lícito, leal y transparente de los datos personales de conformidad con la normativa vigente.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. Categorías de Datos que Recopilamos
              </h2>
              <p>
                A través del sitio web y en el marco de la prestación de nuestros servicios, podemos 
                recopilar y tratar las siguientes categorías de datos personales:
              </p>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Datos de Identificación y Contacto:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre completo y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Datos Relacionados con el Servicio:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Experiencia deportiva y nivel de condición física</li>
                <li>Objetivos deportivos y de entrenamiento</li>
                <li>Información sobre lesiones previas o actuales (si aplica)</li>
                <li>Preferencias y disponibilidad horaria</li>
                <li>Comentarios y observaciones adicionales</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Datos de Navegación y Técnicos:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dirección IP</li>
                <li>Tipo y versión del navegador</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Datos de acceso y uso del sitio web</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 mt-4 rounded">
                <p className="text-blue-900 dark:text-blue-100 text-sm">
                  <strong>Importante:</strong> No solicitamos ni tratamos categorías especiales de datos 
                  (datos sensibles) salvo que sea estrictamente necesario para la prestación del servicio 
                  contratado y con su consentimiento explícito previo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. Finalidades del Tratamiento
              </h2>
              <p>
                Los datos personales proporcionados serán tratados con las siguientes finalidades 
                específicas, explícitas y legítimas:
              </p>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Finalidades Principales:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Gestión de solicitudes:</strong> atender y gestionar sus solicitudes de información 
                  sobre nuestros servicios de entrenamiento personal y asesoramiento deportivo
                </li>
                <li>
                  <strong>Prestación de servicios:</strong> ejecutar el contrato de prestación de servicios 
                  de entrenamiento personalizado, readaptación deportiva y asesoramiento nutricional
                </li>
                <li>
                  <strong>Comunicaciones comerciales:</strong> enviar comunicaciones relacionadas con su 
                  plan de entrenamiento, seguimiento de objetivos y recomendaciones personalizadas
                </li>
                <li>
                  <strong>Programación de sesiones:</strong> coordinar y gestionar la reserva de sesiones 
                  de entrenamiento y consultoría a través de plataformas de videoconferencia
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Finalidades Secundarias:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Mejora continua:</strong> analizar y mejorar la calidad de nuestros servicios 
                  y la experiencia del usuario en el sitio web
                </li>
                <li>
                  <strong>Gestión administrativa:</strong> llevar la contabilidad, facturación y 
                  gestión administrativa derivada de la relación contractual
                </li>
                <li>
                  <strong>Cumplimiento legal:</strong> cumplir con las obligaciones legales aplicables 
                  (fiscales, contables, etc.)
                </li>
                <li>
                  <strong>Ejercicio de derechos:</strong> atender el ejercicio de los derechos de los 
                  interesados en materia de protección de datos
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. Legitimación y Base Legal del Tratamiento
              </h2>
              <p>
                El tratamiento de sus datos personales se basa en las siguientes bases legales conforme 
                al artículo 6 del RGPD:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-3">
                <li>
                  <strong>Consentimiento del interesado (art. 6.1.a RGPD):</strong> al facilitar sus datos 
                  personales a través de los formularios de contacto y reserva, usted otorga su consentimiento 
                  explícito para el tratamiento de los mismos conforme a las finalidades indicadas. Puede 
                  retirar su consentimiento en cualquier momento sin que ello afecte a la licitud del 
                  tratamiento previo.
                </li>
                <li>
                  <strong>Ejecución de un contrato (art. 6.1.b RGPD):</strong> el tratamiento es necesario 
                  para la ejecución del contrato de prestación de servicios de entrenamiento personal y 
                  asesoramiento deportivo que usted ha solicitado o contratado.
                </li>
                <li>
                  <strong>Interés legítimo (art. 6.1.f RGPD):</strong> para mejorar la calidad de nuestros 
                  servicios, analizar tendencias de uso del sitio web y garantizar la seguridad de nuestros 
                  sistemas, siempre respetando sus derechos y libertades fundamentales.
                </li>
                <li>
                  <strong>Obligación legal (art. 6.1.c RGPD):</strong> para cumplir con obligaciones legales 
                  en materia fiscal, contable y mercantil a las que está sujeto el responsable del tratamiento.
                </li>
              </ul>
              <p className="mt-3 text-sm">
                La negativa a facilitar los datos personales solicitados o la retirada del consentimiento 
                otorgado podría imposibilitar la prestación de los servicios solicitados.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Plazo de Conservación de los Datos
              </h2>
              <p>
                Los datos personales serán conservados durante los siguientes plazos, en función de la 
                finalidad del tratamiento:
              </p>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Durante la Relación Contractual:
              </h3>
              <p>
                Los datos se conservarán mientras exista una relación comercial o contractual activa, es 
                decir, durante el tiempo en que esté recibiendo nuestros servicios de entrenamiento.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Tras la Finalización del Servicio:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Datos fiscales y contables:</strong> se conservarán durante un plazo mínimo de 
                  <strong> 6 años</strong> desde la última operación, conforme a las obligaciones establecidas 
                  en la legislación fiscal y mercantil vigente
                </li>
                <li>
                  <strong>Datos de prestación de servicios:</strong> se conservarán durante 
                  <strong> 5 años</strong> desde la finalización de la relación contractual, por posibles 
                  responsabilidades derivadas del servicio prestado
                </li>
                <li>
                  <strong>Datos de marketing y comunicaciones:</strong> se conservarán hasta que solicite 
                  su supresión, retire el consentimiento u se oponga al tratamiento
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Solicitudes sin Relación Contractual:
              </h3>
              <p>
                Si nos contacta para solicitar información pero no llega a contratar nuestros servicios, 
                sus datos se conservarán durante <strong>1 año</strong> desde el último contacto, transcurrido 
                el cual serán eliminados de forma segura.
              </p>

              <p className="mt-4 text-sm">
                Una vez cumplidos los plazos de conservación establecidos, los datos serán eliminados o 
                anonimizados de forma segura, salvo que exista una obligación legal de conservación o 
                sean necesarios para el ejercicio o defensa de reclamaciones.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                6. Destinatarios y Cesiones de Datos
              </h2>
              <p>
                Sus datos personales podrán ser comunicados a los siguientes destinatarios cuando sea 
                estrictamente necesario para la prestación del servicio:
              </p>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Prestadores de Servicios (Encargados del Tratamiento):
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>EmailJS:</strong> plataforma de envío de correos electrónicos para gestionar 
                  la comunicación con los usuarios
                </li>
                <li>
                  <strong>Google Meet:</strong> servicio de videoconferencia para realizar sesiones de 
                  entrenamiento y consultoría online
                </li>
                <li>
                  <strong>Calendly:</strong> herramienta de gestión de citas y reservas para programar sesiones
                </li>
              </ul>
              <p className="mt-2 text-sm">
                Estos proveedores actúan como encargados del tratamiento y han suscrito compromisos de 
                confidencialidad o están sujetos a obligaciones legales o profesionales de confidencialidad. 
                Solo trataran sus datos conforme a nuestras instrucciones.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Organismos Públicos y Autoridades:
              </h3>
              <p>
                Cuando sea legalmente requerido, sus datos podrán ser comunicados a:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Administración Tributaria (Agencia Tributaria)</li>
                <li>Administraciones Públicas con competencia en la materia</li>
                <li>Juzgados y Tribunales cuando exista una obligación legal</li>
                <li>Fuerzas y Cuerpos de Seguridad del Estado</li>
              </ul>

              <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-4 mt-4 rounded">
                <p className="text-green-900 dark:text-green-100 text-sm font-semibold">
                  ✓ Compromiso de Privacidad
                </p>
                <p className="text-green-800 dark:text-green-200 text-sm mt-2">
                  <strong>No vendemos, alquilamos ni compartimos</strong> sus datos personales con terceros 
                  para fines de marketing o publicidad. Sus datos solo se utilizan para la prestación de 
                  nuestros servicios y para cumplir con las obligaciones legales aplicables.
                </p>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Transferencias Internacionales:
              </h3>
              <p>
                Algunos de los proveedores mencionados pueden estar ubicados fuera del Espacio Económico 
                Europeo (EEE). En estos casos, las transferencias internacionales de datos se realizan 
                con las garantías adecuadas, tales como:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Decisiones de adecuación de la Comisión Europea</li>
                <li>Cláusulas contractuales tipo aprobadas por la Comisión Europea</li>
                <li>Adhesión a marcos de privacidad certificados (ej: Privacy Shield sucesores)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                7. Derechos del Interesado
              </h2>
              <p>
                De conformidad con la normativa vigente en materia de protección de datos, tiene derecho a:
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">🔍 Derecho de Acceso</p>
                  <p className="text-sm mt-1">Conocer qué datos personales tratamos sobre usted, con qué finalidad, 
                  durante cuánto tiempo y a quién se comunican.</p>
                </div>

                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">✏️ Derecho de Rectificación</p>
                  <p className="text-sm mt-1">Solicitar la corrección de datos inexactos o incompletos.</p>
                </div>

                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">🗑️ Derecho de Supresión ("Derecho al Olvido")</p>
                  <p className="text-sm mt-1">Solicitar la eliminación de sus datos cuando ya no sean necesarios, 
                  retire su consentimiento o el tratamiento sea ilícito.</p>
                </div>

                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">⏸️ Derecho de Limitación del Tratamiento</p>
                  <p className="text-sm mt-1">Solicitar la suspensión del tratamiento en determinadas circunstancias.</p>
                </div>

                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">📦 Derecho de Portabilidad</p>
                  <p className="text-sm mt-1">Recibir sus datos en un formato estructurado, de uso común y lectura 
                  mecánica, y transmitirlos a otro responsable cuando sea técnicamente posible.</p>
                </div>

                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">⛔ Derecho de Oposición</p>
                  <p className="text-sm mt-1">Oponerse al tratamiento de sus datos personales en determinadas 
                  circunstancias, especialmente con fines de marketing directo.</p>
                </div>

                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">🤖 Derecho a No Ser Objeto de Decisiones Automatizadas</p>
                  <p className="text-sm mt-1">No ser objeto de decisiones basadas únicamente en el tratamiento 
                  automatizado que produzcan efectos jurídicos o le afecten significativamente.</p>
                </div>

                <div className="bg-muted/20 p-3 rounded">
                  <p className="font-semibold">🚫 Derecho a Retirar el Consentimiento</p>
                  <p className="text-sm mt-1">Retirar el consentimiento otorgado en cualquier momento, sin que ello 
                  afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-5">
                ¿Cómo Ejercer sus Derechos?
              </h3>
              <p>
                Para ejercer cualquiera de estos derechos, puede dirigirse al Responsable del Tratamiento 
                mediante:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Correo electrónico:</strong> {CONTACT_INFO.email} (indicando en el asunto "Ejercicio 
                  de Derechos RGPD")
                </li>
                <li>
                  <strong>Documentación requerida:</strong> deberá acompañar su solicitud de copia de su DNI/NIE 
                  u otro documento que acredite su identidad
                </li>
              </ul>
              <p className="mt-3 text-sm">
                Le responderemos en el plazo máximo de <strong>1 mes</strong> desde la recepción de su solicitud, 
                pudiendo prorrogarse 2 meses más si fuera necesario teniendo en cuenta la complejidad y el 
                número de solicitudes.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-5">
                Derecho a Reclamar ante la Autoridad de Control
              </h3>
              <p>
                Si considera que el tratamiento de sus datos personales no es conforme a la normativa, tiene 
                derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):
              </p>
              <ul className="list-none pl-6 space-y-1 mt-2 text-sm">
                <li><strong>Web:</strong> www.aepd.es</li>
                <li><strong>Dirección:</strong> C/ Jorge Juan, 6, 28001 Madrid</li>
                <li><strong>Teléfono:</strong> 901 100 099 / 912 663 517</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                8. Cookies y Tecnologías de Rastreo
              </h2>
              <p>
                Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. Las 
                cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                nuestro sitio web.
              </p>
              <p className="mt-3">
                Para obtener información detallada sobre el tipo de cookies que utilizamos, su finalidad, 
                duración y cómo gestionarlas, consulte nuestra{" "}
                <a href="/cookies" className="text-primary hover:underline font-semibold">
                  Política de Cookies
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                9. Medidas de Seguridad
              </h2>
              <p>
                J Performance System trata sus datos con absoluta confidencialidad y ha implementado 
                medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales 
                contra:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Acceso no autorizado o ilícito</li>
                <li>Pérdida accidental o destrucción</li>
                <li>Alteración, divulgación o comunicación no autorizada</li>
                <li>Cualquier otra forma de tratamiento ilícito</li>
              </ul>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-4">
                Medidas Implementadas:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cifrado SSL/TLS:</strong> protección de las comunicaciones mediante certificados de seguridad</li>
                <li><strong>Control de acceso:</strong> acceso restringido a datos personales solo al personal autorizado</li>
                <li><strong>Copias de seguridad:</strong> realización periódica de backups seguros</li>
                <li><strong>Actualizaciones de seguridad:</strong> mantenimiento y actualización constante de sistemas</li>
                <li><strong>Auditorías:</strong> revisión periódica de las medidas de seguridad implementadas</li>
              </ul>
              
              <p className="mt-3 text-sm">
                A pesar de las medidas adoptadas, la seguridad absoluta no puede garantizarse en Internet. 
                Le recomendamos mantener actualizado su software de seguridad y utilizar contraseñas robustas.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                10. Modificaciones de la Política de Privacidad
              </h2>
              <p>
                J Performance System se reserva el derecho a modificar la presente Política de Privacidad 
                para adaptarla a cambios legislativos, jurisprudenciales, o en nuestras prácticas de 
                tratamiento de datos.
              </p>
              <p className="mt-3">
                Cualquier modificación sustancial será comunicada con antelación suficiente a través del 
                sitio web o, si disponemos de su dirección de correo electrónico, mediante notificación 
                por email.
              </p>
              <p className="mt-3 text-sm">
                Le recomendamos revisar periódicamente esta Política de Privacidad para estar informado 
                sobre cómo protegemos sus datos. La fecha de la última actualización figura en la parte 
                superior de este documento.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                11. Contacto y Delegado de Protección de Datos
              </h2>
              <p>
                Si tiene cualquier pregunta, duda o consulta sobre esta Política de Privacidad, sobre 
                el tratamiento de sus datos personales o sobre el ejercicio de sus derechos, puede contactar 
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
                Nos comprometemos a responder a sus consultas en el menor tiempo posible y, en todo caso, 
                en los plazos establecidos por la normativa de protección de datos.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

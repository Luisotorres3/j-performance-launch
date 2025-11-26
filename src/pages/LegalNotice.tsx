import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/constants/contact";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Aviso Legal</h1>

          <div className="prose prose-sm sm:prose-base max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. Datos Identificativos del Prestador de Servicios
              </h2>
              <p>
                En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, 
                de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se 
                informa de los siguientes datos identificativos:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <ul className="list-none space-y-2">
                  <li>
                    <strong>Titular:</strong> Juan Pasquau Lope
                  </li>
                  <li>
                    <strong>Nombre comercial:</strong> J Performance System
                  </li>
                  <li>
                    <strong>Correo electrónico:</strong> {CONTACT_INFO.email}
                  </li>
                  <li>
                    <strong>Teléfono de contacto:</strong> {CONTACT_INFO.phoneFormatted}
                  </li>
                  <li>
                    <strong>Sitio web:</strong> https://jperformance.com
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. Objeto y Aceptación
              </h2>
              <p>
                El presente Aviso Legal regula el uso, acceso y utilización del sitio web 
                <strong> https://jperformance.com</strong>, del cual es titular Juan Pasquau Lope bajo 
                el nombre comercial J Performance System.
              </p>
              <p className="mt-3">
                La navegación, acceso y uso del sitio web implica la aceptación expresa y sin reservas 
                de todos los términos del presente Aviso Legal. Si el usuario no está de acuerdo con 
                cualquiera de las condiciones aquí establecidas, deberá abstenerse de utilizar este 
                sitio web.
              </p>
              <p className="mt-3">
                J Performance System se reserva el derecho a modificar en cualquier momento la 
                presentación, configuración y contenido del sitio web, así como las condiciones 
                requeridas para su acceso y/o uso.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. Servicios Ofrecidos
              </h2>
              <p>
                A través de este sitio web, J Performance System proporciona información comercial y 
                permite la contratación de los siguientes servicios profesionales:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Entrenamiento Personal y Deportivo:</strong> planes de entrenamiento adaptados a objetivos individuales</li>
                <li><strong>Asesoramiento Nutricional Deportivo:</strong> pautas nutricionales orientadas al rendimiento</li>
                <li><strong>Programación Personalizada:</strong> diseño de rutinas específicas según nivel y disponibilidad</li>
                <li><strong>Preparación Física para Opositores:</strong> programas especializados para pruebas físicas oficiales</li>
                <li><strong>Readaptación Deportiva:</strong> recuperación funcional post-lesión bajo supervisión profesional</li>
              </ul>
              <p className="mt-3">
                <strong>Importante:</strong> Los servicios requieren evaluación individual previa. Se recomienda 
                consultar con un profesional médico antes de iniciar cualquier programa de ejercicio, especialmente 
                si existen condiciones de salud preexistentes.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. Condiciones de Uso y Obligaciones del Usuario
              </h2>
              <p>
                El acceso y uso del sitio web confiere la condición de usuario, quien acepta, desde que 
                inicia la navegación, cumplir con las siguientes obligaciones:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Uso lícito:</strong> hacer un uso adecuado y conforme a la legalidad vigente, 
                  a la buena fe, al orden público y a lo establecido en este Aviso Legal
                </li>
                <li>
                  <strong>Prohibición de usos indebidos:</strong> no utilizar el sitio web con fines 
                  fraudulentos, ilícitos o contrarios a la moral y buenas costumbres
                </li>
                <li>
                  <strong>Integridad del sistema:</strong> no realizar acciones que puedan dañar, 
                  inutilizar, sobrecargar o menoscabar el sitio web o impedir su normal funcionamiento
                </li>
                <li>
                  <strong>Seguridad:</strong> no introducir, almacenar o difundir virus informáticos, 
                  programas dañinos o cualquier otro código que pueda causar alteraciones en el sistema
                </li>
                <li>
                  <strong>Veracidad de datos:</strong> proporcionar información veraz, exacta y actualizada 
                  en los formularios de contacto y registro
                </li>
                <li>
                  <strong>Responsabilidad personal:</strong> no suplantar la identidad de otros usuarios 
                  ni acceder a áreas restringidas sin autorización
                </li>
              </ul>
              <p className="mt-3 font-semibold">
                El incumplimiento de cualquiera de estas obligaciones podrá dar lugar a la adopción de 
                medidas legales oportunas y, en su caso, a las responsabilidades que de tal incumplimiento 
                pudieran derivarse conforme a la legislación vigente.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Propiedad Intelectual e Industrial
              </h2>
              <p>
                Todos los elementos que conforman el sitio web, así como su estructura, diseño, código 
                fuente, logos, marcas y demás signos distintivos que aparecen en el mismo, son titularidad 
                de J Performance System o de terceros que han autorizado legítimamente su uso, y están 
                protegidos por derechos de propiedad intelectual e industrial conforme a lo dispuesto en 
                la legislación española y los convenios internacionales aplicables.
              </p>
              <p className="mt-3">
                En concreto, quedan protegidos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Textos, contenidos editoriales y artículos</li>
                <li>Fotografías, imágenes y material audiovisual</li>
                <li>Diseño gráfico, maquetación y estructura visual</li>
                <li>Software, código fuente y aplicaciones informáticas</li>
                <li>Marcas, logotipos y nombres comerciales</li>
                <li>Bases de datos y compilaciones</li>
              </ul>
              <p className="mt-3 font-semibold">
                Queda expresamente prohibido:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>La reproducción, copia, distribución o comunicación pública de los contenidos</li>
                <li>Su transformación, modificación o manipulación</li>
                <li>El uso comercial sin autorización previa y por escrito</li>
                <li>La descompilación, ingeniería inversa o cualquier medio de acceso al código fuente</li>
              </ul>
              <p className="mt-3">
                El usuario podrá visualizar, imprimir y descargar los contenidos únicamente para su uso 
                personal y privado, quedando prohibido su uso con fines comerciales o para su distribución, 
                comunicación pública, transformación o descompilación.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                6. Exclusión de Garantías y Limitación de Responsabilidad
              </h2>
              <p>
                J Performance System no garantiza la disponibilidad y continuidad ininterrumpida del 
                funcionamiento del sitio web ni la ausencia de errores en el acceso al mismo. En 
                consecuencia, no se hace responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Disponibilidad técnica:</strong> la continuidad, disponibilidad y accesibilidad 
                  ininterrumpida del sitio web y sus servicios
                </li>
                <li>
                  <strong>Exactitud de contenidos:</strong> la ausencia de errores, omisiones o defectos 
                  en los contenidos, ni de su actualización constante
                </li>
                <li>
                  <strong>Seguridad informática:</strong> la ausencia de virus, malware u otros elementos 
                  dañinos que puedan causar daños en los sistemas informáticos
                </li>
                <li>
                  <strong>Uso inadecuado:</strong> los daños o perjuicios causados por el uso inadecuado, 
                  negligente o fraudulento del sitio web por parte de los usuarios
                </li>
                <li>
                  <strong>Enlaces externos:</strong> el contenido, disponibilidad y legalidad de sitios web 
                  de terceros enlazados, sobre los que no ejerce ningún control
                </li>
                <li>
                  <strong>Transmisiones de datos:</strong> fallos o incidencias en las comunicaciones, 
                  transmisiones, conexiones o sistemas de telecomunicación
                </li>
              </ul>
              
              <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 mt-4 rounded">
                <p className="font-bold text-amber-900 dark:text-amber-100 mb-2">
                  ⚠️ Aviso Médico Importante
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Los servicios de entrenamiento personal y asesoramiento nutricional deportivo ofrecidos 
                  por J Performance System están diseñados para personas sanas y requieren una evaluación 
                  individual personalizada. Los resultados pueden variar significativamente según cada 
                  persona, su condición física, adherencia al programa y otros factores individuales.
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm mt-2 font-semibold">
                  Se recomienda encarecidamente consultar con un profesional médico cualificado antes de 
                  comenzar cualquier programa de entrenamiento físico o modificación nutricional, 
                  especialmente si padece o ha padecido condiciones médicas preexistentes, lesiones, 
                  problemas cardiovasculares, diabetes, hipertensión u otras patologías.
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm mt-2">
                  J Performance System no sustituye el diagnóstico, tratamiento o supervisión médica 
                  profesional. El usuario asume la responsabilidad de verificar su estado de salud antes 
                  de iniciar cualquier actividad física.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                7. Enlaces a Sitios Web de Terceros
              </h2>
              <p>
                Este sitio web puede contener enlaces (hipervínculos) a otros sitios web gestionados 
                por terceros. J Performance System no controla, supervisa ni se hace responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>El contenido, servicios, productos o políticas de dichos sitios web</li>
                <li>El funcionamiento y disponibilidad de los sitios enlazados</li>
                <li>Las condiciones de uso y políticas de privacidad de terceros</li>
                <li>Los daños que pudieran derivarse del acceso o uso de los contenidos externos</li>
              </ul>
              <p className="mt-3">
                La inclusión de enlaces no implica ningún tipo de asociación, fusión o participación 
                con las entidades enlazadas. El acceso a sitios web de terceros se realiza bajo la 
                exclusiva responsabilidad del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                8. Protección de Datos Personales
              </h2>
              <p>
                J Performance System cumple con lo establecido en el Reglamento (UE) 2016/679 del 
                Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de 
                las personas físicas en lo que respecta al tratamiento de datos personales y a la libre 
                circulación de estos datos (RGPD), y en la Ley Orgánica 3/2018, de 5 de diciembre, de 
                Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
              </p>
              <p className="mt-3">
                Para más información sobre el tratamiento de sus datos personales, las finalidades, 
                base legal, plazo de conservación, destinatarios y derechos que le asisten, consulte 
                nuestra
                <a href="/privacidad" className="text-primary hover:underline font-semibold ml-1">
                  Política de Privacidad
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                9. Modificaciones del Aviso Legal
              </h2>
              <p>
                J Performance System se reserva el derecho de efectuar, en cualquier momento y sin 
                necesidad de previo aviso, modificaciones y actualizaciones de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>La información contenida en el sitio web</li>
                <li>La configuración, diseño y presentación del sitio</li>
                <li>Las condiciones de acceso y uso</li>
                <li>El presente Aviso Legal</li>
              </ul>
              <p className="mt-3">
                Las modificaciones entrarán en vigor desde el momento de su publicación en el sitio web. 
                Se recomienda revisar periódicamente este Aviso Legal para estar informado de cualquier cambio.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                10. Legislación Aplicable y Jurisdicción
              </h2>
              <p>
                Las presentes condiciones generales se rigen e interpretan de conformidad con la 
                legislación española vigente.
              </p>
              <p className="mt-3">
                J Performance System y el usuario, con renuncia expresa a cualquier otro fuero que 
                pudiera corresponderles, se someten a los Juzgados y Tribunales del domicilio del 
                usuario para cualquier controversia que pudiera derivarse del acceso o uso del sitio web.
              </p>
              <p className="mt-3">
                En el caso de que el usuario tenga su domicilio fuera de España, J Performance System 
                y el usuario se someten expresamente a los Juzgados y Tribunales de la ciudad de residencia 
                del titular del sitio web, renunciando expresamente a cualquier otro fuero que pudiera 
                corresponderles.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                11. Contacto y Comunicaciones
              </h2>
              <p>
                Para cualquier consulta, sugerencia o reclamación relacionada con este Aviso Legal o 
                con el uso del sitio web, puede contactar con nosotros a través de:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <ul className="list-none space-y-2">
                  <li>
                    <strong>Correo electrónico:</strong> {CONTACT_INFO.email}
                  </li>
                  <li>
                    <strong>Teléfono:</strong> {CONTACT_INFO.phoneFormatted}
                  </li>
                </ul>
              </div>
              <p className="mt-3 text-sm">
                Le responderemos en el plazo más breve posible y, en todo caso, en el plazo máximo 
                establecido por la normativa aplicable.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;

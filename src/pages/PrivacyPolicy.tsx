import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. Responsable
              </h2>
              <p>Juan Pasquau Lope</p>
              <p>Nombre comercial: J Performance System</p>
              <p>Teléfono: +34 618 179 652</p>
              <p>Email: jperformancesystem@gmail.com</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. Finalidad, legitimación y conservación
              </h2>
              <p>
                <strong>Si has rellenado el formulario de contacto:</strong> Trataré tus datos personales en base a mi interés legítimo de dar respuesta a tu solicitud de información sobre mis servicios. También podré tratar tus datos en base a la ejecución de medidas precontractuales si solicitas presupuesto o reserva.
              </p>
              <p>
                Conservaré tus datos personales mientras mantengamos la relación, y no solicites su supresión o ejerzas tu derecho a oponerte al tratamiento. Si no llega a haber contratación, tus datos se conservarán durante 1 año desde el último contacto, transcurrido el cual serán eliminados.
              </p>
              <p>
                <strong>Si has aceptado las cookies:</strong> La base de legitimación es tu consentimiento, y su tratamiento se hará conforme a la Política de Cookies.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 mt-4">
                2.1. Información del tratamiento de datos si contratas el servicio
              </h3>
              <p>
                Si decides contratar mis servicios, será necesario tratar información adicional para poder prestarte el servicio de forma segura y personalizada. Al firmar el contrato de prestación de servicios, te informaré detalladamente del tratamiento de tus datos a través de una cláusula específica donde podrás dar tu consentimiento explícito para tratar los datos de salud estrictamente necesarios (lesiones, limitaciones) y diseñar así tu programa de entrenamiento de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. Destinatarios
              </h2>
              <p>
                Por regla general, no permitiré el acceso a tus datos personales a nadie. Excepcionalmente, podrán acceder:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveedores tecnológicos EmailJS (envío de formularios de contacto), Google Meet / Calendly (si aplica, para gestión de citas)</li>
                <li>Organismos públicos cuando sea legalmente obligatorio: Agencia Tributaria, Juzgados y Tribunales, Fuerzas y Cuerpos de Seguridad del Estado.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. Derechos
              </h2>
              <p>
                Puedes ejercer tus derechos de protección de datos escribiéndome a jperformancesystem@gmail.com. Para poder tramitar la solicitud indícame, por favor, tu nombre y apellidos y petición en que se concreta la solicitud:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Derecho a solicitar el acceso a los datos personales</li>
                <li>Derecho a retirar el consentimiento</li>
                <li>Derecho a solicitar su rectificación o supresión</li>
                <li>Derecho a oponerte al tratamiento</li>
                <li>Derecho a la limitación del tratamiento</li>
              </ul>
              <p>
                Puedes visitar la web de la Agencia Española de Protección de Datos para conocer más información sobre tus derechos, así como presentar una reclamación si no atiendo correctamente tu solicitud de ejercicio de tus derechos.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Protección de datos de menores
              </h2>
              <p>
                Mis servicios están dirigidos a personas mayores de 18 años. Si eres menor de edad y deseas contratar, necesitarás el consentimiento de tus padres o tutores legales.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                7. Modificación de la política de privacidad
              </h2>
              <p>
                Podré modificar la presente Política de Privacidad en cualquier momento para adaptarla a cambios normativos o en mis prácticas de tratamiento. Comunicaré, si es necesario y con previo aviso, las modificaciones de la presente política que afecten a los usuarios.
              </p>
              <p>
                La presente Política de Privacidad se encuentra actualizada a noviembre de 2025.
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

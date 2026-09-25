import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { analyticsConfigured } from "@/constants/analytics";
import { captchaSiteKey } from "@/constants/security";

export default function CookiesPolicy() {
  return (
    <div className="legal-v2">
      <Navigation />
      <main id="main-content" className="container mx-auto max-w-4xl px-5 pt-28 pb-16">
        <h1>Política de cookies</h1>
        <div className="prose max-w-none space-y-6 mt-6">
          <section>
            <h2>Preferencias de este navegador</h2>
            <p>
              Guardamos tu elección en el almacenamiento local del navegador, mediante las claves
              cookieConsent y analyticsConsent. No son cookies de sesión ni se utilizan para
              identificarte. Se conservan hasta que cambies tu elección o borres los datos del
              sitio. La web no crea cuentas de usuario ni cookies de inicio de sesión.
            </p>
          </section>
          <section>
            <h2>Analítica opcional</h2>
            <p>
              {analyticsConfigured
                ? "Google Analytics está configurado y solo se carga si aceptas las cookies opcionales."
                : "La analítica no está activada en esta versión de la web."}{" "}
              Cuando se activa con tu consentimiento, Google Analytics puede utilizar las cookies
              _ga y _ga_* para medir visitas, con una duración de hasta dos años. No enviamos el
              contenido de los formularios ni sus parámetros de URL y no medimos las páginas de
              contacto y reserva. Puedes retirar tu consentimiento en cualquier momento.
            </p>
            <p>
              Proveedor: Google. Consulta su{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                política de privacidad
              </a>{" "}
              y su{" "}
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                información sobre cookies
              </a>
              .
            </p>
          </section>
          <section>
            <h2>Reserva con Calendly</h2>
            <p>
              El calendario externo solo se carga cuando solicitas reservar y autorizas su uso en el
              formulario de reserva. En ese momento se comparten con Calendly tu nombre y email para
              completar la cita. Calendly gestiona sus propias cookies y preferencias según su{" "}
              <a
                href="https://calendly.com/cookie-notice"
                target="_blank"
                rel="noopener noreferrer"
              >
                política de cookies
              </a>
              . Rechazar desde las preferencias de esta web retira el calendario integrado, pero no
              permite borrar cookies de otros dominios.
            </p>
          </section>
          <section>
            <h2>Servicios y enlaces externos</h2>
            <p>
              El formulario de contacto utiliza EmailJS para enviar tu consulta y no requiere
              aceptar cookies opcionales. Los enlaces a WhatsApp, redes sociales y Google Calendar
              abren sitios externos con sus propias políticas. No cargamos sus widgets al visitar
              esta web.
            </p>
          </section>
          {captchaSiteKey && (
            <section>
              <h2>Verificación antispam</h2>
              <p>
                La verificación de Google reCAPTCHA solo se carga al pulsar su botón en el
                formulario. Google recibe datos técnicos del navegador para prevenir abusos y puede
                utilizar cookies. Puedes contactar alternativamente por email o WhatsApp sin cargar
                esta verificación.
              </p>
            </section>
          )}
          <section>
            <h2>Cambiar tu elección</h2>
            <p>
              Puedes aceptar o rechazar las cookies opcionales desde el aviso, reabrirlo desde el
              pie de página y borrar los datos del sitio en tu navegador.
            </p>
            <button
              className="v2-button"
              onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
            >
              Configurar cookies
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

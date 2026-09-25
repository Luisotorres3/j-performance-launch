import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/constants/contact";

export default function Terms() {
  return (
    <div className="legal-v2">
      <Navigation />
      <main id="main-content" className="container mx-auto max-w-4xl px-5 pt-28 pb-16">
        <h1>Condiciones del servicio</h1>
        <div className="prose max-w-none space-y-6 mt-6">
          <section>
            <h2>Información y contacto</h2>
            <p>
              J Performance System es el nombre comercial de Juan Pasquau Lope. Puedes contactar en{" "}
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>. Consulta también el{" "}
              <Link to="/aviso-legal">aviso legal</Link>.
            </p>
          </section>
          <section>
            <h2>Solicitud e entrevista</h2>
            <p>
              Enviar una consulta o reservar una entrevista no supone contratar ni pagar un plan.
              Antes de empezar confirmaremos por escrito el servicio, su alcance, precio total,
              duración, forma de pago y condiciones de cancelación. La reserva se confirma mediante
              Calendly, no al rellenar el formulario de esta web.
            </p>
          </section>
          <section>
            <h2>Planes y precios</h2>
            <p>
              Los planes publicados describen los servicios disponibles y sus importes mensuales en
              euros. El entrenamiento con nutrición se coordina con JF Nutrición. No se realizará
              ningún cargo desde esta web ni se activará una renovación automática por solicitar
              información.
            </p>
          </section>
          <section>
            <h2>Cancelaciones y derechos</h2>
            <p>
              Puedes solicitar cambios o cancelar una entrevista contactando con nosotros o mediante
              el enlace de tu confirmación. Las condiciones de inicio, renovación y cancelación de
              un servicio contratado se comunicarán antes del pago, sin limitar los derechos legales
              del consumidor.
            </p>
            <p>
              En los contratos de servicios a distancia, el plazo general de desistimiento es de 14
              días naturales desde la contratación, con las condiciones y excepciones legales
              aplicables. El inicio anticipado del servicio requiere tu solicitud expresa; sus
              consecuencias se explicarán antes de que lo aceptes.
            </p>
          </section>
          <section>
            <h2>Entrenamiento y responsabilidad</h2>
            <p>
              El entrenamiento se adapta a la información y objetivos acordados. No se garantizan
              marcas, resultados deportivos ni la superación de pruebas. El servicio no sustituye la
              valoración sanitaria. No envíes información médica sensible por el formulario general.
            </p>
          </section>
          <section>
            <h2>Privacidad y reclamaciones</h2>
            <p>
              El tratamiento de datos se explica en la{" "}
              <Link to="/privacidad">política de privacidad</Link>. Para consultas, desistimiento o
              reclamaciones, escribe al correo de contacto indicando el servicio y la fecha de
              contratación. Se aplicará la normativa española y de la Unión Europea que corresponda,
              respetando los derechos y fueros del consumidor.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

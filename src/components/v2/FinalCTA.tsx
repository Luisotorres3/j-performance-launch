import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
export default function FinalCTA() {
  return (
    <section className="final-cta section-space">
      <div className="finish-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="v2-container">
        <Reveal>
          <p className="eyebrow">EL SIGUIENTE PASO ES TUYO</p>
          <h2>
            TU PRÓXIMO NIVEL
            <br />
            <span>NO LLEGA SOLO.</span>
          </h2>
          <div className="final-bottom">
            <p>
              Yo te doy las herramientas.
              <br />
              Tú trabajas. Tú progresas.
            </p>
            <Link className="v2-button button-gold" to="/contacto">
              Habla con Juan <ArrowUpRight size={22} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

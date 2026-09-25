import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { collaborations } from "@/data/collaborations";

export default function NutritionCollaboration() {
  return (
    <section
      id="nutricion"
      className="nutrition-section collaborations-section section-space"
      aria-labelledby="collaborations-title"
    >
      <div className="v2-container">
        <Reveal>
          <p className="eyebrow">05 / COLABORACIONES</p>
          <h2 id="collaborations-title" className="display-heading">
            Sumar para
            <br />
            <span className="muted-type">llegar más lejos.</span>
          </h2>
          <p className="nutrition-copy">
            Profesionales y marcas que comparten una forma de entender el deporte: trabajo, cuidado
            y progreso.
          </p>
        </Reveal>
        <div className="collaborations-grid">
          {collaborations.map((partner) => (
            <Reveal className="partner-card" key={partner.id}>
              <div className="partner-logo-surface">
                <div className={partner.logoFromPoster ? "jf-logo-crop" : "partner-logo"}>
                  <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />
                </div>
              </div>
              <p className="eyebrow">COLABORACIÓN ACTUAL</p>
              <h3>{partner.category}</h3>
              <p>{partner.description}</p>
              <div className="partner-actions">
                <Link className="v2-button" to="/planes?tipo=conjunto">
                  Ver packs con JF <ArrowUpRight size={19} />
                </Link>
                <a
                  className="text-button"
                  href={partner.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {partner.handle} <ArrowUpRight size={17} />
                </a>
              </div>
            </Reveal>
          ))}
          <Reveal className="partner-card partner-invitation">
            <div className="partner-invitation-mark" aria-hidden="true">
              <Plus size={64} strokeWidth={1} />
              <span>JPS × TU MARCA</span>
            </div>
            <p className="eyebrow">ABIERTOS A NUEVAS COLABORACIONES</p>
            <h3>¿Compartimos el siguiente paso?</h3>
            <p>
              Si tu marca o proyecto vive el deporte como nosotros, hablemos. Buscamos
              colaboraciones que aporten valor a quienes entrenan con JPS.
            </p>
            <Link className="text-button" to="/contacto?colaboracion=marca">
              Proponer una colaboración <ArrowUpRight size={19} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

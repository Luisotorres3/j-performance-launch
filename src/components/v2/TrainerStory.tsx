import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import TrainerPortrait from "./TrainerPortrait";
import { trainer } from "@/data/performance";
import Reveal from "./Reveal";
export default function TrainerStory({ compact = false }: { compact?: boolean }) {
  return (
    <section className="trainer-section section-space">
      <div className="v2-container trainer-layout">
        <Reveal className="trainer-natural-photo">
          <TrainerPortrait />
          <p className="natural-portrait-caption">
            <strong>Juan Pasquau</strong>
            <span>Tu entrenador</span>
          </p>
        </Reveal>
        <Reveal className="trainer-copy">
          <p className="eyebrow">06 / LA PERSONA DETRÁS DEL SISTEMA</p>
          <h2 className="display-heading">
            Tu objetivo.
            <br />
            Mi compromiso.
          </h2>
          <p>
            Soy Juan Pasquau. Entrenador especializado en fuerza, atletismo y
            preparación física para opositores y deportistas.
          </p>
          <blockquote>
            «Yo hago el análisis y la planificación, tú te encargas de cumplir.»
          </blockquote>
          {!compact && (
            <p>
              Mi trabajo empieza en tu punto de partida: programación estratégica, seguimiento
              proactivo y comunicación directa.
            </p>
          )}
          <ul className="qualifications">
            {(compact ? trainer.qualifications.slice(0, 1) : trainer.qualifications).map(
              (item, i) => (
                <li key={item}>
                  <span>0{i + 1}</span>
                  {item}
                </li>
              )
            )}
          </ul>
          <Link to="/contacto" className="text-button">
            Hablemos de tu objetivo <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

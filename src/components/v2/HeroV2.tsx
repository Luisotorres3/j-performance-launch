import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import actionPhoto from "@/assets/juan-personal.webp";
import { trainer } from "@/data/performance";
import LoadingImage from "@/components/LoadingImage";

const MotionImage = motion.create(LoadingImage);

export default function HeroV2() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const photoY = useTransform(progress, [0, 1], [0, 18]);
  const photoScale = useTransform(progress, [0, 1], [1, 1.025]);
  const discover = () =>
    document
      .getElementById("capitulo-metodo")
      ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });

  return (
    <section
      ref={ref}
      className="performance-hero action-hero brand-hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-stage">
        <figure className="action-visual">
          <MotionImage
            src={actionPhoto}
            alt="Juan Pasquau con la camiseta de J Performance y el logo azul y dorado al fondo"
            width="1254"
            height="1254"
            {...{ fetchpriority: "high" }}
            style={reduced ? undefined : { y: photoY, scale: photoScale }}
          />
          <figcaption>
            <span className="action-photo-index">TU ENTRENADOR / 01</span>
            <strong>Juan Pasquau</strong>
            <span>Entrenador</span>
          </figcaption>
        </figure>
        <div className="speed-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="v2-container action-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> JUAN PASQUAU / ENTRENADOR
            </p>
            <h1 id="hero-title" className="hero-title action-title">
              {["EMPIEZA AHORA", "EMPIEZA DE VERDAD"].map((line, i) => (
                <span className="title-mask" key={line}>
                  <motion.span
                    initial={reduced ? false : { y: "105%", rotate: 3 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 0.9, delay: 0.12 + i * 0.11, ease: [0.22, 1, 0.36, 1] }}
                    className={i === 1 ? "hero-gold-line" : ""}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <p className="hero-statement">Tu próximo nivel se entrena.</p>
            <p className="hero-description">
              Soy Juan Pasquau, entrenador especializado en fuerza, atletismo y preparación física
              para opositores y deportistas. Yo pongo la planificación y el seguimiento. Tú, las
              ganas de ir a por más.
            </p>
            <p className="hero-qualification">{trainer.qualifications[0]}</p>
            <div className="hero-actions">
              <Link className="v2-button button-gold" to="/planes">
                Empieza tu cambio <ArrowUpRight size={20} />
              </Link>
              <button className="text-button" onClick={discover}>
                Descubre el método <ArrowDown size={18} />
              </button>
            </div>
          </div>
          <div className="hero-side-note" aria-hidden="true">
            DISCIPLINA / CIENCIA / PROGRESO
          </div>
        </div>
      </div>
      <div
        className="performance-mosaic"
        role="region"
        aria-label="Los valores de J Performance"
        tabIndex={0}
      >
        {["FUERZA", "RENDIMIENTO", "ACTITUD", "DISCIPLINA", "CONSTANCIA", "PROGRESO"].map(
          (word, i) => (
            <div className="mosaic-tile" key={word}>
              <span className="mosaic-index" aria-hidden="true">
                0{i + 1}
              </span>
              <strong>{word}</strong>
              <ArrowUpRight aria-hidden="true" />
            </div>
          )
        )}
      </div>
      <div className="proof-strip" aria-label="Experiencia de Juan Pasquau">
        <div className="v2-container proof-layout">
          <p>
            UN OBJETIVO PERSONAL.
            <br />
            <strong>UN COMPROMISO REAL.</strong>
          </p>
          {trainer.stats.map((stat) => (
            <div className="proof-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

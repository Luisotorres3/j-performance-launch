import { useRef, useState } from "react";
import { motion, useScroll, useReducedMotion, useMotionValueEvent } from "framer-motion";
import { ArrowDownRight, Target, Route, Dumbbell, BarChart3, RefreshCw } from "lucide-react";
import { method } from "@/data/performance";
const stepIcons = [Target, Route, Dumbbell, BarChart3, RefreshCw];
export default function MethodSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.35", "end 0.35"] });
  useMotionValueEvent(scrollYProgress, "change", () => {
    const steps = ref.current?.querySelectorAll<HTMLElement>(".method-step");
    if (!steps) return;
    let next = 0;
    steps.forEach((step, i) => {
      if (step.getBoundingClientRect().top <= window.innerHeight * 0.35 + 1) next = i;
    });
    setActive(next);
  });
  return (
    <section id="metodo" className="method-section method-compact section-space">
      <div className="v2-container method-layout">
        <div className="method-intro">
          <p className="eyebrow">02 / EL MÉTODO</p>
          <h2 className="display-heading">
            Entrena con
            <br />
            <span className="muted-type">intención.</span>
          </h2>
          <p>
            Cada sesión cuenta. Cinco pasos para dar dirección a tu esfuerzo: saber dónde estás,
            trabajar con un plan y seguir avanzando.
          </p>
          <div className="method-dial" aria-hidden="true">
            <motion.span
              key={active}
              initial={reduced ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              0{active + 1}
            </motion.span>
            <small>/ 05</small>
            <ArrowDownRight />
            <div className="method-track">
              <motion.div style={{ scaleY: reduced ? 1 : scrollYProgress }} />
            </div>
          </div>
          <span className="eyebrow method-current" aria-hidden="true">
            {method[active].label}
          </span>
          <nav className="method-stage-nav" aria-label="Pasos del método">
            {method.map((step, i) => (
              <button
                key={step.label}
                aria-label={`Paso ${i + 1}: ${step.label}`}
                aria-current={active === i ? "step" : undefined}
                onClick={() =>
                  document
                    .getElementById(`metodo-paso-${i + 1}`)
                    ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" })
                }
              >
                <span>0{i + 1}</span>
                <span className={i <= active ? "stage-reached" : ""} />
              </button>
            ))}
          </nav>
          <p className="method-rally">
            Yo te doy las herramientas.
            <br />
            <strong>Tú trabajas. Tú progresas.</strong>
          </p>
        </div>
        <div className="method-steps" ref={ref}>
          {method.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <article
                id={`metodo-paso-${i + 1}`}
                key={step.label}
                className={`method-step ${active === i ? "is-active" : ""}`}
              >
                <div className="step-label">
                  <span>0{i + 1}</span>
                  <span>{step.label}</span>
                  <Icon className="method-step-icon" size={26} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="step-detail">
                  {step.detail.split(" / ").map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

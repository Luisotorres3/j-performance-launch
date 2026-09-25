import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Apple, ArrowUpRight, Dumbbell } from "lucide-react";
import { TRAINING_PLANS } from "@/constants/plans";
import Reveal from "./Reveal";
import JointPacks from "./JointPacks";
import PlanCatalog from "./PlanCatalog";
import PaymentBanner from "./PaymentBanner";

export default function PlansSection({ standalone = false }: { standalone?: boolean }) {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("tipo") === "conjunto" ? "joint" : "training"
  );
  useEffect(() => {
    setCategory(searchParams.get("tipo") === "conjunto" ? "joint" : "training");
  }, [searchParams]);
  return (
    <section
      id="planes"
      className={`plans-section plans-compact section-space ${standalone ? "plans-standalone" : ""}`}
      aria-labelledby="plans-title"
    >
      <div className="v2-container">
        {standalone ? (
          <header className="plans-catalog-header">
            <div>
              <h1 id="plans-title">Planes y packs</h1>
              <p>Tu entrenamiento. A tu medida.</p>
            </div>
            <Link className="text-button" to="/contacto?consulta=planes">
              Te ayudo a elegir <ArrowUpRight size={18} />
            </Link>
          </header>
        ) : (
          <Reveal className="section-top">
            <div>
              <p className="eyebrow">04 / PLANES Y PACKS</p>
              <h2 id="plans-title" className="display-heading">
                Tu plan.
                <br />
                <span className="muted-type">A tu medida.</span>
              </h2>
            </div>
            <div className="section-aside">
              <Link className="text-button" to="/contacto?consulta=planes">
                Lo hablamos juntos <ArrowUpRight size={20} />
              </Link>
            </div>
          </Reveal>
        )}
        <div className="catalog-selector" role="group" aria-label="Tipo de servicio">
          <button aria-pressed={category === "training"} onClick={() => setCategory("training")}>
            <Dumbbell size={18} aria-hidden="true" /> Entrenamiento
          </button>
          <button aria-pressed={category === "joint"} onClick={() => setCategory("joint")}>
            <Apple size={18} aria-hidden="true" />
            Entrenamiento + nutrición
          </button>
        </div>
        {category === "training" ? <PlanCatalog plans={TRAINING_PLANS} /> : <JointPacks />}
        {standalone && <PaymentBanner />}
      </div>
    </section>
  );
}

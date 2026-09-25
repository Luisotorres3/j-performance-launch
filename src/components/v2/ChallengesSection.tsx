import { ArrowUpRight, CalendarDays, Flag, Dumbbell, Footprints } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { runningChallenges, strengthChallenges } from "@/data/challenges";
import Reveal from "./Reveal";
import RunningEvents from "./RunningEvents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import runningPhoto from "@/assets/plans/running-personal.webp";
import strengthPhoto from "@/assets/plans/strength-personal.webp";
import LoadingImage from "@/components/LoadingImage";

export default function ChallengesSection({ standalone = false }: { standalone?: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("tipo");
  const activeTab =
    type === "fuerza" ? "retos-fuerza" : type === "eventos" ? "eventos" : "retos-correr";
  const Heading = standalone ? "h1" : "h2";
  return (
    <section className="challenges-section section-space" aria-labelledby="challenges-title">
      <div className="v2-container">
        {standalone ? (
          <header className="inner-page-title">
            <h1 id="challenges-title">Retos</h1>
            <p>Tu próxima distancia o tu próxima marca. Prepárala con JPS.</p>
          </header>
        ) : (
          <Reveal className="section-top">
            <div>
              <p className="eyebrow">
                {standalone ? "JPS / TU PRÓXIMO OBJETIVO" : "06 / RETOS POR DELANTE"}
              </p>
              <Heading id="challenges-title" className="display-heading">
                Una meta que motive.
                <br />
                <span className="muted-type">Un plan para ir a por ella.</span>
              </Heading>
            </div>
            <p className="challenge-intro">
              Tu primer dorsal. Una nueva distancia. Volver a sentirte corredor. Elige un reto y
              empieza a prepararlo con JPS.
            </p>
          </Reveal>
        )}
        <Tabs
          value={activeTab}
          onValueChange={(value) => {
            const next = new URLSearchParams(searchParams);
            next.set(
              "tipo",
              value === "retos-fuerza" ? "fuerza" : value === "eventos" ? "eventos" : "correr"
            );
            setSearchParams(next, { replace: true });
          }}
          className="challenge-explorer"
        >
          <TabsList className="challenge-tablist" aria-label="Tipos de reto y eventos">
            {[
              { id: "retos-correr", label: "Correr", icon: Footprints },
              { id: "retos-fuerza", label: "Fuerza", icon: Dumbbell },
              { id: "eventos", label: "Eventos deportivos", icon: CalendarDays },
            ].map(({ id, label, icon: Icon }) => (
              <TabsTrigger key={id} value={id}>
                <Icon size={18} aria-hidden="true" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="retos-correr">
            <section
              id="retos-correr"
              className="challenge-category"
              aria-labelledby="running-challenges-title"
            >
              <header className="challenge-type-heading">
                <div>
                  <span className="challenge-type-label">
                    <Footprints size={16} aria-hidden="true" />
                    RESISTENCIA
                  </span>
                  <h2 id="running-challenges-title">Tu próxima distancia</h2>
                  <p>Del primer 10K a la maratón. Elige tu objetivo.</p>
                </div>
                <LoadingImage
                  src={runningPhoto}
                  alt="Juan entrenando en la pista de atletismo"
                  width="180"
                  height="100"
                />
              </header>
              <div className="challenge-grid">
                {runningChallenges.map((challenge, i) => (
                  <Reveal className="challenge-card" key={challenge.id} delay={i * 0.06}>
                    <div className="challenge-location">
                      <Footprints size={16} aria-hidden="true" />
                      <span>Correr</span>
                      <span>0{i + 1}</span>
                    </div>
                    <div
                      className="challenge-distance"
                      aria-label={`Objetivo ${challenge.distance} kilómetros`}
                    >
                      <strong>{challenge.distance}</strong>
                      <span>{challenge.unit}</span>
                      <Flag size={28} aria-hidden="true" />
                    </div>
                    <h3>{challenge.distanceName}</h3>
                    <p>{challenge.description}</p>
                    <span className="challenge-focus">{challenge.focus}</span>
                    <Link to={`/contacto?reto=${challenge.id}`} className="v2-button">
                      Preparar este reto <ArrowUpRight size={19} />
                      <span className="sr-only">: {challenge.distanceName}</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
              <p className="challenge-note">
                Elegimos juntos la distancia y el tiempo de preparación según tu nivel y
                disponibilidad.
              </p>
            </section>
          </TabsContent>
          <TabsContent value="retos-fuerza">
            <section
              id="retos-fuerza"
              className="challenge-category"
              aria-labelledby="strength-challenges-title"
            >
              <header className="challenge-type-heading">
                <div>
                  <span className="challenge-type-label">
                    <Dumbbell size={16} aria-hidden="true" />
                    FUERZA
                  </span>
                  <h2 id="strength-challenges-title">Tu próxima marca</h2>
                  <p>Más fuerza, más control. Una progresión a tu medida.</p>
                </div>
                <LoadingImage
                  src={strengthPhoto}
                  alt="Juan entrenando fuerza en el gimnasio"
                  width="180"
                  height="100"
                />
              </header>
              <div className="challenge-grid">
                {strengthChallenges.map((challenge, i) => (
                  <Reveal
                    className="challenge-card strength-challenge"
                    key={challenge.id}
                    delay={i * 0.06}
                  >
                    <div className="challenge-location">
                      <Dumbbell size={16} aria-hidden="true" />
                      <span>{challenge.exercise}</span>
                      <span>0{i + 1}</span>
                    </div>
                    <div className="challenge-distance" aria-label={challenge.title}>
                      <strong>{challenge.value}</strong>
                      <span>{challenge.unit}</span>
                    </div>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                    <span className="challenge-focus">{challenge.focus}</span>
                    <Link to={`/contacto?reto=${challenge.id}`} className="v2-button">
                      Preparar este reto <ArrowUpRight size={19} aria-hidden="true" />
                      <span className="sr-only">: {challenge.title}</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="eventos">
            <RunningEvents />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

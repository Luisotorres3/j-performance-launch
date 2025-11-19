import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import PackCard from "@/components/PackCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrainingPlans = () => {
  const plans = [
    {
      title: "Básico",
      prices: { mensual: 49.87, trimestral: 134.21, semestral: 280.17 },
      features: [
        "Programa de entrenamiento personalizado",
        "Revisiones semanales de progreso",
        "Guías nutricionales básicas",
        "Soporte por correo electrónico",
        "Acceso a la biblioteca de entrenamientos",
      ],
    },
    {
      title: "Profesional",
      popular: true,
      prices: { mensual: 74.87, trimestral: 209.21, semestral: 419.17 },
      features: [
        "Incluye todas las características del plan Básico",
        "Programa de entrenamiento avanzado",
        "Plan nutricional detallado",
        "Consultas por video quincenales",
        "Soporte prioritario",
        "Panel de seguimiento de rendimiento",
      ],
    },
    {
      title: "Élite",
      prices: { mensual: 104.87, trimestral: 289.21, semestral: 598.17 },
      features: [
        "Incluye todas las características del plan Profesional",
        "Consultas por video semanales",
        "Análisis avanzado de biomecánica",
        "Recomendaciones de suplementación",
        "Soporte por mensajería 24/7",
        "Análisis mensual de composición corporal",
      ],
    },
    {
      title: "Opositores",
      prices: { mensual: 61.87, trimestral: 168.21, semestral: 371.22 },
      features: [
        "Programas específicos para preparación de oposiciones físicas",
        "Entrenamientos estructurados por objetivos",
        "Plan nutricional orientado a rendimiento",
        "Soporte y seguimiento regular",
      ],
    },
    {
      title: "Readaptación",
      prices: { mensual: 35.87, trimestral: 95.21, semestral: 190.17 },
      features: [
        "Protocolos de readaptación tras lesión",
        "Evaluación y seguimiento funcional",
        "Programas de recuperación progresiva",
        "Coordinación con profesionales de la salud",
      ],
    },
  ];

  const [period, setPeriod] = useState<'mensual'|'trimestral'|'semestral'>('mensual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [visiblePlan, setVisiblePlan] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const elements = Array.from(document.querySelectorAll('.plan-card')) as HTMLElement[];
    if (elements.length === 0) return;

    const options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: [0.25, 0.5, 0.75] };
    const observer = new IntersectionObserver((entries) => {
      // choose the entry with largest intersectionRatio
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length === 0) return;
      visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const top = visibleEntries[0];
      const title = top.target.getAttribute('data-title');
      if (title) setVisiblePlan(title);
    }, options);

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Planes mensuales de <span className="text-primary">entrenamiento</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elige el plan perfecto para tu camino hacia la forma física. Todos los planes incluyen programas personalizados diseñados específicamente para tus objetivos y nivel.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="inline-flex rounded-full bg-card p-1 border border-border shadow-sm" role="tablist" aria-label="Selector de periodo">
              <button
                type="button"
                role="tab"
                aria-pressed={period === "mensual"}
                onClick={() => setPeriod("mensual")}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${period === "mensual" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-primary/10"}`}
              >
                Mensual
              </button>
              <button
                type="button"
                role="tab"
                aria-pressed={period === "trimestral"}
                onClick={() => setPeriod("trimestral")}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${period === "trimestral" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-primary/10"}`}
              >
                Trimestral
              </button>
              <button
                type="button"
                role="tab"
                aria-pressed={period === "semestral"}
                onClick={() => setPeriod("semestral")}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${period === "semestral" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-primary/10"}`}
              >
                Semestral
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                data-title={plan.title}
                onClick={() => setSelectedPlan(plan.title)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedPlan(plan.title); }}
                className={`plan-card animate-slide-up h-full cursor-pointer ${selectedPlan === plan.title ? 'ring-2 ring-primary rounded-lg' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-pressed={selectedPlan === plan.title}
              >
                <PricingCard {...plan} selectedPeriod={period} className="h-full" showCTA={false} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="max-w-md mx-auto">
              <Button asChild size="lg" className="w-full" disabled={!selectedPlan}>
                <Link to={selectedPlan ? `/contact?plan=${encodeURIComponent(selectedPlan)}` : '#'} className={`${!selectedPlan ? 'pointer-events-none' : ''}`}>
                  {selectedPlan ? `Empieza ya — ${selectedPlan}` : 'Elige un plan'}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile floating CTA for the plan currently in view while scrolling */}
          {visiblePlan && (
            <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-50 md:hidden">
              <Button asChild size="lg" className="px-6">
                <Link to={`/contact?plan=${encodeURIComponent(visiblePlan)}`}>
                  Empieza — {visiblePlan}
                </Link>
              </Button>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">¿No sabes qué plan es el indicado para ti?</p>
            <a href="/contacto" className="text-primary hover:underline font-semibold">
              Contacta conmigo para una consulta gratuita →
            </a>
          </div>
        </div>
      </section>

      {/* Packs section merged from Packs.tsx */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Packs especiales de <span className="text-primary">3 meses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprométete con tu transformación con nuestros packs exclusivos de 3 meses. Ahorra y recibe regalos premium para apoyar tu progreso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Pack 3 Meses Básico",
                originalPrice: 135,
                price: 100,
                savings: 35,
                gift: "500 g Proteína Premium",
                features: [
                  "3 meses del plan Básico",
                  "Incluye todas las características del plan Básico",
                  "Programa de entrenamiento personalizado",
                  "Seguimiento semanal del progreso",
                  "Guías de nutrición",
                  "Soporte por correo electrónico",
                ],
              },
              {
                title: "Pack 3 Meses Avanzado",
                originalPrice: 225,
                price: 190,
                savings: 35,
                gift: "2 kg Proteína Premium (~45€ valor)",
                features: [
                  "3 meses del plan Avanzado",
                  "Incluye todas las características del plan Avanzado",
                  "Entrenamiento y nutrición avanzada",
                  "Llamadas por video quincenales",
                  "Soporte prioritario",
                  "Panel de rendimiento",
                ],
              },
              {
                title: "Pack 3 Meses Élite",
                originalPrice: 270,
                price: 235,
                savings: 35,
                gift: "2 kg Proteína Premium + 500 g Creatina",
                features: [
                  "3 meses del plan Élite",
                  "Incluye todas las características premium",
                  "Consultas semanales",
                  "Análisis biomecánico",
                  "Soporte 24/7",
                  "Seguimiento de composición corporal",
                  "Orientación sobre suplementos",
                ],
              },
            ].map((pack, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PackCard {...pack} />
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-muted p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4 text-center">¿Por qué elegir un pack de 3 meses?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Mejores resultados:</strong> La constancia es clave para la transformación. 3 meses proporcionan el tiempo óptimo para ver cambios significativos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Ahorro de costes:</strong> Ahorra 35€ en comparación con suscripciones mensuales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Regalos Premium:</strong> Recibe suplementos de alta calidad para acelerar tu progreso.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Compromiso a largo plazo:</strong> Crea hábitos duraderos y logra resultados sostenibles.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingPlans;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import PackCard from "@/components/PackCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TrainingPlans = () => {
  const plans = [
    {
      title: "Básico",
      originalPrice: 60,
      price: 50,
      savings: 10,
      giftTrimestral: "500g Proteína ",
      giftSemestral: "500gr Proteína + 100g Creatina",
      features: [
        "Entrenamiento profesional",
        "Control de cargas",
        "Planificación versátil y contrastada",
        "Revisiones y actualizaciones periódicas",
        "Método probado para empezar a mejorar desde cualquier nivel",
        "Revisión técnica"
      ],
    },
    {
      title: "Profesional",
      originalPrice: 90,
      price: 75,
      savings: 15,
      giftTrimestral: "500gr Proteína + 100g Creatina",
      giftSemestral: "1kg Proteína + 100g Creatina",
      popular: true,
      features: [
        "Incluye todas las características del plan Básico",
        "Nutrición controlada",
        "Control del rendimiento",
        "Gestión de hábitos",
        "Videollamada mensual para evaluar la evolución de la programación"

      ],
    },
    {
      title: "Élite",
      originalPrice: 130,
      price: 110,
      savings: 20,
      giftTrimestral: "1kg Proteína + 500g Creatina",
      giftSemestral: "2kg Proteína + 500g Creatina",
      features: [
        "Incluye todas las características del plan Profesional",
        "Técnicas de nutrición avanzada",
        "Gestión de la suplementación",
        "Planificación avanzada por macro y mesociclos",
        "Informes exhaustivos personalizados de rendimiento mensuales"

      ],
    },
    {
      title: "Opositores",
      originalPrice: 62,
      price: 50,
      savings: 12,
      giftTrimestral: "500gr Proteína + 100g Creatina",
      giftSemestral: "1kg Proteína + 100g Creatina",
      features: [
        "Entrenamiento + nutrición adaptado a tus pruebas físicas y a tu nivel de base",
        "Mediciones programadas de marcas",
        "Análisis de fortalezas y debilidades",
        "Control de la técnica",
        "Ayuda con la gestión del conjunto de la oposición"

      ],
    },
    {
      title: "Readaptación",
      originalPrice: 50,
      price: 35,
      savings: 6,
      giftSemestral: "1kg Proteína + 100g Creatina",
      features: [
        "Trabajo para que vuelvas a hacer deporte con normalidad",
        "Vuelve a competir sin riesgos",
        "Trabajo estructural",
        "Transición a tu máximo rendimiento",
        "Comunicación clara sobre el progreso.",
        "Especialista en lesiones de tren inferior"

      ],
    },
  ];

  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [visiblePlan, setVisiblePlan] = useState<string | null>(null);
  const [period, setPeriod] = useState<"mensual" | "trimestral" | "semestral">("mensual");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = Array.from(document.querySelectorAll(".plan-card")) as HTMLElement[];
    if (elements.length === 0) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: [0.25, 0.5, 0.75],
    };
    const observer = new IntersectionObserver((entries) => {
      // choose the entry with largest intersectionRatio
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length === 0) return;
      visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const top = visibleEntries[0];
      const title = top.target.getAttribute("data-title");
      if (title) setVisiblePlan(title);
    }, options);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getPeriodPrice = (base: number) => {
    if (period === "mensual") return base;
    if (period === "trimestral") return Math.round(base * 0.9);
    if (period === "semestral") return Math.round(base * 0.8);
    return base;
  };

  const handlePlanSelect = (plan: typeof plans[0]) => {
    const planData = {
      title: plan.title,
      originalPrice: getPeriodPrice(plan.originalPrice),
      price: getPeriodPrice(plan.price),
      savings: getPeriodPrice(plan.savings),
      gift: period === 'trimestral' ? plan.giftTrimestral : period === 'semestral' ? plan.giftSemestral : undefined,
      features: plan.features,
      period: period
    };
    window.scrollTo(0, 0);
    navigate('/checkout', { state: planData });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-background to-muted/20">
        <div className="w-full px-2 sm:px-4 lg:px-12">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Planes de <span className="text-primary">entrenamiento</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Elige el plan perfecto para tu camino hacia la forma física. Todos los planes incluyen
              programas personalizados diseñados específicamente para tus objetivos y nivel.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center gap-2 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="inline-flex flex-col sm:flex-row rounded-xl sm:rounded-full bg-muted/50 p-1 border border-border shadow-sm backdrop-blur-sm w-full sm:w-auto"
              role="tablist"
              aria-label="Selector de periodo"
            >
              <button
                type="button"
                role="tab"
                aria-pressed={period === "mensual"}
                onClick={() => setPeriod("mensual")}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${period === "mensual" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground hover:bg-background/50"}`}
              >
                Mensual
              </button>
              <button
                type="button"
                role="tab"
                aria-pressed={period === "trimestral"}
                onClick={() => setPeriod("trimestral")}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${period === "trimestral" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground hover:bg-background/50"}`}
              >
                <span>Trimestral</span>
                <span className="ml-1 sm:ml-2 text-xs bg-green-500/20 text-green-500 px-1.5 sm:px-2 py-0.5 rounded-full">
                  -10%
                </span>
              </button>
              <button
                type="button"
                role="tab"
                aria-pressed={period === "semestral"}
                onClick={() => setPeriod("semestral")}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${period === "semestral" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground hover:bg-background/50"}`}
              >
                <span>Semestral</span>
                <span className="ml-1 sm:ml-2 text-xs bg-green-500/20 text-green-500 px-1.5 sm:px-2 py-0.5 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 w-full">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              >
                <PackCard
                  title={plan.title}
                  originalPrice={getPeriodPrice(plan.originalPrice)}
                  price={getPeriodPrice(plan.price)}
                  savings={getPeriodPrice(plan.savings)}
                  gift={period === 'trimestral' ? plan.giftTrimestral : period === 'semestral' ? plan.giftSemestral : undefined}
                  features={plan.features}
                  className="h-full"
                  index={index}
                  selected={selectedPlan === plan.title}
                  onButtonClick={() => handlePlanSelect(plan)}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">¿No sabes qué plan es el indicado para ti?</p>
            <Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>Contacta conmigo para una consulta gratuita →</Link>
          </div>
        </div>
      </section>

      {/* Payment Methods Banner */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto opacity-50">
            {/* Bizum */}
            <div className="h-8 md:h-10 flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Bizum.svg"
                alt="Bizum"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Revolut */}
            <div className="h-8 md:h-10 flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/73/Revolut_logo.svg"
                alt="Revolut"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* PayPal */}
            <div className="h-8 md:h-10 flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Transferencia Bancaria */}
            <div className="h-8 md:h-10 flex items-center">
              <svg viewBox="0 0 48 32" className="h-full w-auto">
                <rect
                  x="2"
                  y="4"
                  width="44"
                  height="24"
                  rx="2"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
                <rect x="2" y="8" width="44" height="8" fill="#666" />
                <line
                  x1="6"
                  y1="20"
                  x2="18"
                  y2="20"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Stripe */}
            <div className="h-8 md:h-10 flex items-center relative">
              <div className="absolute -top-2 -right-2 bg-accent/80 text-accent-foreground text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap z-10">
                Pronto
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                alt="Stripe"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packs section removed */}

      <Footer />
    </div>
  );
};

export default TrainingPlans;

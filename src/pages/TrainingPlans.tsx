import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import PackCard from "@/components/PackCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrainingPlans = () => {
  const plans = [
    {
      title: "Básico",
      originalPrice: 50,
      price: 40,
      savings: 10,
      gift: "Guía de nutrición básica",
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
      originalPrice: 75,
      price: 60,
      savings: 15,
      gift: "Plan nutricional detallado + video técnico",
      popular: true,
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
      originalPrice: 105,
      price: 85,
      savings: 20,
      gift: "Análisis biomecánico + consulta privada",
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
      originalPrice: 62,
      price: 50,
      savings: 12,
      gift: "Plan específico de preparación física",
      features: [
        "Programas específicos para preparación de oposiciones físicas",
        "Entrenamientos estructurados por objetivos",
        "Plan nutricional orientado a rendimiento",
        "Soporte y seguimiento regular",
      ],
    },
    {
      title: "Readaptación",
      originalPrice: 36,
      price: 30,
      savings: 6,
      gift: "Protocolo de readaptación personalizado",
      features: [
        "Protocolos de readaptación tras lesión",
        "Evaluación y seguimiento funcional",
        "Programas de recuperación progresiva",
        "Coordinación con profesionales de la salud",
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [visiblePlan, setVisiblePlan] = useState<string | null>(null);
  const [period, setPeriod] = useState<'mensual'|'trimestral'|'semestral'>('mensual');

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

  const getPeriodPrice = (base: number) => {
    if (period === 'mensual') return base;
    if (period === 'trimestral') return Math.round(base * 0.9);
    if (period === 'semestral') return Math.round(base * 0.8);
    return base;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/20">
        <div className="w-full px-2 sm:px-4 lg:px-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Planes de <span className="text-primary">entrenamiento</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elige el plan perfecto para tu camino hacia la forma física. Todos los planes incluyen programas personalizados diseñados específicamente para tus objetivos y nivel.
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex rounded-full bg-muted/50 p-1 border border-border shadow-sm backdrop-blur-sm" role="tablist" aria-label="Selector de periodo">
              <button
                type="button"
                role="tab"
                aria-pressed={period === 'mensual'}
                onClick={() => setPeriod('mensual')}
                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${period === 'mensual' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}`}
              >
                Mensual
              </button>
              <button
                type="button"
                role="tab"
                aria-pressed={period === 'trimestral'}
                onClick={() => setPeriod('trimestral')}
                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${period === 'trimestral' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}`}
              >
                <span>Trimestral</span>
                <span className="ml-2 text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">-10%</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-pressed={period === 'semestral'}
                onClick={() => setPeriod('semestral')}
                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${period === 'semestral' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}`}
              >
                <span>Semestral</span>
                <span className="ml-2 text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">-20%</span>
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
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.08) }}
              >
                <PackCard
                  title={plan.title}
                  originalPrice={getPeriodPrice(plan.originalPrice)}
                  price={getPeriodPrice(plan.price)}
                  savings={getPeriodPrice(plan.savings)}
                  gift={plan.gift}
                  features={plan.features}
                  className="h-full"
                  index={index}
                  selected={selectedPlan === plan.title}
                  onSelect={() => setSelectedPlan(plan.title)}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">¿No sabes qué plan es el indicado para ti?</p>
            <Link to="/contacto">Contacta conmigo para una consulta gratuita →</Link>
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
                <rect x="2" y="4" width="44" height="24" rx="2" fill="none" stroke="#666" strokeWidth="2"/>
                <rect x="2" y="8" width="44" height="8" fill="#666"/>
                <line x1="6" y1="20" x2="18" y2="20" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
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

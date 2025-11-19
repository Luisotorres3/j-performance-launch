import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PricingCard {...plan} selectedPeriod={period} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">¿No sabes qué plan es el indicado para ti?</p>
            <a href="/contacto" className="text-primary hover:underline font-semibold">
              Contacta conmigo para una consulta gratuita →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingPlans;

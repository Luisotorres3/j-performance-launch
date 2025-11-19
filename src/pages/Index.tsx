import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import ClientsCarousel from "@/components/ClientsCarousel";
import clients from "@/data/clients";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PricingCard from "@/components/PricingCard";
import PackCard from "@/components/PackCard";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const testimonios = [
    {
      name: "Carlos M.",
      text: "En solo 3 meses con J Performance Systems, vi resultados increíbles. El enfoque personalizado marcó la diferencia.",
    },
    {
      name: "Miguel R.",
      text: "La mejor inversión en mi salud. Asesoramiento profesional, resultados sorprendentes y apoyo constante durante todo el proceso.",
    },
    {
      name: "David L.",
      text: "La experiencia de J en biomecánica y nutrición transformó no solo mi cuerpo, sino mi estilo de vida. ¡Muy recomendable!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Highlights />
      {/* Plans Section */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Planes destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros planes más populares diseñados para todos los niveles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
            {[
              { title: "Básico", prices: { mensual: 49.87, trimestral: 134.21, semestral: 280.17 }, features: ["Programa personalizado","Revisiones semanales","Guías nutricionales"] },
              { title: "Profesional", popular: true, prices: { mensual: 74.87, trimestral: 209.21, semestral: 419.17 }, features: ["Todo lo del Básico","Consultas quincenales","Soporte prioritario"] },
              { title: "Élite", prices: { mensual: 104.87, trimestral: 289.21, semestral: 598.17 }, features: ["Consultas semanales","Análisis biomecánico","Soporte 24/7"] },
            ].map((plan, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/training-plans">Ver todos los planes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Packs especiales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ahorra con nuestros packs de 3 meses e incluye regalos premium para potenciar tus resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-8">
            {[
              { title: "Pack 3 Meses Básico", originalPrice: 135, price: 100, savings: 35, gift: "500 g Proteína Premium", features: ["3 meses del plan Básico","Programa personalizado","Seguimiento semanal"] },
              { title: "Pack 3 Meses Avanzado", originalPrice: 225, price: 190, savings: 35, gift: "2 kg Proteína Premium (~45€ valor)", features: ["Entrenamiento y nutrición avanzada","Llamadas quincenales","Soporte prioritario"] },
              { title: "Pack 3 Meses Élite", originalPrice: 270, price: 235, savings: 35, gift: "2 kg Proteína Premium + 500 g Creatina", features: ["Consultas semanales","Análisis biomecánico","Soporte 24/7"] },
              { title: "Pack 3 Meses Pro", originalPrice: 320, price: 280, savings: 40, gift: "Kit premium + asesoría", features: ["Consultas semanales","Análisis avanzado","Soporte 24/7"] },
            ].map((pack, index) => (
              <div key={index} className="animate-slide-up h-full" style={{ animationDelay: `${index * 0.08}s` }}>
                <PackCard {...pack} className="h-full" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/training-plans">Ver packs completos</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Lo que dicen mis clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Resultados reales de personas reales que transformaron sus vidas con J Performance Systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonios.map((testimonial, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/reviews">Ver todas las reseñas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel clients={clients} />

      {/* CTA Section */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a la familia de J Performance Systems y desbloquea tu verdadero potencial con programas de entrenamiento personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/training-plans">Ver planes de entrenamiento</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contáctame</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {showTop && (
        <button
          aria-label="Ir arriba"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow hover:scale-105 transition-transform"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Index;

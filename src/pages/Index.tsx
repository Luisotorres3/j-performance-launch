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
import { motion } from "framer-motion";

const Index = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Highlights - bg-section-alt */}
      <Highlights />
      
      {/* Clients Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 sm:mb-16 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Con quién he trabajado</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Jugadores que han mejorado su rendimiento a través de nuestro programa de entrenamiento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto px-2 sm:px-0">
            {clients.slice(0, 10).map((client, index) => (
              <motion.div
                key={client.id}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={client.photo}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center bg-gradient-to-t from-card to-transparent">
                  <h3 className="font-bold text-lg mb-1">{client.name}</h3>
                  <p className="text-sm text-primary font-semibold">{client.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{client.clubs}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/reviews" onClick={() => window.scrollTo(0, 0)}>Ver todos los clientes</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 sm:mb-16 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Planes destacados</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Descubre nuestros planes más populares diseñados para todos los niveles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
            {[
              { title: "Básico", price: 40, features: ["Programa personalizado","Revisiones semanales","Guías nutricionales"] },
              { title: "Profesional", price: 60, popular: true, features: ["Todo lo del Básico","Consultas quincenales","Soporte prioritario"] },
              { title: "Élite", price: 85, features: ["Consultas semanales","Análisis biomecánico","Soporte 24/7"] },
              { title: "Opositores", price: 50, features: ["Preparación física","Entrenamientos por objetivos","Seguimiento regular"] },
              { title: "Readaptación", price: 30, features: ["Readaptación tras lesión","Evaluación funcional","Recuperación progresiva"] },
            ].map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`relative bg-card/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 ${plan.popular ? 'border-primary/50 ring-2 ring-primary/20' : 'border-border'} hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">{plan.title}</h3>
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-3xl sm:text-4xl font-bold mb-1">{plan.price}€</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">por mes</div>
                  </div>
                  <ul className="text-muted-foreground text-xs sm:text-sm space-y-2 sm:space-y-2.5 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary text-base font-bold">✓</span>
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/planes" onClick={() => window.scrollTo(0, 0)}>Ver todos los planes</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Únete a la familia de J Performance Systems y desbloquea tu verdadero potencial con programas de entrenamiento personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Link to="/planes">Ver todos los planes</Link>
              </Button>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Link to="/contacto">Contáctame</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      {showTop && (
        <button
          aria-label="Ir arriba"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 p-2.5 sm:p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;

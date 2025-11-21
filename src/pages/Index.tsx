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
import FAQ from "@/components/FAQ";
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
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Con quién he trabajado</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
              Jugadores que han mejorado su rendimiento a través de nuestro programa de entrenamiento.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
            {clients.slice(0, 10).map((client, index) => (
              <motion.div
                key={client.id}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={client.photo}
                    alt={client.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 sm:p-3 md:p-4 text-center bg-gradient-to-t from-card to-transparent">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 line-clamp-1">{client.name}</h3>
                  <p className="text-xs sm:text-sm text-primary font-semibold line-clamp-1">{client.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 sm:mt-1 line-clamp-1">{client.clubs}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-8 sm:mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
              <Link to="/reviews" onClick={() => window.scrollTo(0, 0)}>Ver todos los clientes</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Planes destacados</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
              Descubre nuestros planes más populares diseñados para todos los niveles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12">
            {[
              { 
                title: "Básico", 
                price: 50, 
                description: "Para gente principiante o que quiera empezar a entrenar de forma estructurada"
              },
              { 
                title: "Profesional", 
                price: 75, 
                popular: true,
                description: "Para deportistas que buscan maximizar su rendimiento con seguimiento completo"
              },
              { 
                title: "Élite", 
                price: 110, 
                description: "Para atletas de alto nivel que requieren programación avanzada y detallada"
              },
              { 
                title: "Opositores", 
                price: 50, 
                description: "Para personas preparando oposiciones con pruebas físicas específicas"
              },
              { 
                title: "Readaptación", 
                price: 35, 
                description: "Para deportistas recuperándose de lesiones que quieren volver a competir"
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <PackCard
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  className="h-full"
                  index={index}
                  showButton={false}
                />
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
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
              <Link to="/planes" onClick={() => window.scrollTo(0, 0)}>Ver todos los planes</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div 
            className="max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 sm:mb-7 md:mb-8 leading-relaxed px-2">
              Únete a la familia de J Performance Systems y desbloquea tu verdadero potencial con programas de entrenamiento personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto">
                <Link to="/planes" onClick={() => window.scrollTo(0, 0)}>Ver todos los planes</Link>
              </Button>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto">
                <Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>Contáctame</Link>
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

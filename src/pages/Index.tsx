import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import ClientsCarousel from "@/components/ClientsCarousel";
import clients from "@/data/clients";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader, PrimaryButton, PlanCard } from "@/components/shared";

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
      <Section>
        <SectionHeader
          title="Con quién he trabajado"
          description="Jugadores que han mejorado su rendimiento a través de nuestro programa de entrenamiento."
        />

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
          <PrimaryButton to="/reviews">
            Ver todos los clientes
          </PrimaryButton>
        </motion.div>
      </Section>

      {/* Plans Section */}
      <Section bgColor="section-alt">
        <SectionHeader
          title="Planes destacados"
          description="Descubre nuestros planes más populares diseñados para todos los niveles."
        />

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
              <PlanCard
                title={plan.title}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
                index={index}
                showCTA={false}
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
          <PrimaryButton to="/planes">
            Ver todos los planes
          </PrimaryButton>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div 
          className="max-w-3xl mx-auto px-2 text-center"
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
            <PrimaryButton to="/planes" className="hover:scale-105">
              Ver todos los planes
            </PrimaryButton>
            <PrimaryButton to="/contacto" className="hover:scale-105">
              Contáctame
            </PrimaryButton>
          </div>
        </motion.div>
      </Section>

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

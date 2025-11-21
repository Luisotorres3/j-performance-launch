import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";
import clients from "@/data/clients";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackCard from "@/components/PackCard";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { TRAINING_PLANS } from "@/constants/plans";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Clients Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Con quién he trabajado
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
              Jugadores que han mejorado su rendimiento a través de nuestro programa de
              entrenamiento.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {clients.slice(0, 6).map((client, index) => (
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
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 line-clamp-1">
                    {client.name}
                  </h3>
                  {client.currentClub && (
                    <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold line-clamp-1">
                      {client.currentClub}
                    </p>
                  )}
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
            <Button
              asChild
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            >
              <Link to="/reviews" onClick={() => window.scrollTo(0, 0)}>
                Ver todos los clientes
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Highlights - bg-section-alt */}
      <Highlights />
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Planes destacados
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
              Descubre nuestros planes más populares diseñados para todos los niveles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12">
            {TRAINING_PLANS.map((plan, index) => {
              // Simple descriptions for the index page
              const descriptions: Record<string, string> = {
                Básico:
                  "Para gente principiante o que quiera empezar a entrenar de forma estructurada",
                Profesional:
                  "Para deportistas que buscan maximizar su rendimiento con seguimiento completo",
                Élite: "Para atletas de alto nivel que requieren programación avanzada y detallada",
                Opositores: "Para personas preparando oposiciones con pruebas físicas específicas",
                Readaptación:
                  "Para deportistas recuperándose de lesiones que quieren volver a competir",
              };

              return (
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
                    description={descriptions[plan.title]}
                    className="h-full"
                    index={index}
                    showButton={false}
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            >
              <Link to="/planes" onClick={() => window.scrollTo(0, 0)}>
                Ver todos los planes
              </Link>
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
              Únete a la familia de J Performance Systems y desbloquea tu verdadero potencial con
              programas de entrenamiento personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Button
                asChild
                size="lg"
                className="shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
              >
                <Link to="/planes" onClick={() => window.scrollTo(0, 0)}>
                  Ver todos los planes
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
              >
                <Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>
                  Contáctame
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

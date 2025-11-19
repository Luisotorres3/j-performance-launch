import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import ClientsCarousel from "@/components/ClientsCarousel";
import clients from "@/data/clients";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
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
      <section className="py-20 bg-secondary">
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
    </div>
  );
};

export default Index;

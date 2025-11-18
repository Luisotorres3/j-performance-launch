import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import TrabajosAnteriores from "@/components/TrabajosAnteriores";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      text: "En solo 3 meses con J Performance System, he visto resultados increíbles. El enfoque personalizado marcó la diferencia.",
    },
    {
      name: "Miguel R.",
      text: "La mejor inversión en mi salud. Orientación profesional, resultados sorprendentes y apoyo constante durante todo mi proceso.",
    },
    {
      name: "David L.",
      text: "La experiencia de J en biomecánica y nutrición transformó no solo mi cuerpo, sino todo mi estilo de vida. ¡Altamente recomendado!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Highlights />
      <TrabajosAnteriores />
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Qué dicen mis clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Resultados reales de personas reales que transformaron sus vidas con J Performance System.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/opiniones">Ver todas las opiniones</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a la familia de J Performance System y desata tu verdadero potencial con programas de entrenamiento personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/planes">Ver planes de entrenamiento</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contacto">Contáctame</Link>
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

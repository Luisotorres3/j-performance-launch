import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Carlos Martinez",
      text: "Trabajar con J ha sido un cambio total. Perdí 15 kg en 4 meses mientras ganaba músculo. El enfoque personalizado y el apoyo constante marcaron la diferencia. La mejor decisión para mi salud.",
      rating: 5,
    },
    {
      name: "Miguel Rodriguez",
      text: "El plan Élite vale cada euro. Consultas semanales, planes nutricionales detallados y el análisis biomecánico me ayudaron a superar un estancamiento que arrastraba años. Resultados increíbles.",
      rating: 5,
    },
    {
      name: "David Lopez",
      text: "La experiencia de J en nutrición deportiva y entrenamiento es excepcional. No solo estoy más fuerte y definido, sino que me siento mejor en el día a día. El pack de 3 meses fue una gran inversión.",
      rating: 5,
    },
    {
      name: "Antonio Garcia",
      text: "Profesional, con conocimiento y realmente atento. J se toma el tiempo de entender tus objetivos y crea programas que funcionan. Se lo he recomendado a todos mis amigos.",
      rating: 5,
    },
    {
      name: "Fernando Silva",
      text: "Empecé con el plan Básico y rápido pasé al Avanzado. La progresión en fuerza y físico ha sido notable. La orientación nutricional por sí sola merece la inversión.",
      rating: 5,
    },
    {
      name: "Roberto Sanchez",
      text: "Como alguien que luchaba con la constancia, el coaching de J me mantuvo responsable y motivado. Los resultados hablan por sí mismos: -20 kg y me siento más fuerte que nunca.",
      rating: 5,
    },
    {
      name: "Pablo Moreno",
      text: "La atención al detalle en el diseño del programa es impresionante. Cada ejercicio tiene un propósito y la progresión está perfectamente estructurada. Finalmente veo los resultados que siempre quise.",
      rating: 5,
    },
    {
      name: "Javier Ruiz",
      text: "J no te da un plan genérico. Analiza tu biomecánica, ajusta según tu progreso y asegura que entrenes de forma óptima. Un verdadero profesional.",
      rating: 5,
    },
    {
      name: "Luis Fernandez",
      text: "El pack Élite de 3 meses transformó mi cuerpo y mi mentalidad. Los chequeos semanales y el apoyo constante me mantuvieron en el camino. ¡La mejor forma de mi vida a los 42 años!",
      rating: 5,
    },
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Historias de <span className="text-primary">éxito</span> de clientes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transformaciones reales de personas reales. Lee lo que los clientes de J Performance tienen que decir sobre su experiencia.
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-4 bg-muted px-8 py-4 rounded-lg border border-border">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
                <div className="text-sm text-muted-foreground">{totalReviews} reseñas</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <TestimonialCard {...review} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-muted p-12 rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-4">¿Listo para escribir tu historia de éxito?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete a estos clientes satisfechos y comienza tu transformación hoy con programas personalizados diseñados para generar resultados.
            </p>
            <a
              href="/planes"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver planes de entrenamiento
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Carlos Martínez",
      text: "Trabajar con J ha sido un antes y un después. He perdido 15 kg en 4 meses mientras ganaba músculo. El enfoque personalizado y el apoyo constante marcaron la diferencia. La mejor decisión que he tomado por mi salud.",
      rating: 5,
    },
    {
      name: "Miguel Rodríguez",
      text: "El plan Élite vale cada céntimo. Las consultas semanales, los planes de nutrición detallados y el análisis de biomecánica me ayudaron a superar un estancamiento en el que llevaba años. ¡Resultados increíbles!",
      rating: 5,
    },
    {
      name: "David López",
      text: "La experiencia de J en nutrición deportiva y entrenamiento es excepcional. No solo estoy más fuerte y definido, sino que me siento mejor en mi vida diaria. El pack de 3 meses fue una gran inversión.",
      rating: 5,
    },
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Opiniones de <span className="text-blue-600">Clientes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transformaciones reales de personas reales. Mira lo que los clientes de J Performance System tienen que decir sobre su experiencia.
            </p>

            <div className="inline-flex items-center gap-4 bg-gray-100 px-8 py-4 rounded-lg border border-gray-200">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
                <div className="text-sm text-gray-500">{totalReviews} opiniones</div>
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

          <div className="mt-20 text-center bg-gray-100 p-12 rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para escribir tu propia historia de éxito?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Únete a estos clientes satisfechos y comienza tu transformación hoy con programas de entrenamiento personalizados diseñados para obtener resultados.
            </p>
            <a
              href="/planes"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Planes de Entrenamiento
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;

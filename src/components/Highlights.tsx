import { Dumbbell, Apple, Target } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: Target,
      title: "Optimización del Rendimiento",
      description: "Programas de entrenamiento con base científica diseñados para maximizar tu rendimiento físico y capacidades atléticas.",
    },
    {
      icon: Apple,
      title: "Guía de Nutrición",
      description: "Planes de nutrición personalizados que alimentan tu cuerpo para obtener resultados óptimos y un progreso sostenible.",
    },
    {
      icon: Dumbbell,
      title: "Entrenamiento Personalizado",
      description: "Programas de entrenamiento a medida adaptados a tus objetivos, nivel de condición física y biomecánica para una máxima eficiencia.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Por qué elegir J Performance System</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entrenamiento profesional que combina experiencia, dedicación y métodos probados para ayudarte a alcanzar tus metas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <highlight.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
